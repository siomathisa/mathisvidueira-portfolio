// Génère un nombre aléatoire entre 1 et 100.
let randomNumber = generateRandomNumber();
// Initialise le compteur d'essais à 0.
let attempts = 0;
// Initialise le meilleur score à null.
let bestScore = null;

// Crée un nouvel objet Audio pour le son de victoire.
const victorySound = new Audio('win.mp3');

// Sélectionne les éléments HTML et les stocke dans un objet.
const elements = {
    guessInput: document.getElementById('guess-input'),
    guessButton: document.getElementById('guess-btn'),
    resultMessage: document.getElementById('result-msg'),
    bestScoreDisplay: document.getElementById('best-score'),
    modal: document.getElementById('modal'),
    modalMessage: document.getElementById('modal-msg'),
    modalRestartButton: document.getElementById('modal-restart-btn'),
    closeModal: document.querySelector('.close'),
    restartButton: document.getElementById('restart-btn')
};

// Ajoute des écouteurs d'événements aux boutons et éléments pertinents.
elements.guessButton.addEventListener('click', handleGuess);
elements.modalRestartButton.addEventListener('click', resetGame);
elements.closeModal.addEventListener('click', () => { elements.modal.style.display = 'none'; });
window.addEventListener('click', (event) => { if (event.target === elements.modal) { elements.modal.style.display = 'none'; } });
elements.restartButton.addEventListener('click', resetGame);

// Fonction pour générer un nombre aléatoire entre 1 et 100.
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// Fonction pour gérer l'événement de devinette.
function handleGuess() {
    const guess = parseInt(elements.guessInput.value);

    // Vérifie si l'entrée est un nombre valide entre 1 et 100.
    if (isNaN(guess) || guess < 1 || guess > 100) {
        showMessage('⚠️ Veuillez entrer un nombre valide entre 1 et 100. ⚠️', 'warning');
        return;
    }

    // Incrémente le compteur d'essais.
    attempts++;

    // Vérifie si la devinette est correcte.
    if (guess === randomNumber) {
        elements.resultMessage.textContent = '';
        elements.modalMessage.textContent = `Félicitations ! Vous avez deviné le nombre en ${attempts} tentatives.`;
        elements.guessInput.disabled = true;
        elements.guessButton.disabled = true;
        victorySound.play();
        updateBestScore();
        elements.modal.style.display = 'block';
        elements.restartButton.style.display = 'block';
    } else {
        // Affiche un message d'indice selon que le nombre deviné est plus petit ou plus grand que le nombre aléatoire.
        showMessage(guess < randomNumber ? '🔎 Le nombre est plus grand. Essayez encore. 🔎' : '🔎 Le nombre est plus petit. Essayez encore. 🔎', 'hint');
    }
}

// Affiche un message avec la classe CSS spécifiée.
function showMessage(message, className) {
    elements.resultMessage.textContent = message;
    elements.resultMessage.className = className;
}

// Met à jour le meilleur score si l'actuel est inférieur au précédent.
function updateBestScore() {
    if (bestScore === null || attempts < bestScore) {
        bestScore = attempts;
        elements.bestScoreDisplay.textContent = `Meilleur score : ${bestScore}`;
    }
}

// Réinitialise le jeu en réinitialisant les valeurs et en générant un nouveau nombre aléatoire.
function resetGame() {
    randomNumber = generateRandomNumber();
    attempts = 0;
    elements.guessInput.disabled = false;
    elements.guessButton.disabled = false;
    elements.guessInput.value = '';
    elements.resultMessage.textContent = '';
    elements.modal.style.display = 'none';
    elements.restartButton.style.display = 'none';
}
