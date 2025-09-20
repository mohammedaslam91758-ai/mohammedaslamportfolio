// Dark mode toggle
document.getElementById("toggleBtn").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");

  // Change button text
  if (document.body.classList.contains("dark-mode")) {
    this.textContent = "☀️ Light Mode";
  } else {
    this.textContent = "🌙 Dark Mode";
  }
});