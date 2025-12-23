let lastScroll = 0;
const header = document.getElementById("site-header");

window.addEventListener("scroll", () => {
  const current = window.scrollY;

  if (current > lastScroll && current > 80) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
    header.classList.add("shrink");
  }

  if (current < 10) {
    header.classList.remove("shrink");
  }

  lastScroll = current;
});
