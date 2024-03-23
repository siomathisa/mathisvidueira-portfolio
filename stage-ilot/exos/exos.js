//exo 1
let checkboxes = document.querySelectorAll('.fruits');
let all = document.querySelector('#btn-all');
let reset = document.querySelector('#btn-reset');

all.addEventListener("click", function() {
    
    for (input of checkboxes) {
        input.checked = true;
    }
})

reset.addEventListener("click", function() {
    
    for (input of checkboxes) {
        input.checked = false;
    }
})

//exo 2
let salut = document.querySelector('#btn-salut');

salut.addEventListener("mouseover", function(){
    salut.style.backgroundColor = 'white';
})
salut.addEventListener("mouseout", function(){
    salut.style.backgroundColor = '#ffbb98';
})

//exo 3
let prenomInput = document.querySelector('#prenom');
let nomInput = document.querySelector('#nom');
let messagenom = document.querySelector('#message-nom')

prenomInput.addEventListener("input", function(){
    messagenom.innerHTML = "Bonjour " + prenomInput.value + " " + nomInput.value
})
nomInput.addEventListener("input", function(){
    messagenom.innerHTML = "Bonjour " + prenomInput.value + " " + nomInput.value
})

//exo 4
let euroInput = document.querySelector("#euro");
let dollar = document.querySelector("#dollar")
euroInput.addEventListener("input", function(){
    dollar.innerHTML = euroInput.value * 1.08 + "$"
})

//exo 5
let mailInput = document.querySelector("#mail");
let messagemail = document.querySelector("#message-mail")
mailInput.addEventListener("input", function(){
    console.log('mail')
    if (!mailInput.value.match(/[a-z0-9_\-\.]+@[a-z0-9_\-\.]+\.[a-z]+/i)) {
        messagemail.innerHTML = "Ce n'est pas une adresse valide";
    }else{
        messagemail.innerHTML = "C'est une adresse valide";
    }
})

//exo 6
let btn_popup = document.querySelector("#popup")
let btn_popupclose = document.querySelector("#popup-close")
let fenetre_popup = document.querySelector("#exo-popup")
let msg_popup = document.querySelector("#msg-popup")
fenetre_popup.style.display = "none";
msg_popup.style.display = "none";

btn_popup.addEventListener("click", function(){
    if (fenetre_popup.style.display === "none") {
        fenetre_popup.style.display = "block";
    } else {
        fenetre_popup.style.display = "none";
    }
    if (msg_popup.style.display === "none") {
        msg_popup.style.display = "block";
    } else {
        msg_popup.style.display = "none";
    }
});
btn_popupclose.addEventListener("click", function(){
    if (fenetre_popup.style.display === "none") {
        fenetre_popup.style.display = "block";
    } else {
        fenetre_popup.style.display = "none";
    }
    if (msg_popup.style.display === "none") {
        msg_popup.style.display = "block";
    } else {
        msg_popup.style.display = "none";
    }
});
