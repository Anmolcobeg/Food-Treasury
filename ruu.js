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
      } 



