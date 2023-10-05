//Class pour l'organisation de la modal lightbox
export default class lightbox{
   
    //Recuperation des variables globales 
    getVariable() { 
        //modal lightBox
        const modal = document.getElementById("lightbox_modal")

        const mainBody = document.getElementById("main")

        //Div de l'image
        const divImg = document.getElementById("imgLightbox")

        const tabMedia = document.getElementById("media-section")

        //Bouton fermeture modal
        const closeModal = document.getElementById("closeLightBox")

        //Nom de l'image ou de la video
        const nomImg = document.createElement("h2")

        return { modal, mainBody, divImg, tabMedia, closeModal, nomImg}

    }

    //Fonction de la gestion du defilement des medias de la lightbox 
    lightBoxModal() {
        const { modal, mainBody, tabMedia} = this.getVariable()

        let j

        for (let i = 0;i < tabMedia.children.length;i++) {
            //Click article
            tabMedia.children[i].children[0].children[0].addEventListener("click", () => {  

                modal.style.display = "grid"

                mainBody.style.display = "none"

                this.displayLightbox(i)

                j = i

            })
        }

        //Next media
        document.getElementById("btnRight").addEventListener("click", () => {
            if(j>=0){
                j++
                if(j === tabMedia.children.length){
                    j = 0
                }
                this.nextMedia(j)
            }
        })

        //Prev media
        document.getElementById("btnLeft").addEventListener("click", () => {
            if(j>=0){
                j--
                if(j < 0){
                    j = tabMedia.children.length - 1
                }
                this.prevMedia(j)
            }
        })

        //Defilement avec le clavier
        document.onkeydown = (e) => {
            //Next media
            if (e.key === "ArrowRight") {
                document.getElementById("btnRight").click()
                document.getElementById("btnRight").focus()
                if(j>=0){
                    j++
                    if(j === tabMedia.children.length){
                        j = 0
                    }
                    this.nextMedia(j)
                }
            }
            //Prev media
            else if (e.key === "ArrowLeft") {
                document.getElementById("btnLeft").click()
                document.getElementById("btnLeft").focus()
                if(j>=0){
                    j--
                    if(j < 0){
                        j = tabMedia.children.length - 1
                    }
                    this.prevMedia(j)
                }
            }
            //Focus sur bouton fermer
            else if (e.key === "Escape") {
                document.getElementById("closeLightBox").click()
            }
        }
    }

    //Fonction pour fermer la modal
    lightBoxCloseModal() {
        const { modal, mainBody, closeModal} = this.getVariable()

        //Boutton close modal
        closeModal.addEventListener("click", () => {
            modal.style.display = "none"

            mainBody.style.display = "block"
        })

        
    }

    //Fonction pour l'affichage de l'image ou la video dans la modal
    displayLightbox(i) {
        this.lightBoxModal()
        const { divImg, tabMedia, nomImg} = this.getVariable()

        const _src = tabMedia.children[i].children[0].children[0].children[0].getAttribute("src") 
        const title = tabMedia.children[i].children[0].children[1].children[0].textContent 

        //global _src
        let typeUrlActuelle

        //Recuperation du type de la source jpg ou mp4
        let parts = _src.split(".")
        typeUrlActuelle = parts[parts.length - 1]

        if (divImg.hasChildNodes()) {
            divImg.removeChild(divImg.firstElementChild)
            divImg.removeChild(divImg.lastElementChild)
        }
        
        if(typeUrlActuelle === "jpg") {
            //Images 
            const img = document.createElement( "img" )
            img.setAttribute("src", _src)   
            img.setAttribute("alt", title)
            divImg.appendChild(img)
        }

        if(typeUrlActuelle === "mp4") {
            //Images 
            const video = document.createElement( "video" )
            video.controls = true
            video.setAttribute("src", _src)   
            video.setAttribute("type","video/mp4")
            video.setAttribute("autoplay","")   
            video.setAttribute("loop","") 
            video.setAttribute("title", title)
            video.ariaLabel = `video ${title}`
            divImg.appendChild(video)
        }

        nomImg.textContent = title
        divImg.appendChild(nomImg)

    }

    //Fonction pour le media suivant
    nextMedia(debut) {
        this.displayLightbox(debut)
    }

    //Fonction pour le media suivant
    prevMedia(debut) {
        this.displayLightbox(debut)
    }
}