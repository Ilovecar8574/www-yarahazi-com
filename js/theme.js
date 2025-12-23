document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const toggle = document.getElementById("theme-toggle");
  const icon = document.getElementById("theme-icon");

  if (!toggle || !icon) return;

  // 初期テーマ
  const savedTheme = localStorage.getItem("theme");
  html.dataset.theme = savedTheme ? savedTheme : "light";

  if (html.dataset.theme === "dark") {
    icon.classList.add("rotated");
  }

  // クリックで切り替え
  toggle.addEventListener("click", () => {
    const isDark = html.dataset.theme === "dark";
    const next = isDark ? "light" : "dark";

    html.dataset.theme = next;
    localStorage.setItem("theme", next);
    icon.classList.toggle("rotated");
  });
});
