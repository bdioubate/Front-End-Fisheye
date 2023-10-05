//Class pour la gestion des likes
export default class btnLikes{

    //Recuperation des variables globales 
    getVariable() {
        const AllbtnLikes = document.getElementsByClassName("btnLikes")

        return {AllbtnLikes}
    }

    //Fonction pour ajouter ou supprimer un like au click d'un bouton like
    liked(index) {
        const { AllbtnLikes } = this.getVariable()

        AllbtnLikes[index].addEventListener("click", function () {
            if(AllbtnLikes[index].dataset.liked === "false") {
                AllbtnLikes[index].children[0].setAttribute("class","fa-solid fa-heart fa-xl")  
                AllbtnLikes[index].setAttribute("data-liked",true)

                //Ajoute +1 au chiffre de la balise p avant la balise i
                AllbtnLikes[index].previousSibling.innerHTML++

                //Compteur de l'encart 
                document.querySelector("#likes p").innerHTML++
            }else {
                AllbtnLikes[index].setAttribute("data-liked",false)
                AllbtnLikes[index].children[0].setAttribute("class","fa-regular fa-heart fa-xl") 

                //Retire +1 au chiffre de la balise p avant la balise i
                AllbtnLikes[index].previousSibling.innerHTML--

                //Compteur de l'encart 
                document.querySelector("#likes p").innerHTML--
            } 
        })
    }

    //Fonction pour compter le nombre total de likes des medias  
    allBtnLiked() {
        const { AllbtnLikes } = this.getVariable()

        for(let i = 0; i < AllbtnLikes.length; i++) {
            this.liked(i)    
        }
    }   
}

