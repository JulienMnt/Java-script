"use strict";

let btn = document.querySelector("#bt")

function recuperervaleur(e){
    e.preventDefault();
    let emailvaleur = document.getElementById("email").value;
    let mdpvaleur = document.getElementById("password").value;
    let nomvaleur = document.getElementById("nom").value;
    let prenomvaleur = document.getElementById("prenom").value;
    let hfvaleur = hommefemme();
    let comvaleur = document.getElementById("commentaire").value;


    console.log(emailvaleur,mdpvaleur,prenomvaleur,nomvaleur,hfvaleur);
    console.log(comvaleur);
}

document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
});

function hommefemme(){
    let f = document.getElementById("f");
    let h = document.getElementById("h");
    if(f.checked){
        return "Femme";
    }
    else if(h.checked){
        return "Homme";
    }
}

let mdp = document.getElementById("password");
function validermdp(){
    let mdpvaleur = mdp.value;
    let mdperreur = document.getElementById("mdperreur");
    let passwordregex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,?~\\/-]).{8,}$/;
    if (passwordregex.test(mdpvaleur) && mdpvaleur.length >=8){
        mdperreur.textContent = "";
    } 
    else{
        mdperreur.textContent = "Le mot de passe doit contenir au moins une majuscule une minuscule et un caractère spécial et faire au moins 8 caractères";
    }
}
mdp.addEventListener("input",validermdp);

document.addEventListener("DOMContentLoaded", function () {
    const burgerIcon = document.getElementById("burger-icon");
    const menuItems = document.getElementById("menu-items");

    burgerIcon.addEventListener("click", function () {
        menuItems.classList.toggle("show");
    });
});
let y = 0;

let bouton = document.querySelector("button");

function darkmode(){
    let body = document.querySelector("body");
    let bod = document.getElementById("#bod")
    if(y==0){
        body.style.background = "black";
        body.style.color = "white";
        
        y = 1;
    }
    else{
        body.style.background = "white";
        body.style.color = "black";
        
        y = 0;
    }
}
bouton.addEventListener('click',darkmode);

btn.addEventListener("click",recuperervaleur);