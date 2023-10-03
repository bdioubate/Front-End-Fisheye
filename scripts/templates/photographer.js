//Class pour l'organisation de la page index.html pour un photographe
export default class photographerTemplate{ 

    constructor(data) {
        this.data = data

    }

    //Recuperation des variables globales 
    getVariable() {
        const { portrait } = this.data
        //Chemin de l'image du photographe
        const picture = `assets/photographers/${portrait}`

        return { picture}
    }

    //Organisation et l'affichage pour un photographe pour la page index.html
    getUserCardDOM() {
        const {picture} = this.getVariable()
        const { name, city, country, tagline, price } = this.data
        //Creation de la balise article photographer
        const article = document.createElement( "article" )
        article.setAttribute("class","photographer")

        //Balise figure
        const figure = document.createElement( "figure" )
        article.appendChild(figure)

        //Balise a
        const link = document.createElement( "a" )
        link.addEventListener("click", this.navUserCardDOM(link))
        figure.appendChild(link)

        //Images 
        const img = document.createElement( "img" )
        img.setAttribute("src", picture)
        img.setAttribute("alt",`Photo de ${name}`)
        link.appendChild(img)

        //Balise figcaption
        const figcaption = document.createElement( "figcaption" )
        link.appendChild(figcaption)

        //Nom du photographe
        const h2 = document.createElement( "h2" )
        h2.textContent = name
        figcaption.appendChild(h2)

        //Creation de la balise div textPhotographer
        const div = document.createElement( "div" )
        div.setAttribute("id","textPhotographer")
        article.appendChild(div)

        //Localisation du photographe
        const pLocation = document.createElement( "p" )
        pLocation.setAttribute("id","location")
        pLocation.textContent = `${city}, ${country}`
        div.appendChild(pLocation)

        //Slogan du photographe
        const pTagline = document.createElement( "p" )
        pTagline.setAttribute("id","tagline")
        pTagline.textContent = tagline
        div.appendChild(pTagline)

        //Prix du photographe
        const pPrice = document.createElement( "p" )
        pPrice.setAttribute("id","price")
        pPrice.textContent = `${price}€/jour`
        div.appendChild(pPrice)

        return (article)
    }

    //Lien vers la page photographer.html pour un photographe
    navUserCardDOM(link) {
        const { id } = this.data
        link.href = "./photographer.html?id="+id
    }

    //Organisation et l'affichage de l'entete pour un photographe pour la page photographer.html
    getPhotographerCardDom() {
        const {picture} = this.getVariable()
        const { name, city, country, tagline } = this.data
        //Div photographer-header
        const photographerHeader = document.querySelector(".photograph-header")

        //Creation de la  div .photographer profile
        const photographerProfile = document.createElement( "div" )
        photographerProfile.setAttribute("id","photographer-profile")
        photographerHeader.prepend(photographerProfile)

        //Nom du photographe
        const h1 = document.createElement( "h1" )
        h1.textContent = name
        photographerProfile.appendChild(h1)

        //Creation de la balise div textPhotographerProfile
        const div = document.createElement( "div" )
        div.setAttribute("id","text")
        photographerProfile.appendChild(div)

        //Localisation du photographe
        const pLocation = document.createElement( "p" )
        pLocation.setAttribute("id","location")
        pLocation.textContent = `${city}, ${country}`
        div.appendChild(pLocation)

        //Slogan du photographe
        const pTagline = document.createElement( "p" )
        pTagline.setAttribute("id","tagline")
        pTagline.textContent = tagline
        div.appendChild(pTagline)

        //id du bouton contact
        const idBtnContact = document.querySelector(".photograph-header button")
        idBtnContact.setAttribute("id",name)

        //Creation de la balise div user
        const user = document.createElement( "div" )
        user.setAttribute("id","user")
        photographerHeader.appendChild(user)

        //Images du photographe dans la div #user
        const img = document.createElement( "img" )
        img.setAttribute("src", picture)
        img.setAttribute("alt","")
        user.appendChild(img)


        return (photographerHeader)
    }
}