document.getElementById("mobile-nav").addEventListener("change", function () {
  const target = this.value;
  if (target) {
    window.location.hash = target;
    this.selectedIndex = 0;
  }
});

// Startup function allows for a few JS controlled elements to be rendered initially
start_up();
function start_up() {
  render_copyright();
}

// Displays copyright with current year
function render_copyright() {
  const copyright = `© ${new Date().getFullYear()} blanchard789.dev`;
  document.getElementById("copyright").textContent = copyright;
}
