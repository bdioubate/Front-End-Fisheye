//Importation de la class photographerTemplate
import photographerTemplate from "../templates/photographer.js"
import keyboard from "../utils/keyboard.js"

//Fonction pour recuperer les data dans le fichier JSON des photographes
async function getPhotographers() {
    // Récupération des data depuis le fichier JSON photographers.json
    const reponse = await fetch("./data/photographers.json")
    const data = await reponse.json()
    
    //Declaration du tableau pour les photographes
    let photographers = []

    //Ajout les photographes au tableau
    for (let i = 0; i < data.photographers.length; i++) {
        photographers.push(data.photographers[i])
    }

    // et bien retourner le tableau photographers seulement une fois récupéré
    return ({
        photographers: [...photographers]})
}

//Fonction pour l'affichage de tous les photographes dans le page index.html
async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section")

    photographers.forEach((photographer) => {
        const photographerModel = new photographerTemplate(photographer)
        const userCardDOM = photographerModel.getUserCardDOM()
        photographersSection.appendChild(userCardDOM)
    })
}

//Fonction pour le deroulement de tous les fonctions pour la page index.html
async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers()
    displayData(photographers)

    //
    new keyboard().keyboardNav() 
}

//Declaration de la fonction init()
init()
    
