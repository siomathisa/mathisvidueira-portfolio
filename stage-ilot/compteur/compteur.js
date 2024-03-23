let nb = document.querySelector("#nb");
nb=0;
let btn = document.querySelector("#btn");
let btn2 = document.querySelector("#btn2");
btn.addEventListener("click", function(){
    console.log("a");
    nb++;
    document.getElementById("nb").textContent= nb;
})
btn2.addEventListener("click", function(){
    console.log("b");
    nb = 0;
    document.getElementById("nb").textContent= nb;
})