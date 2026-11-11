/* Pricing page: the Monthly and Annual switch for the plan cards and the comparison table.
   The page works without this file (monthly buttons and a small "or per year" link on each card). With it, the two
   switches on the page change the prices and the buy buttons together. */
(function () {
  'use strict';

  var msg = new URLSearchParams(window.location.search).get('btv_msg');
  if (msg) {
    var note = document.querySelector('.pg-note[data-msg="' + msg + '"]');
    if (note) {
      note.hidden = false;
    }
  }

  var cards = Array.prototype.slice.call(document.querySelectorAll('#plans .pg-plan'));
  if (!cards.length) {
    return;
  }

  var plans = cards.map(function (card) {
    var btn = card.querySelector('.pg-btn');
    var price = card.querySelector('.pg-price');
    var yearly = card.querySelector('.pg-yearly');
    var link = yearly ? yearly.querySelector('a') : null;
    var amount = link ? (link.textContent.match(/\$[\d,]+(\.\d+)?/) || [''])[0] : '';
    return {
      btn: btn,
      price: price,
      yearly: yearly,
      monthHref: btn.getAttribute('href'),
      yearHref: link ? link.getAttribute('href') : btn.getAttribute('href'),
      monthPrice: price.innerHTML,
      yearPrice: amount ? amount + '<small> per year</small>' : price.innerHTML,
      monthNote: yearly ? yearly.innerHTML : '',
      hasYear: !!link
    };
  });

  var heads = Array.prototype.slice.call(document.querySelectorAll('.pg-compare tr.names .pp'));
  var tableBtns = Array.prototype.slice.call(document.querySelectorAll('.pg-compare tr.buyrow .pg-btn'));
  var monthHeads = heads.map(function (el) { return el.textContent; });
  var monthTableHrefs = tableBtns.map(function (el) { return el.getAttribute('href'); });
  var switches = Array.prototype.slice.call(document.querySelectorAll('.pg-bill'));

  function plain(html) {
    var tmp = document.createElement('span');
    tmp.innerHTML = html;
    return tmp.textContent;
  }

  function show(mode) {
    var annual = mode === 'a';
    plans.forEach(function (p, i) {
      if (!p.hasYear) {
        return;
      }
      p.btn.setAttribute('href', annual ? p.yearHref : p.monthHref);
      p.price.innerHTML = annual ? p.yearPrice : p.monthPrice;
      if (p.yearly) {
        p.yearly.innerHTML = annual ? 'Two months free' : p.monthNote;
      }
      if (heads[i]) {
        heads[i].textContent = annual ? plain(p.yearPrice) : monthHeads[i];
      }
      if (tableBtns[i]) {
        tableBtns[i].setAttribute('href', annual ? p.yearHref : monthTableHrefs[i]);
      }
    });
    switches.forEach(function (sw) {
      Array.prototype.forEach.call(sw.querySelectorAll('button'), function (b) {
        b.setAttribute('aria-pressed', b.getAttribute('data-bill') === mode ? 'true' : 'false');
      });
    });
  }

  switches.forEach(function (sw) {
    sw.hidden = false;
    sw.addEventListener('click', function (event) {
      var b = event.target.closest ? event.target.closest('button[data-bill]') : null;
      if (b) {
        show(b.getAttribute('data-bill'));
      }
    });
  });
  show('m');
})();
