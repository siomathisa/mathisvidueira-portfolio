// Animation des cartes de projets
const accordions = document.querySelectorAll('.project-accordion');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

accordions.forEach(accordion => {
  observer.observe(accordion);
});

// Fonction pour basculer l'affichage des projets
function toggleProject(header) {
  const accordion = header.parentElement;
  const isActive = accordion.classList.contains('active');
  
  // Fermer tous les autres accordéons
  accordions.forEach(acc => {
    acc.classList.remove('active');
  });
  
  // Ouvrir/fermer l'accordéon cliqué
  if (!isActive) {
    accordion.classList.add('active');
  }
}

// Animation du bouton retour en haut
const scrollTopBtn = document.querySelector('.scroll-top');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollTopBtn.style.opacity = '1';
    scrollTopBtn.style.visibility = 'visible';
  } else {
    scrollTopBtn.style.opacity = '0';
    scrollTopBtn.style.visibility = 'hidden';
  }
});

// Initialisation
scrollTopBtn.style.opacity = '0';
scrollTopBtn.style.visibility = 'hidden';
