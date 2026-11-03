"""Writes site/btv-sync/data/funnels/a0-welcome.json: the 30 day welcome sequence from plan v4.

Run:  python tools/make-welcome-funnel.py

The day order, the plan each email needs and the preview emails come from
Emails/01-welcome-sequence-plan-v4.md. Edit the DAYS list below and run again to change them.
Each later email goes one day after the one before, so it arrives at about the time the member signed up (owner decision 3 November 2026).
"""
import io
import json
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'site', 'btv-sync', 'data', 'funnels', 'a0-welcome.json')

SEND_TIME = '09:00'
ALL_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

NOVICE_UP = ['Novice Botter', 'Expert Botter', 'Pro Botter', 'Master Botter']
EXPERT_UP = ['Expert Botter', 'Pro Botter', 'Master Botter']
PRO_UP = ['Pro Botter', 'Master Botter']
MASTER = ['Master Botter']

# (day, email id, who it is for, email id for everyone else)
# who: None means every tier. Otherwise the list of plan tags that get the full email.
DAYS = [
    (2, 'B1', None, None),
    (3, 'B2', None, None),
    (4, 'B3', None, None),
    (5, 'C1', None, None),
    (6, 'W1', None, None),
    (7, 'W2', None, None),
    (8, 'W3', None, None),
    (9, 'M1', NOVICE_UP, 'M1-preview'),
    (10, 'M2', NOVICE_UP, 'M2-preview'),
    (11, 'M3', NOVICE_UP, 'M3-preview'),
    (12, 'M4', NOVICE_UP, 'M4-preview'),
    (13, 'M5', PRO_UP, 'M5-preview'),
    (14, 'M6', PRO_UP, 'M6-preview'),
    (15, 'F1', NOVICE_UP, 'F1-P'),
    (16, 'F2', NOVICE_UP, 'F2-P'),
    (17, 'TIP1', None, None),
    (18, 'F3', EXPERT_UP, 'F3-P'),
    (19, 'F4', None, None),
    (20, 'F5', PRO_UP, 'F5-P'),
    (21, 'F6', PRO_UP, 'F6-P'),
    (22, 'N1', None, None),
    (23, 'N2', None, None),
    (24, 'N3-master', MASTER, 'N3'),
    (25, 'N4-master', MASTER, 'N4'),
    (26, 'N5', None, None),
    (27, 'N6', None, None),
    (28, 'TIP2', None, None),
    (29, 'S28', PRO_UP, 'S28-preview'),
]

S30 = [
    ('S30-A', 'Apprentice Botter'),
    ('S30-N', 'Novice Botter'),
    ('S30-E', 'Expert Botter'),
    ('S30-P', 'Pro Botter'),
    ('S30-M', 'Master Botter'),
]


def wait(day):
    # One day after the step before it, so every email reaches a member at about the time they signed up.
    return {'key': 'wait-day-%02d' % day, 'do': 'wait', 'amount': 1, 'unit': 'days'}


def main():
    steps = [
        {'key': 'A0-tags-on', 'do': 'add_tag', 'tags': ['Welcome Active', 'Customer'], 'note': 'Start of the welcome track.'},
        {'key': 'A0-lead-off', 'do': 'remove_tag', 'tags': ['Lead']},
        {'key': 'S01', 'do': 'email', 'email': 'S01', 'note': 'Day 1. Welcome. Sent at once.'},
        {'key': 'A0-wait-T1', 'do': 'wait', 'amount': 5, 'unit': 'minutes'},
        {'key': 'T1', 'do': 'email', 'email': 'T1', 'note': 'Day 1. Quick tour.'},
        {
            'key': 'A0-T2-check', 'do': 'condition',
            'note': 'Day 1. T2 goes when the plan tag has arrived. Otherwise it goes at the end of day 1.',
            'if': {'match': 'any', 'tags': ['Apprentice Botter', 'Novice Botter', 'Expert Botter', 'Pro Botter', 'Master Botter']},
            'yes': [{'key': 'T2-now', 'do': 'email', 'email': 'T2'}],
            'no': [
                {'key': 'A0-wait-T2', 'do': 'wait', 'amount': 8, 'unit': 'hours'},
                {'key': 'T2-late', 'do': 'email', 'email': 'T2'},
            ],
        },
    ]
    for day, full, who, other in DAYS:
        steps.append(wait(day))
        if who is None:
            steps.append({'key': full, 'do': 'email', 'email': full, 'note': 'Day %d. All plans.' % day})
        else:
            steps.append({
                'key': 'gate-day-%02d' % day, 'do': 'condition',
                'note': 'Day %d. Full email for %s. Everyone else gets %s.' % (day, ', '.join(who), other),
                'if': {'match': 'any', 'tags': who},
                'yes': [{'key': full, 'do': 'email', 'email': full}],
                'no': [{'key': other, 'do': 'email', 'email': other}],
            })
    steps.append(wait(30))
    for email, tag in S30:
        steps.append({
            'key': 'gate-' + email, 'do': 'condition',
            'note': 'Day 30. The version for %s.' % tag,
            'if': {'match': 'any', 'tags': [tag]},
            'yes': [{'key': email, 'do': 'email', 'email': email}],
            'no': [],
        })
    steps.append({'key': 'A0-done-on', 'do': 'add_tag', 'tags': ['Welcome Done']})
    steps.append({'key': 'A0-active-off', 'do': 'remove_tag', 'tags': ['Welcome Active'], 'note': 'Broadcasts exclude Welcome Active, so it goes at the end.'})

    funnel = {
        'title': 'A0 Welcome',
        'trigger': {'type': 'subscription_activated'},
        'run_multiple': False,
        'publish': True,
        'steps': steps,
    }
    with io.open(OUT, 'w', encoding='utf-8', newline='\n') as f:
        json.dump(funnel, f, ensure_ascii=False, indent=1)
        f.write('\n')
    print('wrote %d top-level steps to %s' % (len(steps), OUT))


if __name__ == '__main__':
    main()
