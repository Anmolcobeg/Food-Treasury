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
fetch("https://script.google.com/macros/s/AKfycbyPLBb2B1b0_293wYrdoronYZ1jTrCbzcJZUsTdEcVwkMyklx5dm_11Y0YNeKZ0xeZfaQ/exec", {
  method: "POST",
  body: JSON.stringify({
    name: name,
    feedback: feedback
  }),
  headers: {
    "Content-Type": "application/json"
  }
})
.then(() => alert("Feedback submitted!"))
.catch(() => alert("Error"));



