// Cache l'animation de chargement
window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  // Délai pour transition smooth
  setTimeout(() => preloader.classList.add("hidden"), 800);
});

const scrollProgress = document.getElementById("scroll-progress");

window.addEventListener("scroll", () => {
  // Calcul pourcentage scroll
  const hauteurTotale = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const pourcentageScroll = (window.scrollY / hauteurTotale) * 100;
  scrollProgress.style.width = `${pourcentageScroll}%`;
});

// EASTER EGG
const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight"];
let konamiIndex = 0;
let matrixActive = false;

document.addEventListener("keydown", (e) => {
  // Vérification des touches
  if (e.key === konamiCode[konamiIndex]) {
    konamiIndex++;
    
    if (konamiIndex === konamiCode.length) {
      activateMatrixMode();
      konamiIndex = 0;
    }
  } else {
    konamiIndex = 0; // Reset si mauvaise touche
  }

  if (e.key === "Escape" && matrixActive) {
    deactivateMatrixMode();
  }
});

function activateMatrixMode() {
  matrixActive = true;
  document.body.classList.add("matrix-mode");
  
  const message = document.getElementById("matrix-message");
  message.classList.add("show");

  setTimeout(() => message.classList.remove("show"), 3000);
}

function deactivateMatrixMode() {
  matrixActive = false;
  document.body.classList.remove("matrix-mode");
  document.getElementById("matrix-message").classList.remove("show");
}

const scrollBtn = document.getElementById("scroll-to-top");

window.addEventListener("scroll", () => {
  // Affiche le bouton après 300px de scroll
  scrollBtn.classList.toggle("visible", window.scrollY > 300);
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const animerAuScroll = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }
);

// Applique l'animation sur toutes les cartes d'intérêts
document.querySelectorAll(".interest-card-full").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  animerAuScroll.observe(card);
});

const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

// Thème dark par défaut
html.setAttribute("data-theme", "dark");
localStorage.setItem("theme", "dark");

const themeSauvegarde = localStorage.getItem("theme");
if (themeSauvegarde) {
  html.setAttribute("data-theme", themeSauvegarde);
}

themeToggle.addEventListener("click", () => {
  const themeActuel = html.getAttribute("data-theme") || "dark";
  const nouveauTheme = themeActuel === "dark" ? "light" : "dark";

  html.setAttribute("data-theme", nouveauTheme);
  localStorage.setItem("theme", nouveauTheme);
});