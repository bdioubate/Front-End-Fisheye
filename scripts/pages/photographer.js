//Importation des class
import photographerTemplate from "../templates/photographer.js"
import mediaTemplate from "../templates/media.js"
import btnLikes from "../utils/likes.js"
import menuDeroulant from "../utils/sort.js"
import lightbox from "../utils/Lightbox.js"
import contact from "../utils/contactForm.js"
import keyboard from "../utils/keyboard.js"

//Recuperation des data dans le fichier JSON des photographes
async function getData() {
    // Récupération des data depuis le fichier JSON photographers.json
    const reponse = await fetch("./data/photographers.json")
    const data = await reponse.json()

    return {data}
}

//Fonction pour obtenir les informations des photographes avec l'aide de la fonction getData()
async function getPhotographer() {

    //fonction qui récupére les paramètres d’URL et qui crée une variable urlParams
    const urlParams = new URLSearchParams(window.location.search)
    
    //fonction qui récupére l'id dans l’URL et qui crée une variable id
    const id = urlParams.get("id")
    // Récupération des data depuis le fichier JSON photographers.json
    const { data } = await getData()
    //Trouve l'index du photographe grace a findIndex
    const indexPhotographer = data.photographers.findIndex(photographer => JSON.stringify(photographer.id) === id)

    //Declaration du tableau pour les photographes
    let photographer = []

    //Ajout les photographes au tableau
    photographer.push(data.photographers[indexPhotographer])

    // et bien retourner le tableau photographer seulement une fois récupéré
    return ({
        photographer: [...photographer]})
}

//Fonction pour l'affichage des informations pour un photographe dans le page photographer.html
async function displayPhotograher(photographer) {
    //Factory photographer
    const main = document.querySelector("main")
    const photographerModel = new photographerTemplate(photographer[0])
    const photographerCardDom = photographerModel.getPhotographerCardDom()
    main.appendChild(photographerCardDom)

}

//Fonction pour obtenir les medias pour un photographes avec l'aide de la fonction getData()
async function getMedia(photographer) {

    // Récupération des data depuis le fichier JSON photographers.json
    const { data } = await getData()

    //Id du photographe
    const photographerId = photographer[0].id

    //Name du photographe
    const photographerName = photographer[0].name

    //Media du photographe
    const allMediaPhotographer = data.media.filter(media => media.photographerId === photographerId)

    //Ordre de popularité
    allMediaPhotographer.sort(function (a, b) {
        return b.likes - a.likes
    })

    return { allMediaPhotographer, photographerName } 
    
}

//Fonction pour l'affichage du menu de selection
function displayMenuSelection(allMediaPhotographer, objectPhotographer) {
    const mediaEncart  = new mediaTemplate(allMediaPhotographer[0],objectPhotographer.name)
    //Menu de selection 
    mediaEncart.menuSelection()
}

//Fonction pour l'affichage des medias pour un photographe dans le page photographer.html
export default function displayMedia(allMediaPhotographer, objectPhotographer) {
    const mediaEncart  = new mediaTemplate(allMediaPhotographer[0],objectPhotographer.name)

    //Media section
    mediaEncart.mediaSection()
    const mediaSection = document.querySelector("#media-section")

    //Encart
    let nbLikes = 0
    for(let i=0;i<allMediaPhotographer.length;i++) {
        nbLikes += allMediaPhotographer[i].likes
    }
    mediaEncart.encartCard(nbLikes, objectPhotographer.price)
    

    allMediaPhotographer.forEach((media) => {
        const mediaModel = new mediaTemplate(media, objectPhotographer.name)


        const photographerCardDom = mediaModel.getPhotographerMediaDom()
        mediaSection.appendChild(photographerCardDom)
    })

    return { mediaEncart }

}

//Fonction pour le deroulement de tous les fonctions pour la page photographer.html
async function initPhotographer() {
    // Récupère les datas des photographes
    const { photographer } = await getPhotographer()
    displayPhotograher(photographer)
    //Media
    const {allMediaPhotographer} = await getMedia(photographer)
    displayMenuSelection(allMediaPhotographer, photographer[0])
    displayMedia(allMediaPhotographer, photographer[0])

    //Likes
    new btnLikes().allBtnLiked()

    //Menu deroulant
    new menuDeroulant().content(allMediaPhotographer, photographer[0])

    //Lightbox 
    new lightbox().lightBoxModal()
    new lightbox().lightBoxCloseModal()

    //Contact
    //Montrer la modal contact au click sur ce bouton
    new contact().showModalContact()

    // Gestion de l'événement submit sur le formulaire. 
    new contact().validationForm()

    //
    new keyboard().keyboardNav() 
    
}

//Declaration de la fonction initPhotographer()
initPhotographer()

