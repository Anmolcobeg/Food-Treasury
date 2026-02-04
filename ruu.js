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
fetch("https://script.google.com/macros/s/AKfycbxRORI11zKX6sdzm3xWqVGjLxFhmlbYhccw7H6SoPSuOYURBBFtphTDuiKu2PrUCBs/exec", {
  method: "POST",
  body: JSON.stringify({
    name: "Test User",
    feedback: "Testing feedback"
  }),
  headers: { "Content-Type": "application/json" }
})
.then(r => r.text())
.then(console.log)





