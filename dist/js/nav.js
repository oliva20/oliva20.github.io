$(document).ready(function() {
  window.addEventListener("scroll", () => {
    const scrollable =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    // console.log("scrollable: " + scrollable);
    // console.log("scrolled: " + scrolled);

    if (scrolled > 100) {
      $(".nav-bar").css("opacity", "0.8");
      $("ul").css("opacity", "0.8");
    } else if (scrolled < 100) {
      $(".nav-bar").removeAttr("style");
    }
  });
});
