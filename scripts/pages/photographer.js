//Mettre le code JavaScript lié à la page photographer.html
async function getPhotographer() {

    //fonction qui récupére les paramètres d’URL et qui crée une variable urlParams
    const urlParams = new URLSearchParams(window.location.search)
    
    //fonction qui récupére l'id dans l’URL et qui crée une variable id
    const id = urlParams.get("id")

    // Récupération des data depuis le fichier JSON photographers.json
    const reponse = await fetch("./data/photographers.json");
    const data = await reponse.json();

    //Trouve l'index du photographe grace a findIndex
    const indexPhotographer = data.photographers.findIndex(photographer => JSON.stringify(photographer.id) === id);

    //photographerTemplate(data.photographers[indexPhotographer])
    //const photographerModel = photographerTemplate(data.photographers[indexPhotographer]);


    console.log(indexPhotographer)

    
    //Recuperation du photographe
    //Declaration du tableau pour les photographes
    let photographer = []

    //Ajout les photographes au tableau
    photographer.push(data.photographers[indexPhotographer])

    // et bien retourner le tableau photographer seulement une fois récupéré
    return ({
        photographer: [...photographer]})

    //console.log(photographer)

    //Mise en page
}
//getPhotographer();

async function displayPhotograher(photographer) {
    //const photographerHeader = document.querySelector(".photograph-header"); 
    const main = document.querySelector("main"); 

        const photographerModel = photographerTemplate(photographer[0]);
        const photographerCardDom = photographerModel.getPhotographerCardDom();
        //photographerHeader.appendChild(photographerCardDom);
        main.appendChild(photographerCardDom);
}


async function initPhotographer() {
    // Récupère les datas des photographes
    const { photographer } = await getPhotographer();
    displayPhotograher(photographer);
}

initPhotographer();