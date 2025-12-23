const html = document.documentElement;
const toggle = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");

const saved = localStorage.getItem("theme");
html.dataset.theme = saved || "light";

if (html.dataset.theme === "dark") {
  icon.classList.add("rotated");
}

toggle.addEventListener("click", () => {
  const next = html.dataset.theme === "dark" ? "light" : "dark";
  html.dataset.theme = next;
  localStorage.setItem("theme", next);
  icon.classList.toggle("rotated");
});
