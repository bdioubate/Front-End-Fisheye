//Importation des class
import displayMedia from "../pages/photographer.js"
import lightbox from "./Lightbox.js"
import btnLikes from "./likes.js"
import contact from "./contactForm.js"
import keyboard from "./keyboard.js"

//Class pour la gestion du trie des medias
export default class menuDeroulant{

    constructor(allMediaPhotographer) {
        this.allMediaPhotographer = allMediaPhotographer
    }

    //Recuperation des variables globales
    getVariable() {
        const menuDeroulant = document.getElementById("menu-deroulant")
        const allBtn = menuDeroulant.getElementsByClassName("btnMenu")
        const btnFirst = allBtn[0]
        const btnSecond= allBtn[1]
        const btnThird = allBtn[2]
        const arrowBtnFirstDown = document.querySelector(".fa-angle-down")
        const arrowBtnFirstUp = document.querySelector(".fa-angle-UP")
        const createArrowBtnFirstUp = document.createElement("i")

        return {menuDeroulant, allBtn, btnFirst, btnSecond, btnThird, arrowBtnFirstDown, arrowBtnFirstUp, createArrowBtnFirstUp}
    }

    //Fonction pour declancher les fonctions de trie au click sur les boutons du menu deroulant
    showMenuDeroulant() {
        const {allBtn, btnFirst, btnSecond, arrowBtnFirstDown} = this.getVariable()

        btnFirst.addEventListener("click", function () {
            if((btnSecond.style.display === "flex")) {
                for(let i = 1; i < allBtn.length; i++) {
                    allBtn[i].style.display = "none"
                }
                if(arrowBtnFirstDown){
                    arrowBtnFirstDown.setAttribute("class","fa-solid fa-angle-down")     
                } else {
                    const arrowBtnFirstUp1 = document.querySelector(".fa-angle-up") 
                    if(arrowBtnFirstUp1){
                        arrowBtnFirstUp1.setAttribute("class","fa-solid fa-angle-down")    
                    }
                      
                }

            }else {
                for(let i = 0; i < allBtn.length; i++) {
                    allBtn[i].style.display = "flex"
                } 
                if(arrowBtnFirstDown) {
                    arrowBtnFirstDown.setAttribute("class","fa-solid fa-angle-up") 
                } else {
                    const arrowBtnFirstDown1 = document.querySelector(".fa-angle-down") 
                    if(arrowBtnFirstDown1){
                        arrowBtnFirstDown1.setAttribute("class","fa-solid fa-angle-up")    
                    }
                }
            }
        })    
    }

    //Fonction de la gestion des differents trie
    sortMedia(typeSort,allMediaPhotographer, photographer) {
        if(typeSort === "Date") {
            allMediaPhotographer.sort(function (a, b) {
                return a.date.split("-").join("") - b.date.split("-").join("")
            })    
        }
        else if(typeSort === "Titre") {
            allMediaPhotographer.sort(function (a, b) {
                if (a.title < b.title) {
                    return -1
                }
                if (a.title > b.title) {
                    return 1
                }
                return 0
            })
        }else {
            allMediaPhotographer.sort(function (a, b) {
                return b.likes - a.likes
            })
        }
        const encart = document.getElementById("encart")
        encart.remove()

        const allMediaSection = document.querySelectorAll("#media-section article")
        for(let i=0;i<allMediaSection.length;i++) {
            allMediaSection[i].remove()
        }

        displayMedia(allMediaPhotographer, photographer)
        new lightbox().lightBoxModal()
        new btnLikes().allBtnLiked() 
        new contact().closeModalContact()
        this.showMenuDeroulant()
        new keyboard().keyboardNav() 
    }

    //Fonction pour changer l'ordres des boutons du menu deroulant au click d'un bouton
    changeOrderBtn(allMediaPhotographer, photographer) {
        const {btnFirst, btnSecond, btnThird, createArrowBtnFirstUp} = this.getVariable()

        //Au click du 2eme bouton
        btnSecond.addEventListener("click", () => {
            createArrowBtnFirstUp.setAttribute("class","fa-solid fa-angle-up") 

            const sortbtnSecond = btnSecond.dataset.value
            this.sortMedia(sortbtnSecond, allMediaPhotographer, photographer)
            const temporaryText = btnFirst.textContent
            const temporaryDataset = btnFirst.dataset.value

            //btnFirst.setAttribute("class","btnMenu fa-solid fa-angle-down")
            btnFirst.textContent = btnSecond.textContent
            btnFirst.dataset.value = btnSecond.dataset.value
            btnFirst.appendChild(createArrowBtnFirstUp)

            btnSecond.textContent = temporaryText
            btnSecond.dataset.value = temporaryDataset

            //Faire disparaire menu deroulant
            btnSecond.style.display = "none"
            btnThird.style.display = "none"
            
            this.showMenuDeroulant()
        }) 

        //Au click du 3eme bouton
        btnThird.addEventListener("click", () => {
            createArrowBtnFirstUp.setAttribute("class","fa-solid fa-angle-up") 

            const sortbtnThird = btnThird.dataset.value
            this.sortMedia(sortbtnThird, allMediaPhotographer, photographer)
            const temporaryText = btnFirst.textContent
            const temporaryDataset = btnFirst.dataset.value

            btnFirst.textContent = btnThird.textContent
            btnFirst.dataset.value = btnThird.dataset.value
            btnFirst.appendChild(createArrowBtnFirstUp)

            btnThird.textContent = temporaryText
            btnThird.dataset.value = temporaryDataset

            //Faire disparaire menu deroulant
            btnSecond.style.display = "none"
            btnThird.style.display = "none"
            
            this.showMenuDeroulant()
        })

    }

    //Fonction qui regroupe les 2 grosse fonction pour le deroulement du trie
    content(allMediaPhotographer, photographer) {
        this.showMenuDeroulant()
        this.changeOrderBtn(allMediaPhotographer, photographer)
    }
    
}



