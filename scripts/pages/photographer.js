//import lightbox2 from "../utils/Lightbox2";
//Mettre le code JavaScript lié à la page photographer.html
//Recuperation des data 
async function getData() {
    // Récupération des data depuis le fichier JSON photographers.json
    const reponse = await fetch("./data/photographers.json");
    const data = await reponse.json();

    return {data}
}

async function getPhotographer() {

    //fonction qui récupére les paramètres d’URL et qui crée une variable urlParams
    const urlParams = new URLSearchParams(window.location.search)
    
    //fonction qui récupére l'id dans l’URL et qui crée une variable id
    const id = urlParams.get("id")
    // Récupération des data depuis le fichier JSON photographers.json
    const { data } = await getData();
    //Trouve l'index du photographe grace a findIndex
    const indexPhotographer = data.photographers.findIndex(photographer => JSON.stringify(photographer.id) === id);

    //Declaration du tableau pour les photographes
    let photographer = []

    //Ajout les photographes au tableau
    photographer.push(data.photographers[indexPhotographer])

    // et bien retourner le tableau photographer seulement une fois récupéré
    return ({
        photographer: [...photographer]})
}

async function displayPhotograher(photographer) {
    //Factory photographer
    const main = document.querySelector("main"); 
        const photographerModel = new photographerTemplate(photographer[0])
        const photographerCardDom = photographerModel.getPhotographerCardDom();
        main.appendChild(photographerCardDom);

}

async function getMedia(photographer) {

    // Récupération des data depuis le fichier JSON photographers.json
    const { data } = await getData();

    //Id du photographe
    const photographerId = photographer[0].id

    //Name du photographe
    const photographerName = photographer[0].name

    //Media du photographe
    const allMediaPhotographer = data.media.filter(media => media.photographerId === photographerId);

    //Ordre de popularité
    allMediaPhotographer.sort(function (a, b) {
        return b.likes - a.likes;
     });

    return { allMediaPhotographer, photographerName } 
    
}

function displayMediaPlus(allMediaPhotographer, objectPhotographer) {
    const mediaEncart  = new mediaTemplate(allMediaPhotographer[0],objectPhotographer.name)
    //Encart
    mediaEncart.encartCard(objectPhotographer.price);
    //Menu de selection 
    mediaEncart.menuSelection();
}

function displayMedia(allMediaPhotographer, objectPhotographer) {
    const mediaEncart  = new mediaTemplate(allMediaPhotographer[0],objectPhotographer.name)
    //Media section
    mediaEncart.mediaSection();
    const mediaSection = document.querySelector("#media-section")

    allMediaPhotographer.forEach((media) => {
        const mediaModel = new mediaTemplate(media, objectPhotographer.name); 

        const photographerCardDom = mediaModel.getPhotographerMediaDom();
        mediaSection.appendChild(photographerCardDom);
    });

    //Menu deroulant
    //new menuDeroulant().content(allMediaPhotographer, objectPhotographer)

    return { mediaEncart }

}

async function initPhotographer() {
    // Récupère les datas des photographes
    const { photographer } = await getPhotographer();
    displayPhotograher(photographer);
    //console.log(photographer[0].price)
    //Media
    const {allMediaPhotographer} = await getMedia(photographer);
    //const { mediaEncart } = displayMedia(allMediaPhotographer, photographer[0])
    //Encart
    //mediaEncart.encartCard(photographer[0].price);
    //Menu de selection 
    //mediaEncart.menuSelection();
    displayMediaPlus(allMediaPhotographer, photographer[0])
    displayMedia(allMediaPhotographer, photographer[0])

    //Likes
    new btnLikes().allBtnLiked()

    //Menu deroulant
    new menuDeroulant().content(allMediaPhotographer, photographer[0])

    //Lightbox
    new lightbox().lightBoxModal()
    new lightbox().lightBoxCloseModal()

     
    

}
initPhotographer()

