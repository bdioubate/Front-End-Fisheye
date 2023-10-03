//Class pour l'organisation de la page photographer.html
export default class mediaTemplate{
    constructor(data, name) {
        this.data = data
        this.name = name 

    }

    //Recuperation des variables globales 
    getVariable() {
        const name = this.name

        const { image, video } = this.data
        
        //Chemin de l'image du media
        const picture = `assets/media/${name}/${image}`

        //Chemin de le video du media
        const videoMedia = `assets/media/${name}/${video}` 

        return { picture, videoMedia }
    }

    //Organisation et l'affichage pour un photographe pour la page index.html
    getPhotographerMediaDom() {
        
        const { title, image, video, likes } = this.data

        const { picture, videoMedia } = this.getVariable()

        //Creation de la balise article photographer
        const article = document.createElement( "article" )
        article.setAttribute("class",".thumb-img")

        //Balise figure
        const figure = document.createElement( "figure" )
        article.appendChild(figure)

        if(image){
            //Images 
            const img = document.createElement( "img" ) 
            img.setAttribute("src", picture)
            //Nom de l'image
            //const nomImage = image.split(".")[0].replaceAll("_"," ")
            img.setAttribute("alt",`${title}, vue rapprochée`)
            figure.appendChild(img)
        }

        if(video){
            //Video 
            const videoPhographer = document.createElement( "video" )
            videoPhographer.setAttribute("src", videoMedia)
            videoPhographer.setAttribute("type","video/mp4")
            videoPhographer.ariaLabel = `video ${title}`
            //Nom de le video
            //const nomVideo = video.split(".")[0].replaceAll("_"," ")
            videoPhographer.setAttribute("title", `${title}, vue rapprochée`)
            //videoPhographer.setAttribute("onclick",`new lightbox().lightBoxModal(this.src)`)
            figure.appendChild(videoPhographer)
        }

        //balise figcaption
        const figcaption = document.createElement( "figcaption" )
        figure.appendChild(figcaption)

        //Title img
        const titleImg = document.createElement("p")
        titleImg.textContent = title
        figcaption.appendChild(titleImg)

        //Div likes
        const likesSection = document.createElement("div")
        likesSection.setAttribute("id","likes-section")
        figcaption.appendChild(likesSection)

        //Count likes img
        const likesImg = document.createElement("p")
        likesImg.textContent = likes
        likesSection.appendChild(likesImg)

        //Count likes img
        const iconLikesImg = document.createElement("i")
        iconLikesImg.setAttribute("class","fa-regular fa-heart fa-xl btnLikes")
        iconLikesImg.setAttribute("data-liked",false)
        iconLikesImg.ariaLabel = "likes"
        likesSection.appendChild(iconLikesImg)

        return (article)
    }

    //Fonction pour l'affichage des medias 
    mediaSection() {
        const main = document.querySelector("main")
    
        //Creation de la div section media
        const mediaSection = document.createElement("div") 
        mediaSection.setAttribute("id","media-section")
        main.appendChild(mediaSection)
    }
    
    //Fonction pour l'affichage du menu de selection
    menuSelection() {
        //Factory media
        const main = document.querySelector("main")
    
        //Creation de la div menu de selection
        const menuSelection = document.createElement("div") 
        menuSelection.setAttribute("id","menu-selection")
        main.appendChild(menuSelection)
    
        //Creation du texte Trier par
        const trierPar = document.createElement("p") 
        trierPar.textContent = "Trier par"
        menuSelection.appendChild(trierPar)
    
        //Creation du menu deroulant
        const menuDeroulant = document.createElement("div") 
        menuDeroulant.setAttribute("id","menu-deroulant")
        menuDeroulant.ariaLabel = "Trier par"
        menuSelection.appendChild(menuDeroulant)
    
        //Creation du bouton popularité du menu de deroulant
        const buttonMenuDeroulantPopularite = document.createElement("button") 
        //buttonMenuDeroulantPopularite.textContent = "Popularité"
        buttonMenuDeroulantPopularite.setAttribute("class","btnMenu")
        buttonMenuDeroulantPopularite.setAttribute("data-value","Popularité")
        buttonMenuDeroulantPopularite.textContent = buttonMenuDeroulantPopularite.dataset.value

        menuDeroulant.appendChild(buttonMenuDeroulantPopularite) 

        //Icone arrow pour le premeier bouton du menu
        const firstButtonMenuDeroulant = document.querySelectorAll(".btnMenu")[0] 
        const iconeArrow = document.createElement("i")
        iconeArrow.setAttribute("class","fa-solid fa-angle-down")
        firstButtonMenuDeroulant.appendChild(iconeArrow)

        //Creation du bouton date du menu de deroulant
        const buttonMenuDeroulantDate = document.createElement("button") 
        //buttonMenuDeroulantDate.textContent = "Date"
        buttonMenuDeroulantDate.setAttribute("class","btnMenu")
        buttonMenuDeroulantDate.setAttribute("data-value","Date")
        buttonMenuDeroulantDate.textContent = buttonMenuDeroulantDate.dataset.value
        menuDeroulant.appendChild(buttonMenuDeroulantDate) 

        //Creation du bouton date du menu de deroulant
        const buttonMenuDeroulantTitre = document.createElement("button") 
        //buttonMenuDeroulantTitre.textContent = "Titre"
        buttonMenuDeroulantTitre.setAttribute("class","btnMenu")
        buttonMenuDeroulantTitre.setAttribute("data-value","Titre")
        buttonMenuDeroulantTitre.textContent = buttonMenuDeroulantTitre.dataset.value
        menuDeroulant.appendChild(buttonMenuDeroulantTitre) 
    }

    //Fonction pour l'affichage de l'encard
    encartCard(nbLikes, pricePhotographer) {
        const main = document.querySelector("main")
    
        //div encart
        const encart = document.createElement("div")
        encart.setAttribute("id","encart")
        main.appendChild(encart)
    
        //Div nombre de likes + icone likes
        const likesSection = document.createElement("div")
        likesSection.setAttribute("id","likes")
        encart.appendChild(likesSection)
    
        //Nombre de likes
        const countLikes = document.createElement("p")
        countLikes.textContent = nbLikes
        likesSection.appendChild(countLikes)

        //Icone likes
        const iconLikesImg = document.createElement("i")
        iconLikesImg.setAttribute("class","fa-solid fa-heart")
        likesSection.appendChild(iconLikesImg)

        //Prix du photographe
        const pPrice = document.createElement( "p" )
        pPrice.textContent = `${pricePhotographer}€/jour`
        encart.appendChild(pPrice)
    }
}
