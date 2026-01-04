/* Keep your cursor animation consistent */
document.addEventListener("mousemove", (e) => {
  const cursorDot = document.querySelector(".cursor-dot");
  const cursorCircle = document.querySelector(".cursor-circle");
  const x = e.clientX;
  const y = e.clientY;

  cursorDot.style.top = `${y}px`;
  cursorDot.style.left = `${x}px`;
  cursorCircle.style.top = `${y}px`;
  cursorCircle.style.left = `${x}px`;
});

/* Hover effects for links and buttons */
const hoverables = document.querySelectorAll("a, .robo-main-btn");

hoverables.forEach(el => {
  el.addEventListener("mouseover", () => {
    document.querySelector(".cursor-dot").classList.add("large");
    document.querySelector(".cursor-circle").style.display = "none";
  });
  el.addEventListener("mouseout", () => {
    document.querySelector(".cursor-dot").classList.remove("large");
    document.querySelector(".cursor-circle").style.display = "block";
  });
});

/* Optional fade-in animation for section content */
window.addEventListener("DOMContentLoaded", () => {
  const visionText = document.querySelectorAll(".vision-text p");
  visionText.forEach((p, i) => {
    setTimeout(() => {
      p.style.opacity = "1";
      p.style.transform = "translateY(0)";
    }, i * 200);
  });

  /* Set copyright year dynamically */
  const copyrightYear = document.getElementById("copyright-year");
  if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
  }
});
