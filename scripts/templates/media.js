class mediaTemplate{
    constructor(data, name) {
        this.data = data;
        this.name = name

    }

    //const { id, photographerId, title, image, video, likes, date, price } ;

    /*getVariableData() {
        const { id, photographerId, title, image, video, likes, date, price } = this.data

        return {id, photographerId, title, image, video, likes, date, price }
    }*/

    getVariable() {
        const name = this.name

        const { id, photographerId, title, image, video, likes, date, price } = this.data
        
        //Chemin de l'image du media
        const picture = `assets/media/${name}/${image}`;

        //Chemin de le video du media
        const videoMedia = `assets/media/${name}/${video}`; 

        return { picture, videoMedia }
    }

    

    getPhotographerMediaDom() {

        const { id, photographerId, title, image, video, likes, date, price } = this.data

        const { picture, videoMedia } = this.getVariable()

        //Creation de la balise article photographer
        const article = document.createElement( 'article' );
        article.setAttribute('class','.thumb-img')

        //Balise figure
        const figure = document.createElement( 'figure' );
        article.appendChild(figure);

        /*//Balise a
        const link = document.createElement( 'a' );
        figure.appendChild(link); cursor: pointer; displayModal()*/

        if(image){
            //Images 
            const img = document.createElement( 'img' );
            img.setAttribute("src", picture)
            img.setAttribute("alt",`${image}`);
            //img.setAttribute("onclick",`new lightbox().lightBoxModal(this.src)`);
            figure.appendChild(img);
        }

        if(video){
            //Video 
            const videoPhographer = document.createElement( 'video' );
            videoPhographer.setAttribute("src", videoMedia)
            videoPhographer.setAttribute("alt",`${video}`);
            //videoPhographer.setAttribute("onclick",`new lightbox().lightBoxModal(this.src)`);
            figure.appendChild(videoPhographer);
        }

        //balise figcaption
        const figcaption = document.createElement( 'figcaption' );
        figure.appendChild(figcaption);

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
        likesSection.appendChild(iconLikesImg)

        return (article);
    }

    mediaSection() {

        const { id, photographerId, title, image, video, likes, date, price } = this.data
    
        const main = document.querySelector("main");
    
        //Creation de la div section media
        const mediaSection = document.createElement("div"); 
        mediaSection.setAttribute("id","media-section")
        main.appendChild(mediaSection)
    }
    
    menuSelection() {

        const { id, photographerId, title, image, video, likes, date, price } = this.data

        //Factory media
        const main = document.querySelector("main");
    
        //Creation de la div menu de selection
        const menuSelection = document.createElement("div"); 
        menuSelection.setAttribute("id","menu-selection")
        main.appendChild(menuSelection)
    
        //Creation du texte Trier par
        const trierPar = document.createElement("p"); 
        trierPar.textContent = "Trier par";
        menuSelection.appendChild(trierPar)
    
        //Creation du menu deroulant
        const menuDeroulant = document.createElement("div"); 
        menuDeroulant.setAttribute("id","menu-deroulant")
        menuSelection.appendChild(menuDeroulant)
    
        //Creation du bouton popularité du menu de deroulant
        const buttonMenuDeroulantPopularite = document.createElement("button"); 
        //buttonMenuDeroulantPopularite.textContent = "Popularité";
        buttonMenuDeroulantPopularite.setAttribute("class","btnMenu")
        buttonMenuDeroulantPopularite.setAttribute("data-value","Popularité")
        buttonMenuDeroulantPopularite.textContent = buttonMenuDeroulantPopularite.dataset.value
        menuDeroulant.appendChild(buttonMenuDeroulantPopularite) 

        //Creation du bouton date du menu de deroulant
        const buttonMenuDeroulantDate = document.createElement("button"); 
        //buttonMenuDeroulantDate.textContent = "Date";
        buttonMenuDeroulantDate.setAttribute("class","btnMenu")
        buttonMenuDeroulantDate.setAttribute("data-value","Date")
        buttonMenuDeroulantDate.textContent = buttonMenuDeroulantDate.dataset.value
        menuDeroulant.appendChild(buttonMenuDeroulantDate) 

        //Creation du bouton date du menu de deroulant
        const buttonMenuDeroulantTitre = document.createElement("button"); 
        //buttonMenuDeroulantTitre.textContent = "Titre";
        buttonMenuDeroulantTitre.setAttribute("class","btnMenu")
        buttonMenuDeroulantTitre.setAttribute("data-value","Titre")
        buttonMenuDeroulantTitre.textContent = buttonMenuDeroulantTitre.dataset.value
        menuDeroulant.appendChild(buttonMenuDeroulantTitre) 
    
    }

    encartCard(pricePhotographer) {

        const { id, photographerId, title, image, video, likes, date, price } = this.data

        const main = document.querySelector("main");
    
        //div encart
        const encart = document.createElement("div");
        encart.setAttribute("id","encart")
        main.appendChild(encart)
    
        //Div nombre de likes + icone likes
        const likesSection = document.createElement("div");
        likesSection.setAttribute("id","likes")
        encart.appendChild(likesSection)
    
        //Nombre de likes
        const countLikes = document.createElement("p");
        countLikes.textContent = likes
        likesSection.appendChild(countLikes)

        //Icone likes
        const iconLikesImg = document.createElement("i")
        iconLikesImg.setAttribute("class","fa-solid fa-heart")
        likesSection.appendChild(iconLikesImg)

        //Prix du photographe
        const pPrice = document.createElement( 'p' );
        //pPrice.setAttribute('id','price')
        pPrice.textContent = `${pricePhotographer}€/jour`;
        encart.appendChild(pPrice)

    }

    //return { id, photographerId, title, image, video, likes, date, price, getPhotographerMediaDom, mediaSection, menuSelection, encartCard }
}
