class photographerTemplate { 

    constructor(data) {
        this.data = data

    }

    /*getVariableData() {
        const { name, id, city, country, tagline, price, portrait } = this.data

        return {name, id, city, country, tagline, price, portrait }
    }*/

    getVariable() {
        const { name, id, city, country, tagline, price, portrait } = this.data
        //Chemin de l'image du photographe
        const picture = `assets/photographers/${portrait}`;

        return { picture}
    }

    getUserCardDOM() {
        const {picture} = this.getVariable()
        const { name, id, city, country, tagline, price, portrait } = this.data
        //Creation de la balise article photographer
        const article = document.createElement( 'article' );
        article.setAttribute('class','photographer')

        //Balise figure
        const figure = document.createElement( 'figure' );
        article.appendChild(figure);

        //Balise a
        const link = document.createElement( 'a' );
        link.addEventListener("click", this.navUserCardDOM(link));
        figure.appendChild(link);

        //Images 
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("alt",`photo de ${name}`);
        link.appendChild(img);

        //Balise figcaption
        const figcaption = document.createElement( 'figcaption' );
        link.appendChild(figcaption);

        //Nom du photographe
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        figcaption.appendChild(h2);

        //Creation de la balise div textPhotographer
        const div = document.createElement( 'div' );
        div.setAttribute('id','textPhotographer')
        article.appendChild(div);

        //Localisation du photographe
        const pLocation = document.createElement( 'p' );
        pLocation.setAttribute('id','location')
        pLocation.textContent = `${city}, ${country}`;
        div.appendChild(pLocation);

        //Slogan du photographe
        const pTagline = document.createElement( 'p' );
        pTagline.setAttribute('id','tagline')
        pTagline.textContent = tagline;
        div.appendChild(pTagline);

        //Prix du photographe
        const pPrice = document.createElement( 'p' );
        pPrice.setAttribute('id','price')
        pPrice.textContent = `${price}€/jour`;
        div.appendChild(pPrice);

        return (article);
    }

    navUserCardDOM(link) {
        const { name, id, city, country, tagline, price, portrait } = this.data
        link.href = "./photographer.html?id="+id
    }

    getPhotographerCardDom() {
        const {picture} = this.getVariable()
        const { name, id, city, country, tagline, price, portrait } = this.data
        //Div photographer-header
        const photographerHeader = document.querySelector(".photograph-header");

        //Creation de la  div .photographer profile
        const photographerProfile = document.createElement( 'div' );
        photographerProfile.setAttribute('id','photographer-profile')
        photographerHeader.prepend(photographerProfile);

        //Nom du photographe
        const h1 = document.createElement( 'h1' );
        h1.textContent = name;
        photographerProfile.appendChild(h1);

        //Creation de la balise div textPhotographerProfile
        const div = document.createElement( 'div' );
        div.setAttribute('id','text')
        photographerProfile.appendChild(div);

        //Localisation du photographe
        const pLocation = document.createElement( 'p' );
        pLocation.setAttribute('id','location')
        pLocation.textContent = `${city}, ${country}`;
        div.appendChild(pLocation);

        //Slogan du photographe
        const pTagline = document.createElement( 'p' );
        pTagline.setAttribute('id','tagline')
        pTagline.textContent = tagline;
        div.appendChild(pTagline);

        //Creation de la balise div user
        const user = document.createElement( 'div' );
        user.setAttribute('id','user')
        photographerHeader.appendChild(user);

        //Images du photographe dans la div #user
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("alt",`photo de ${name}`);
        user.appendChild(img);


        return (photographerHeader);
    }


    //return { name, id, city, country, tagline, price, picture, getUserCardDOM, navUserCardDOM, getPhotographerCardDom }
}