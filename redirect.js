(function () {
  var DEFAULT_URL = 'https://stpn120400.github.io/tech-va-portfolio';
  var url = typeof window.REDIRECT_URL === 'string' && window.REDIRECT_URL.length ? window.REDIRECT_URL : DEFAULT_URL;
  var delay = typeof window.REDIRECT_DELAY === 'number' ? window.REDIRECT_DELAY : 2000;

  document.addEventListener('DOMContentLoaded', function () {
    var cta = document.getElementById('cta-link');
    var urlText = document.getElementById('url-text');
    if (cta) { cta.setAttribute('href', url); }
    if (urlText) { urlText.textContent = url; }

    // Avoid redundant redirect if already at destination
    var alreadyAtDest = false;
    try {
      alreadyAtDest = location.href.indexOf(url) === 0;
    } catch (_) {}

    if (!alreadyAtDest) {
      setTimeout(function () {
        try {
          window.location.replace(url);
        } catch (e) {
          window.location.href = url;
        }
      }, delay);
    }
  });
})();
