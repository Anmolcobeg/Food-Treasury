// Safe DOM helpers: only attach listeners if elements exist
const menuBtn = document.getElementById("menuBtn");
if (menuBtn) {
  menuBtn.addEventListener("click", function() {
    window.location.href = "menu.html";
  });
}

const locBtn = document.getElementById("locBtn");
if (locBtn) {
  locBtn.addEventListener("click", function() {
    window.location.href = "location.html";
  });
}
// Handle feedback form submission and send to Google Apps Script
const FEEDBACK_ENDPOINT = "https://script.google.com/macros/s/AKfycbzxP40smHyfq_HFv0_Bs13R_VBIeyNpB_PwHl2bf4qI3BMadTlBrPBNUf4Pje6NBeKEVw/exec";

const form = document.getElementById("feedbackForm");
if (form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const body = new URLSearchParams();
    for (const pair of formData) {
      body.append(pair[0], pair[1]);
    }

    // Try to send via fetch first (clean), but fall back to a hidden-form+iframe submit
    fetch(FEEDBACK_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
      body: body.toString()
    })
    .then(response => {
      // If CORS allows it, redirect on success
      return response.text().then(text => ({ ok: response.ok, text }));
    })
    .then(({ ok, text }) => {
      if (ok) {
        window.location.href = "Thank.html";
      } else {
        console.warn("Fetch https://anmolcobeg.github.io/Food-Treasury/index.html", text);
        fallbackFormSubmit();
      }
    })
    .catch(error => {
      console.warn("Fetch failed (likely CORS). Falling back to form submit.", error);
      fallbackFormSubmit();
    });

    function fallbackFormSubmit() {
      // Some browsers block cross-origin fetch (CORS). As a reliable fallback
      // submit the actual form to the Apps Script endpoint so the browser
      // performs a normal POST (no CORS preflight). The Apps Script should
      // then return an HTML response that redirects back to your Thank page.
      try {
        form.action = FEEDBACK_ENDPOINT;
        form.method = "POST";
        // remove any target so navigation happens in top window
        form.removeAttribute('target');
        form.submit();
      } catch (err) {
        console.error('Fallback form submit failed:', err);
        // final fallback: still redirect to Thank to avoid leaving user stuck
        window.location.href = "Thank.html";
      }
    }
  });

}
return HtmlService.createHtmlOutput("<script>window.location.href='Thank.html';</script>");





