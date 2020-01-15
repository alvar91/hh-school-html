let active = document.querySelector(".js-slide.slider-section__slide_active");

document.querySelector(".js-slide-buttons").addEventListener("click", e => {
  const slideId = e.target.dataset.slideId;

  if (!slideId) {
    return;
  }

  if (active.dataset.slideId == slideId) {
    return;
  }

  const slide = document.querySelector(`.js-slide[data-slide-id="${slideId}"]`);

  slide.classList.add("slider-section__slide_show");
  active.classList.add("slider-section__slide_hide");
  active.classList.remove("slider-section__slide_active");

  const previous = active;
  active = slide;

  document
    .querySelector(
      `.js-slide-button[data-slide-id="${previous.dataset.slideId}"]`
    )
    .classList.remove("pagination__dot_active");

  document
    .querySelector(`.js-slide-button[data-slide-id="${slideId}"]`)
    .classList.add("pagination__dot_active");

  active.addEventListener(
    "animationend",
    () => {
      active.classList.add("slider-section__slide_active");
      active.classList.remove("slider-section__slide_show");
      previous.classList.remove("slider-section__slide_hide");
      active.parentNode.insertBefore(active, previous);
    },
    {
      once: true
    }
  );
});