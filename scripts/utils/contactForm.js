//Class pour l'organisation de la modal contact
export default class contact{
    getVariable() {  
    }

    //Fonction pour l'affichage de la modal
    displayModal(nomPhotographer) {
        //modal contact
        const modal = document.getElementById("contact_modal")

        //modal contact content
        const modalContent = document.querySelector(".modal")
        modalContent.ariaLabel = `Contactez-moi ${nomPhotographer}`

        //header.style.display = "none"
        //main.style.display = "none"

        modal.style.display = "block"

        //Formulaire en display block
        const form = document.querySelector("form")
        form.style.display = "block"

        //Titre du formulaire en display none
        const titreForm = document.querySelector(".modal header h2") 
        titreForm.textContent = `Contactez-moi ${nomPhotographer}`
        titreForm.style.display = "block"

        //Modifier header contact
        const headerForm = document.querySelector(".modal header")
        headerForm.style.justifyContent = "space-between"

        //Modifier la class body 
        const formBody = document.getElementById("formBody")
        formBody.style.display = "none"

        //Modifier balise main
        const main = document.querySelector("main")
        main.setAttribute("tabindex","0")
        main.style.display = "none"

        //Modifier balise header
        const header = document.querySelector("header")
        header.style.display = "none"
    }

    //Fonction pour fermer la modal
    closeModal() {
        const modal = document.getElementById("contact_modal")
        modal.style.display = "none"
        const main = document.querySelector("main")
        main.style.display = "block"
        const header = document.querySelector("header")
        header.style.display = "flex"
    }

    //Fonction pour la validation des champs du formulaire
    validateChamp() {
        const champ = document.querySelectorAll(".formData")
        const regex = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/
        for(let i = 0;i < champ.length;i++) {
            if((champ[i].id === "prenomData") && champ[i].value.length < 2 ) {
                throw new Error(`Votre prénom doit comporter au moins 2 caractères ! ${champ[i].id}`)
            }
            else if((champ[i].id === "nomData") && champ[i].value.length < 2  ) {
                throw new Error(`Votre nom doit comporter au moins 2 caractères ! ${champ[i].id}`)
            }
            else if(champ[i].id === "emailData" && regex.test(champ[i].value) === false) {
                throw new Error(`Veuillez remplir correctement votre e-mail ! ${champ[i].id}`)
            }
            else if(champ[i].id === "messageData" && champ[i].value.length < 5) {
                throw new Error(`Votre message doit comporter au moins 5 caractères ! ${champ[i].id}`)
            }
            else {
                this.SupprimeMessageErreur(`${champ[i].id}`)
            }
        }
    }

    //Fonction pour l'affichage du message d'erreur
    AfficheMessageErreur(erreur) {
        const phrase = erreur.message
        let balise = document.getElementById(`${phrase.split(" ")[phrase.split(" ").length-1]}`)
        balise.dataset.errorVisible = true
        balise.parentNode.dataset.error = `${phrase.replaceAll(`${phrase.split(" ").pop()}`, " ")}`
    }

    //Fonction pour supprimer le message d'erreur
    SupprimeMessageErreur(erreur) {
        let balise = document.getElementById(`${erreur}`)
        delete balise.dataset.errorVisible
        delete balise.parentNode.dataset.error 
    }

    //Fonction pour la gestion des champs du formulaire
    validate() {
        try {
            this.validateChamp()
        } catch(Error) {
            this.AfficheMessageErreur(Error)
            return false
        }
        return true
    }

    //Fonction pour l'affichage de confirmation apres l'envoi du formulaire
    modifierForm(nomPhotographer) {
        //Formulaire en display none
        const form = document.querySelector("form")
        form.style.display = "none"

        //Titre du formulaire en display none
        const titreForm = document.querySelector(".modal header h2")
        titreForm.style.display = "none"

        //Modifier header contact
        const headerForm = document.querySelector(".modal header")
        headerForm.style.justifyContent = "flex-end"

        //Modifier la class body 
        const formBody = document.getElementById("formBody")
        formBody.style.display = "flex"
        formBody.innerHTML = `<p>Votre message a bien été envoyé à ${nomPhotographer}</p>`

        //Effacer le contenu du formulaire
        const champ = document.querySelectorAll(".formData")
        for(let i = 0;i < champ.length;i++) {
            champ[i].value = ""
        }
    }

    //Fonction pour declancher l'affichage modal contact
    showModalContact() {
        const btnShowContact = document.querySelector(".contact_button")
        const idBtnShowContact = btnShowContact.id
        btnShowContact.addEventListener("click", () => {
            this.displayModal(idBtnShowContact)
            this.closeModalContact()
            this.keyboardNavContact()
        })
    }

    //Fonction pour fermer la modal
    closeModalContact() {
        const btnCloseModalContact = document.querySelector("#contact_modal .modal header button")
        btnCloseModalContact.addEventListener("click", () => {
            this.closeModal()
        })

        //Navigation avec le clavier
        document.onkeydown = (e) => {
            //Focus sur bouton fermer
            if (e.key === "Escape") {
                document.querySelector("#contact_modal .modal header button").click()
            }
        }
    }

    //Fonction de la gestion globale du formulaire
    validationForm() {  
        const form = document.querySelector("form")
        form.addEventListener("submit", (event) => {
            event.preventDefault()
            if(!new contact().validate()) {
                return
            }
            const champ = document.querySelectorAll(".formData")
            console.log(champ[0].value)
            console.log(champ[1].value)
            console.log(champ[2].value)
            console.log(champ[3].value)
            const btnShowContact = document.querySelector(".contact_button")
            const idBtnShowContact = btnShowContact.id
            new contact().modifierForm(idBtnShowContact)
        })
    }

    keyboardNavContact() {
        //Defilement avec le clavier
        document.onkeydown = (e) => {
            //Focus sur bouton fermer
            if (e.key === "Escape") {
                document.getElementById("closeModalContact").click()
            }

        }

    }
}