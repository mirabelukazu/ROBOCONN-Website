/* Customized cursor */
const cursorDot = document.querySelector(".cursor-dot");
const cursorCircle = document.querySelector(".cursor-circle");

document.addEventListener("mousemove", (e) => {
  cursorDot.style.top = `${e.clientY}px`;
  cursorDot.style.left = `${e.clientX}px`;
  cursorCircle.style.top = `${e.clientY}px`;
  cursorCircle.style.left = `${e.clientX}px`;
});

document.querySelectorAll("a, .theme-btn, .robo-main-btn").forEach((el) => {
  el.addEventListener("mouseover", () => {
    cursorDot.classList.add("large");
    cursorCircle.style.display = "none";
  });
  el.addEventListener("mouseout", () => {
    cursorDot.classList.remove("large");
    cursorCircle.style.display = "block";
  });
});

/* Header shrink on scroll */
window.addEventListener("scroll", () => {
  document.querySelector(".robo-header").classList.toggle("shrink", window.scrollY > 0);
});

/* Theme toggle (persists across pages) */
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
  themeBtn.classList.toggle("active-sun-icon");
  document.body.classList.toggle("light-theme");

  const icon = themeBtn.classList.contains("active-sun-icon") ? "sun" : "moon";
  const theme = document.body.classList.contains("light-theme") ? "light" : "dark";
  localStorage.setItem("robo-saved-icon", icon);
  localStorage.setItem("robo-saved-theme", theme);
});

document.addEventListener("DOMContentLoaded", () => {
  const savedIcon = localStorage.getItem("robo-saved-icon");
  const savedTheme = localStorage.getItem("robo-saved-theme");
  themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("active-sun-icon");
  document.body.classList[savedTheme === "light" ? "add" : "remove"]("light-theme");

  const copyrightYear = document.getElementById("copyright-year");
  if (copyrightYear) copyrightYear.textContent = new Date().getFullYear();
});
