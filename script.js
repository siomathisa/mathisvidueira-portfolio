// ========================================
// PRELOADER
// ========================================
window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  setTimeout(() => {
    preloader.classList.add("hidden");
  }, 800);
});

// ========================================
// SCROLL PROGRESS BAR
// ========================================
const scrollProgress = document.getElementById("scroll-progress");

window.addEventListener("scroll", () => {
  const windowHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (window.scrollY / windowHeight) * 100;
  scrollProgress.style.width = scrolled + "%";
});

// ========================================
// KONAMI CODE EASTER EGG (Version simplifiée)
// ========================================
const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
];
let konamiIndex = 0;
let matrixActive = false;

document.addEventListener("keydown", (e) => {
  // Konami code detection
  if (e.key === konamiCode[konamiIndex]) {
    konamiIndex++;
    console.log(`Progress: ${konamiIndex}/${konamiCode.length}`);

    if (konamiIndex === konamiCode.length) {
      activateMatrixMode();
      konamiIndex = 0;
    }
  } else {
    konamiIndex = 0;
  }

  // ESC to exit matrix mode
  if (e.key === "Escape" && matrixActive) {
    deactivateMatrixMode();
  }
});

function activateMatrixMode() {
  matrixActive = true;
  document.body.classList.add("matrix-mode");
  const message = document.getElementById("matrix-message");
  message.classList.add("show");

  console.log("🎮 MATRIX MODE ACTIVATED! 🎮");

  setTimeout(() => {
    message.classList.remove("show");
  }, 3000);
}

function deactivateMatrixMode() {
  matrixActive = false;
  document.body.classList.remove("matrix-mode");
  document.getElementById("matrix-message").classList.remove("show");
}

// ========================================
// SCROLL TO TOP BUTTON
// ========================================
const scrollBtn = document.getElementById("scroll-to-top");
window.addEventListener("scroll", () => {
  scrollBtn.classList.toggle("visible", window.scrollY > 300);
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ========================================
// INTEREST CARDS ANIMATION
// ========================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll(".interest-card-full").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(card);
});

// ========================================
// THEME TOGGLE
// ========================================
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

// Forcer le thème dark par défaut
html.setAttribute("data-theme", "dark");
localStorage.setItem("theme", "dark");

// Charger le thème sauvegardé après le premier chargement
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  html.setAttribute("data-theme", savedTheme);
}

themeToggle.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme") || "dark";
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});
