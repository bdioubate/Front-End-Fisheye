function photographerTemplate(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    //Chemin de l'image du photographe
    const picture = `assets/photographers/${portrait}`;

    //Balise du lien du photographe
    const link = document.createElement( 'a' );

    function getUserCardDOM() {
        //Creation de la balise article photographer
        const article = document.createElement( 'article' );
        article.setAttribute('class','photographer')

        //Id du photographe ajouter a la balise article
        //article.setAttribute('id',`${id}`)

        //Balise figure
        const figure = document.createElement( 'figure' );
        article.appendChild(figure);

        //Balise a
        link.addEventListener("click", navUserCardDOM);
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

    function navUserCardDOM() {
        link.href = "./photographer.html?id="+id
    }

    return { name, id, city, country, tagline, price, picture, getUserCardDOM, navUserCardDOM }
}