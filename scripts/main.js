document.getElementById("mobile-nav").addEventListener("change", function () {
  const target = this.value;
  if (target) {
    window.location.hash = target;
    this.selectedIndex = 0;
  }
});
