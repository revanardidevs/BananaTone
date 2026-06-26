(function () {
  "use strict";

  var GA_ID = "G-3DX9NB3JME";
  var CONSENT_KEY = "bt_analytics_consent";

  /* ── Load GA4 ────────────────────────────────── */
  function loadGA() {
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", GA_ID);
  }

  /* ── Check existing consent ──────────────────── */
  var consent = null;
  try { consent = localStorage.getItem(CONSENT_KEY); } catch (e) {}

  if (consent === "granted") { loadGA(); return; }
  if (consent === "denied") { return; }

  /* ── Show consent banner ─────────────────────── */
  function showBanner() {
    var style = document.createElement("style");
    style.textContent =
      ".bt-consent{position:fixed;bottom:18px;left:50%;transform:translateX(-50%);z-index:9999;" +
      "width:min(520px,calc(100vw - 28px));padding:16px 20px;border-radius:20px;" +
      "border:2px solid rgba(253,248,226,.18);background:rgba(91,89,125,.92);" +
      "backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);" +
      "box-shadow:0 20px 60px rgba(0,0,0,.28);color:#fdf8e2;" +
      'font-family:"Nunito",system-ui,sans-serif;display:flex;align-items:center;gap:14px;' +
      "animation:btConsentIn .32s cubic-bezier(.2,.8,.2,1) both}" +
      "[data-theme=light] .bt-consent{background:rgba(255,248,234,.94);" +
      "border-color:rgba(80,78,118,.12);color:#3E334F;box-shadow:0 20px 60px rgba(80,78,118,.18)}" +
      "@keyframes btConsentIn{from{opacity:0;transform:translateX(-50%) translateY(16px)}" +
      "to{opacity:1;transform:translateX(-50%) translateY(0)}}" +
      ".bt-consent-text{flex:1;font-size:13px;font-weight:700;line-height:1.4}" +
      ".bt-consent-actions{display:flex;gap:8px;flex-shrink:0}" +
      ".bt-consent-btn{min-height:36px;padding:0 16px;border-radius:999px;border:none;" +
      "font-family:inherit;font-size:13px;font-weight:900;cursor:pointer;" +
      "transition:transform .12s ease,opacity .12s ease}" +
      ".bt-consent-btn:hover{transform:translateY(-1px)}" +
      ".bt-consent-accept{background:#fcdd9d;color:#504e76;box-shadow:0 3px 0 rgba(80,78,118,.22)}" +
      "[data-theme=light] .bt-consent-accept{background:#504e76;color:#fdf8e2}" +
      ".bt-consent-decline{background:rgba(255,255,255,.08);color:inherit;opacity:.7}" +
      "[data-theme=light] .bt-consent-decline{background:rgba(80,78,118,.06)}" +
      ".bt-consent-decline:hover{opacity:1}" +
      "@media(max-width:480px){.bt-consent{flex-direction:column;text-align:center;" +
      "bottom:10px;padding:14px 16px}.bt-consent-actions{width:100%;justify-content:center}}";
    document.head.appendChild(style);

    var banner = document.createElement("div");
    banner.className = "bt-consent";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-label", "Cookie consent");
    banner.innerHTML =
      '<div class="bt-consent-text">' +
        "We use cookies for analytics to improve BananaTone. No personal data is shared." +
      "</div>" +
      '<div class="bt-consent-actions">' +
        '<button class="bt-consent-btn bt-consent-accept" id="btAcceptCookies">Accept</button>' +
        '<button class="bt-consent-btn bt-consent-decline" id="btDeclineCookies">Decline</button>' +
      "</div>";
    document.body.appendChild(banner);

    function dismiss() {
      banner.style.opacity = "0";
      banner.style.transform = "translateX(-50%) translateY(16px)";
      setTimeout(function () { banner.remove(); }, 300);
    }

    document.getElementById("btAcceptCookies").addEventListener("click", function () {
      try { localStorage.setItem(CONSENT_KEY, "granted"); } catch (e) {}
      dismiss();
      loadGA();
    });

    document.getElementById("btDeclineCookies").addEventListener("click", function () {
      try { localStorage.setItem(CONSENT_KEY, "denied"); } catch (e) {}
      dismiss();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", showBanner);
  } else {
    showBanner();
  }
})();
