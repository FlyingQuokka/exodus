"""Writes the lead, cart, Founders and Customer-stop automations, the draft Founders campaigns and the settings file.

Run:  python tools/make-lead-funnels.py

O02 was deleted on 2 November 2026. O01 starts on the Lead tag. O03 starts on the Launch Open tag, which the owner
applies to the leads on launch day. O04 starts when FluentCRM records an abandoned FluentCart cart.
"""
import io
import json
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, 'site', 'btv-sync', 'data')
FUNNELS = os.path.join(DATA, 'funnels')
TAGS = os.path.join(DATA, 'tags.json')


def dump(path, obj):
    with io.open(path, 'w', encoding='utf-8', newline='\n') as f:
        json.dump(obj, f, ensure_ascii=False, indent=1)
        f.write('\n')


def email(eid):
    return {'key': eid, 'do': 'email', 'email': eid}


def wait(key, amount, unit):
    return {'key': key, 'do': 'wait', 'amount': amount, 'unit': unit}


def funnel(name, title, trigger, steps, run_multiple=False, publish=True):
    dump(os.path.join(FUNNELS, name), {'title': title, 'trigger': trigger, 'run_multiple': run_multiple, 'publish': publish, 'steps': steps})


def every_second_day(prefix, count):
    steps = [email('%s-01' % prefix)]
    for n in range(2, count + 1):
        steps.append(wait('%s-w%02d' % (prefix, n), 2, 'days'))
        steps.append(email('%s-%02d' % (prefix, n)))
    return steps


def main():
    funnel('o01-prelaunch.json', 'O01 Pre-launch nurture', {'type': 'tag_applied', 'tags': ['Lead']}, every_second_day('O01', 5))
    funnel('o03-launch.json', 'O03 Public launch', {'type': 'tag_applied', 'tags': ['Launch Open']}, every_second_day('O03', 8))
    funnel('o04-cart.json', 'O04 Cart abandonment', {'type': 'cart_abandoned'}, [
        wait('O04-w1', 1, 'hours'), email('O04-01'),
        wait('O04-w2', 23, 'hours'), email('O04-02'),
        wait('O04-w3', 2, 'days'), email('O04-03'),
    ], run_multiple=True, publish=True)
    funnel('stop-leads-customer.json', 'STOP Leads - Customer', {'type': 'tag_applied', 'tags': ['Customer']}, [
        {'key': 'STOP-cancel', 'do': 'cancel', 'automations': ['O01 Pre-launch nurture', 'O03 Public launch', 'O04 Cart abandonment'],
         'note': 'A buyer leaves the lead sequences.'},
    ], run_multiple=True)
    funnel('fnd1-founders.json', 'FND1 Founders coupon', {'type': 'tag_applied', 'tags': ['Founder']}, [email('FND1')])

    dump(os.path.join(DATA, 'campaigns.json'), [
        {'title': 'FB1 Founders offer is open', 'email': 'FB1', 'include': 'Lead',
         'exclude': ['Customer', 'Founder', 'Upgrade Active', 'Welcome Active']},
        {'title': 'FB2 Founders offer closes soon', 'email': 'FB2', 'include': 'Lead',
         'exclude': ['Customer', 'Founder', 'Upgrade Active', 'Welcome Active']},
    ])
    dump(os.path.join(DATA, 'settings.json'), {'fluentcrm_experimental': {'abandoned_cart': 'yes'}})

    tags = json.load(io.open(TAGS, encoding='utf-8'))
    added = [t for t in ['Launch Open'] if t not in tags]
    tags += added
    dump(TAGS, tags)
    print('lead, cart, Founders and stop automations written; %d tags added' % len(added))


if __name__ == '__main__':
    main()
