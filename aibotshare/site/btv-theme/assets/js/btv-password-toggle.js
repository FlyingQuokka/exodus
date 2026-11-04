/* Botterverse: the show and hide password button on the billing account pages.
   wp-login.php has its own. These pages are built by the checkout guard plugin and have none. */
(function () {
  var eye = '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M1.5 12S5.5 5 12 5s10.5 7 10.5 7-4 7-10.5 7S1.5 12 1.5 12z"/><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="2"/></svg>';
  var eyeOff = '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M3 3l18 18M10.6 5.1A10.7 10.7 0 0 1 12 5c6.5 0 10.5 7 10.5 7a17 17 0 0 1-3.2 4M6.5 6.6A17 17 0 0 0 1.5 12S5.5 19 12 19a10.6 10.6 0 0 0 4.2-.9M9.9 9.9a3 3 0 0 0 4.2 4.2"/></svg>';
  document.querySelectorAll('input.btv-billing__input[type="password"]').forEach(function (input) {
    var wrap = document.createElement('span');
    wrap.className = 'btv-billing__pw';
    input.parentNode.insertBefore(wrap, input);
    wrap.appendChild(input);
    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'btv-billing__pw-toggle';
    button.setAttribute('aria-label', 'Show password');
    button.innerHTML = eye;
    button.addEventListener('click', function () {
      var show = input.type === 'password';
      input.type = show ? 'text' : 'password';
      button.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
      button.innerHTML = show ? eyeOff : eye;
    });
    wrap.appendChild(button);
    /* Centre the button on the field itself. The wrapper can be taller than the field
       (margin or line gap below it), so a percentage of the wrapper sits too high. */
    var place = function () {
      if (!input.offsetHeight) { return; }
      button.style.transform = 'none';
      button.style.top = (input.offsetTop + (input.offsetHeight - button.offsetHeight) / 2) + 'px';
    };
    place();
    window.addEventListener('load', place);
    window.addEventListener('resize', place);
    if (window.ResizeObserver) { new ResizeObserver(place).observe(input); }
  });
})();
