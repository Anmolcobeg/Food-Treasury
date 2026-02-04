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
fetch("https://script.google.com/macros/s/AKfycbw0cUClz2_IMBTW0p7c4VT7Bs5mbvZkBEz20xV7tkbiJi86JAUCDddD5LOXvbP1XkZHzA/exec", {
  method: "POST",
  body: JSON.stringify({
    name: "Test User",
    feedback: "Testing feedback"
  }),
  headers: { "Content-Type": "application/json" }
})
.then(r => r.text())
.then(console.log)




