"""Writes the event and behaviour automations (O05, O06, O08 to O15) into site/btv-sync/data/funnels/.

Run:  python tools/make-event-funnels.py

Timing comes from the Automation lines in Emails/build/seq-O05-O15.md and Emails/plan-ending-emails.md.
O07 (refund) is a hand-written file. O09-2 was deleted by the owner on 2 November 2026.
"""
import io
import json
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FUNNELS = os.path.join(ROOT, 'site', 'btv-sync', 'data', 'funnels')
TAGS = os.path.join(ROOT, 'site', 'btv-sync', 'data', 'tags.json')

PLANS = ['Apprentice Botter', 'Novice Botter', 'Expert Botter', 'Pro Botter', 'Master Botter']
NOVICE_UP = PLANS[1:]


def email(eid, note=None):
    s = {'key': eid, 'do': 'email', 'email': eid}
    if note:
        s['note'] = note
    return s


def wait(key, days):
    return {'key': key, 'do': 'wait', 'amount': days, 'unit': 'days'}


def skip_if(key, tags, note=None):
    s = {'key': key, 'do': 'condition', 'if': {'match': 'any', 'tags': tags}, 'yes': [{'key': key + '-end', 'do': 'end'}], 'no': []}
    if note:
        s['note'] = note
    return s


def require(key, tags, note=None):
    s = {'key': key, 'do': 'condition', 'if': {'match': 'any', 'tags': tags}, 'yes': [], 'no': [{'key': key + '-end', 'do': 'end'}]}
    if note:
        s['note'] = note
    return s


def write(name, title, trigger_tag, steps, run_multiple=False):
    funnel = {
        'title': title,
        'trigger': {'type': 'tag_applied', 'tags': [trigger_tag]},
        'run_multiple': run_multiple, 'publish': True, 'steps': steps,
    }
    with io.open(os.path.join(FUNNELS, name), 'w', encoding='utf-8', newline='\n') as f:
        json.dump(funnel, f, ensure_ascii=False, indent=1)
        f.write('\n')


def main():
    # O05 Dormant. The app adds Dormant and never removes it, and a tag already held starts nothing.
    # So the first step takes the tag off, which lets the next dormant spell start the sequence again.
    write('o05-dormant.json', 'O05 Dormant check-in', 'Dormant', [
        {'key': 'O05-tag-off', 'do': 'remove_tag', 'tags': ['Dormant'],
         'note': 'Dormant is only the trigger here. The app never removes it, so this step does.'},
        skip_if('O05-busy', ['Welcome Active', 'Upgrade Active'], 'Not while the welcome track or an upgrade sequence is running.'),
        require('O05-member-1', PLANS, 'A member whose plan has ended is not asked whether the plan still fits.'),
        email('O05-1'), wait('O05-w2', 4),
        require('O05-member-2', PLANS),
        email('O05-2'), wait('O05-w3', 4),
        require('O05-member-3', PLANS),
        email('O05-3'),
    ], run_multiple=True)

    # O06. Plan Ended means the member pressed Cancel and the plan has now ended. The app never removes it.
    # The RESET automation below takes it off when the member buys a plan again.
    write('o06-winback.json', 'O06 Win-back after plan end', 'Plan Ended', [
        wait('O06-w2', 2),
        skip_if('O06-back-2', PLANS, 'A plan tag means the member has come back.'),
        email('O06-2'), wait('O06-w3', 28),
        skip_if('O06-back-3', PLANS),
        email('O06-3'), wait('O06-w4', 30),
        skip_if('O06-back-4', PLANS),
        email('O06-4'), wait('O06-w5', 30),
        skip_if('O06-back-5', PLANS),
        email('O06-5'),
    ], run_multiple=True)

    # The app never removes Cancelled, Plan Ended or Dormant. Without this a second cycle would start nothing,
    # because FluentCRM starts an automation only when a tag is newly attached.
    write('reset-returning-member.json', 'RESET Returning member', 'Novice Botter', [
        {'key': 'R-clear', 'do': 'remove_tag', 'tags': ['Cancelled', 'Plan Ended', 'Dormant'],
         'note': 'A member with a plan again starts clean, so a later cancel or quiet spell is noticed.'},
    ], run_multiple=True)
    # the same reset on every plan tag
    import json as _json
    reset_path = os.path.join(FUNNELS, 'reset-returning-member.json')
    reset = _json.load(io.open(reset_path, encoding='utf-8'))
    reset['trigger']['tags'] = PLANS
    with io.open(reset_path, 'w', encoding='utf-8', newline='\n') as f:
        _json.dump(reset, f, ensure_ascii=False, indent=1)
        f.write('\n')
    old = os.path.join(FUNNELS, 'o06-cancelling.json')
    if os.path.exists(old):
        os.remove(old)
    with io.open(os.path.join(ROOT, 'site', 'btv-sync', 'data', 'retired.json'), 'w', encoding='utf-8', newline='\n') as f:
        _json.dump(['O06 Cancelling'], f, indent=1)
        f.write('\n')

    # O08 Affiliates
    write('o08-affiliate.json', 'O08 Affiliate onboarding', 'Affiliate Joined', [
        require('O08-tier', NOVICE_UP, 'The programme is Novice Botter and above.'),
        email('O08-1'), wait('O08-w2', 2), email('O08-2'), wait('O08-w3', 2), email('O08-3'),
        wait('O08-w4', 3), email('O08-4'), wait('O08-w5', 7), email('O08-5'),
    ])
    write('o08-first-commission.json', 'O08 First commission', 'First Commission', [email('O08-6')])

    # O09 to O14
    write('o09-feedback.json', 'O09 Feedback request', 'First Sale', [wait('O09-w1', 3), email('O09-1')])
    write('o10-first-sale.json', 'O10 First sale', 'First Sale', [email('O10-1', 'Event email, so it sends even during the welcome track.')])
    write('o11-seller.json', 'O11 Bot Market seller', 'Bot Market Seller', [
        {'key': 'O11-busy', 'do': 'condition', 'note': 'Plan says wait while the welcome track or an upgrade runs. This waits once for ten days.',
         'if': {'match': 'any', 'tags': ['Welcome Active', 'Upgrade Active']}, 'yes': [wait('O11-hold', 10)], 'no': []},
        email('O11-1'), wait('O11-w2', 5), email('O11-2'),
    ])
    write('o12-buyer.json', 'O12 Bot Market buyer', 'Bot Market Buyer', [email('O12-1'), wait('O12-w2', 7), email('O12-2')])
    write('o13-gpt.json', 'O13 Moved across from a GPT', 'Migrated From GPT', [email('O13-1')])
    write('o14-auto-top-up.json', 'O14 Auto top-up', 'Auto Top Up', [email('O14-1'), wait('O14-w2', 4), email('O14-2')])

    # O15 Plan ending reminders: one funnel per tag, sending at once
    for n, tag in [(1, 'Plan Ending Soon'), (2, 'Plan Ending Tomorrow'), (3, 'Plan Ends Today'), (4, 'Plan Ended')]:
        write('o15-%d-%s.json' % (n, tag.lower().replace(' ', '-')), 'O15-%d %s' % (n, tag), tag,
              [email('O15-%d' % n)], run_multiple=True)

    tags = json.load(io.open(TAGS, encoding='utf-8'))
    added = [t for t in ['Plan Ending Soon', 'Plan Ending Tomorrow', 'Plan Ends Today'] if t not in tags]
    tags += added
    with io.open(TAGS, 'w', encoding='utf-8', newline='\n') as f:
        json.dump(tags, f, ensure_ascii=False, indent=2)
        f.write('\n')
    print('event automations written; %d tags added' % len(added))


if __name__ == '__main__':
    main()
