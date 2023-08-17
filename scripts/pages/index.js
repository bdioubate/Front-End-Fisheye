    async function getPhotographers() {
        // Récupération des data depuis le fichier JSON photographers.json
        const reponse = await fetch("./data/photographers.json");
        const data = await reponse.json();
        
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

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerTemplate(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    }

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    }
    
    init();
    
