// Sélectionne toutes les touches de la calculatrice
const touches = [...document.querySelectorAll('.bouton')];
// Crée une liste des keycodes des touches
const listeKeycode = touches.map(touche => touche.dataset.key);

// Sélectionne l'écran de la calculatrice
const ecran = document.querySelector('.ecran');

// Écoute les événements de clavier
document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur);
});

// Écoute les événements de clic
document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur);
});

// Fonction de calcul
const calculer = (valeur) => {
    if (listeKeycode.includes(valeur)) {
        switch (valeur) {
            case '8': // Touche 'suppr' : efface l'écran
                ecran.textContent = "";
                break;
            case '13': // Touche '=' : évalue l'expression et affiche le résultat
                try {
                    const calcul = eval(ecran.textContent);
                    if (calcul === Infinity) {
                        throw new Error("Division par zéro");
                    }
                    ecran.textContent = calcul;
                } catch (e) {
                    alert('Une erreur est survenue dans votre calcul : ' + e.message);
                }
                break;
            default: // Autres touches : ajoute la valeur à l'écran
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML;
        }
    }
};

// Gestion des erreurs globales
window.addEventListener('error', (e) => {
    alert('Une erreur est survenue dans votre calcul : ' + e.message);
});
