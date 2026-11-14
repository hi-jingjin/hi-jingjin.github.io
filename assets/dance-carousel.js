(function () {
  document.querySelectorAll("[data-carousel]").forEach(function (carousel) {
    var track = carousel.querySelector("[data-carousel-track]");
    var slides = track ? track.children : [];
    var previous = carousel.querySelector("[data-carousel-prev]");
    var next = carousel.querySelector("[data-carousel-next]");
    var currentLabel = carousel.querySelector("[data-carousel-current]");
    var current = 0;
    var frame;

    if (!track || slides.length < 2) return;

    function update(index) {
      current = Math.max(0, Math.min(index, slides.length - 1));
      if (currentLabel) currentLabel.textContent = current + 1;
      if (previous) previous.disabled = current === 0;
      if (next) next.disabled = current === slides.length - 1;
    }

    function goTo(index) {
      track.scrollTo({ left: track.clientWidth * index, behavior: "smooth" });
      update(index);
    }

    if (previous) previous.addEventListener("click", function () { goTo(current - 1); });
    if (next) next.addEventListener("click", function () { goTo(current + 1); });
    track.addEventListener("scroll", function () {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(function () {
        update(Math.round(track.scrollLeft / track.clientWidth));
      });
    }, { passive: true });
    window.addEventListener("resize", function () { goTo(current); });
    update(0);
  });
})();
