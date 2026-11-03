"""Writes the upgrade automations into site/btv-sync/data/funnels/.

Run:  python tools/make-upgrade-funnels.py

Design (from Emails/02-upgrade-sequences-plan.md, decided 3 November 2026):

1. Four DETECT automations, one per Upgraded From tag. The tag that just arrived tells us where the member
   came from, so there is no ambiguity. Each waits two minutes so the new plan tag has arrived, cancels the
   welcome track and any earlier upgrade run, clears out old state tags, then applies a Start Upgrade tag
   for the plan the member now holds.
2. Four TARGET automations (Novice, Expert, Pro, Master), each started by its Start Upgrade tag. The first
   email is the normal welcome for that plan or a jump recap. Then the other nine go on day 1 and every
   second day to day 17. At the end Upgrade Done is applied.
3. Six CATCH-UP automations, one per jump, started by Upgrade Done. Each checks that it is the right jump
   and otherwise ends. The emails go every second day from day 19.
4. Two STOP automations.
"""
import io
import json
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FUNNELS = os.path.join(ROOT, 'site', 'btv-sync', 'data', 'funnels')
TAGS = os.path.join(ROOT, 'site', 'btv-sync', 'data', 'tags.json')

ORDER = ['Apprentice', 'Novice', 'Expert', 'Pro', 'Master']
PLAN = {n: n + ' Botter' for n in ORDER}
FROM = {n: 'Upgraded From ' + n for n in ORDER[:4]}
START = {n: 'Start Upgrade ' + n for n in ORDER[1:]}
PREFIX = {'Novice': 'UN', 'Expert': 'UE', 'Pro': 'UP', 'Master': 'UM'}

# The first email of each target sequence, by where the member came from.
FIRST = {
    'Novice': {'Apprentice': 'UN01'},
    'Expert': {'Apprentice': 'J-AE', 'Novice': 'UE01'},
    'Pro': {'Apprentice': 'J-AP', 'Novice': 'J-NP', 'Expert': 'UP01'},
    'Master': {'Apprentice': 'J-AM', 'Novice': 'J-NM', 'Expert': 'J-EM', 'Pro': 'UM01'},
}

# The catch-up emails for each jump (origin, target), from section 8 of the plan.
CATCHUP = {
    ('Apprentice', 'Expert'): ['UN02', 'UN03', 'UN06', 'UN08'],
    ('Apprentice', 'Pro'): ['UN02', 'UN03', 'UN06', 'UN08', 'UE05', 'UE02'],
    ('Apprentice', 'Master'): ['UN03', 'UN06', 'UE02', 'UE05', 'UP03', 'UP06'],
    ('Novice', 'Pro'): ['UE02', 'UE03', 'UE05', 'UE06'],
    ('Novice', 'Master'): ['UE02', 'UE05', 'UP02', 'UP03', 'UP06', 'UP08'],
    ('Expert', 'Master'): ['UP02', 'UP03', 'UP06', 'UP08'],
}

# The origin that is NOT a jump, per target. Its From tag is cleared at the end of the sequence.
NO_JUMP = {'Novice': 'Apprentice', 'Expert': 'Novice', 'Pro': 'Expert', 'Master': 'Pro'}

T_DETECT = lambda o: 'UP Detect - from %s' % o
T_TARGET = lambda t: 'UP Sequence - %s' % t
T_CATCH = lambda o, t: 'UP Catch-up - %s to %s' % (o, t)
T_STOP1 = 'STOP Upgrade - tag removed'
T_STOP2 = 'STOP Upgrade - cancelled or plan ended'

TARGETS = ORDER[1:]
ORIGINS = ORDER[:4]


def write(name, funnel):
    path = os.path.join(FUNNELS, name)
    with io.open(path, 'w', encoding='utf-8', newline='\n') as f:
        json.dump(funnel, f, ensure_ascii=False, indent=1)
        f.write('\n')


def has_tag_then(key, tag, step):
    return {'key': key, 'do': 'condition', 'if': {'match': 'any', 'tags': [tag]}, 'yes': [step], 'no': []}


def main():
    all_sequences = [T_TARGET(t) for t in TARGETS]
    all_catchups = [T_CATCH(o, t) for (o, t) in CATCHUP]
    all_detects = [T_DETECT(o) for o in ORIGINS]

    # 1. Detect
    for origin in ORIGINS:
        o_idx = ORDER.index(origin)
        possible = ORDER[o_idx + 1:]
        steps = [
            {'key': 'D-wait', 'do': 'wait', 'amount': 2, 'unit': 'minutes', 'note': 'Lets the new plan tag arrive.'},
            {'key': 'D-cancel', 'do': 'cancel',
             'automations': ['A0 Welcome'] + all_sequences + all_catchups + [d for d in all_detects if d != T_DETECT(origin)],
             'note': 'An upgrade ends the welcome track and any earlier upgrade run.'},
            {'key': 'D-clear', 'do': 'remove_tag',
             'tags': ['Welcome Active', 'Upgrade Done', 'Upgrade Routed', 'Upgrade Unrouted'] + [FROM[o] for o in ORIGINS if o != origin] + [START[t] for t in TARGETS],
             'note': 'Clears old state so the tags that follow are new and the hooks fire.'},
            {'key': 'D-flags', 'do': 'add_tag', 'tags': ['Welcome Done', 'Upgrade Active']},
        ]
        # The app sends the plan tag and the Upgraded From tag as separate rows, so the plan tag can arrive
        # seconds or many minutes later. Look at 2 minutes, 12 minutes and 32 minutes. The first look that finds
        # a plan tag starts the sequence and marks the contact as routed so the later looks do nothing.
        for rnd in (1, 2, 3):
            if rnd > 1:
                steps.append({'key': 'D%d-wait' % rnd, 'do': 'wait', 'amount': 10 if rnd == 2 else 20, 'unit': 'minutes'})
            for t in possible:
                steps.append(has_tag_then('D%d-to-%s' % (rnd, t), PLAN[t],
                                          {'key': 'D%d-start-%s' % (rnd, t), 'do': 'add_tag', 'tags': [START[t], 'Upgrade Routed']}))
            steps.append({'key': 'D%d-routed' % rnd, 'do': 'condition', 'if': {'match': 'any', 'tags': ['Upgrade Routed']},
                          'yes': [{'key': 'D%d-routed-end' % rnd, 'do': 'end'}], 'no': []})
        steps.append({'key': 'D-unrouted', 'do': 'add_tag', 'tags': ['Upgrade Unrouted'],
                      'note': 'No plan tag arrived in about 32 minutes. Staff can find these contacts by this tag.'})
        write('up-detect-from-%s.json' % origin.lower(), {
            'title': T_DETECT(origin),
            'trigger': {'type': 'tag_applied', 'tags': [FROM[origin]]},
            'run_multiple': True, 'publish': True, 'steps': steps,
        })

    # 2. Target sequences
    for target in TARGETS:
        pre = PREFIX[target]
        steps = [{'key': 'S-start-off', 'do': 'remove_tag', 'tags': [START[target]]}]
        for origin, email in FIRST[target].items():
            steps.append(has_tag_then('S-first-from-' + origin, FROM[origin], {'key': email, 'do': 'email', 'email': email}))
        for n in range(2, 11):
            steps.append({'key': 'S-wait-%02d' % n, 'do': 'wait', 'amount': 1 if n == 2 else 2, 'unit': 'days'})
            email = '%s%02d' % (pre, n)
            steps.append({'key': email, 'do': 'email', 'email': email})
        steps.append({'key': 'S-from-off', 'do': 'remove_tag', 'tags': [FROM[NO_JUMP[target]]], 'note': 'Not a jump, so no catch-up needs this tag.'})
        steps.append({'key': 'S-active-off', 'do': 'remove_tag', 'tags': ['Upgrade Active']})
        steps.append({'key': 'S-done-on', 'do': 'add_tag', 'tags': ['Upgrade Done'], 'note': 'Starts a catch-up if the member jumped.'})
        write('up-sequence-%s.json' % target.lower(), {
            'title': T_TARGET(target),
            'trigger': {'type': 'tag_applied', 'tags': [START[target]]},
            'run_multiple': True, 'publish': True, 'steps': steps,
        })

    # 3. Catch-ups
    for (origin, target), emails in CATCHUP.items():
        steps = [{
            'key': 'C-check', 'do': 'condition',
            'note': 'Only the member who made this jump continues.',
            'if': {'match': 'all', 'tags': [FROM[origin], PLAN[target]]},
            'yes': [], 'no': [{'key': 'C-end', 'do': 'end'}],
        }]
        for n, email in enumerate(emails, 1):
            steps.append({'key': 'C-wait-%d' % n, 'do': 'wait', 'amount': 2, 'unit': 'days'})
            steps.append({'key': 'C-' + email, 'do': 'email', 'email': email})
        steps.append({'key': 'C-from-off', 'do': 'remove_tag', 'tags': [FROM[origin]]})
        write('cu-%s-to-%s.json' % (origin.lower(), target.lower()), {
            'title': T_CATCH(origin, target),
            'trigger': {'type': 'tag_applied', 'tags': ['Upgrade Done']},
            'run_multiple': True, 'publish': True, 'steps': steps,
        })

    # 4. Stop
    write('stop-upgrade-tag-removed.json', {
        'title': T_STOP1,
        'trigger': {'type': 'tag_removed', 'tags': ['Upgrade Active']},
        'run_multiple': True, 'publish': True,
        'steps': [{'key': 'X-cancel', 'do': 'cancel', 'automations': all_detects + all_sequences,
                   'note': 'Catch-ups are not cancelled here, because a finished sequence removes this tag on purpose.'}],
    })
    write('stop-upgrade-cancelled.json', {
        'title': T_STOP2,
        'trigger': {'type': 'tag_applied', 'tags': ['Cancelled', 'Plan Ended']},
        'run_multiple': True, 'publish': True,
        'steps': [
            {'key': 'X-cancel', 'do': 'cancel', 'automations': all_detects + all_sequences + all_catchups},
            {'key': 'X-clear', 'do': 'remove_tag',
             'tags': ['Upgrade Active', 'Upgrade Done', 'Upgrade Routed', 'Upgrade Unrouted'] + [FROM[o] for o in ORIGINS] + [START[t] for t in TARGETS],
             'note': 'Leaves no old tag behind to block a later upgrade.'},
        ],
    })

    # Tags
    tags = json.load(io.open(TAGS, encoding='utf-8'))
    added = [t for t in list(START.values()) + ['Upgrade Routed', 'Upgrade Unrouted'] if t not in tags]
    tags += added
    with io.open(TAGS, 'w', encoding='utf-8', newline='\n') as f:
        json.dump(tags, f, ensure_ascii=False, indent=2)
        f.write('\n')
    print('wrote 4 detect, 4 sequence, %d catch-up and 2 stop automations; %d tags added' % (len(CATCHUP), len(added)))


if __name__ == '__main__':
    main()
