export default class contact{
    getVariable() {  
    }

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
        titreForm.style.display = "block"

        //Modifier header contact
        const headerForm = document.querySelector(".modal header")
        headerForm.style.justifyContent = "space-between"

        //Modifier la class body 
        const formBody = document.getElementById("formBody")
        formBody.style.display = "none"
    }

    closeModal() {
        const modal = document.getElementById("contact_modal")
        modal.style.display = "none"
    }

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

    AfficheMessageErreur(erreur) {
        const phrase = erreur.message
        let balise = document.getElementById(`${phrase.split(" ")[phrase.split(" ").length-1]}`)
        balise.dataset.errorVisible = true
        balise.parentNode.dataset.error = `${phrase.replaceAll(`${phrase.split(" ").pop()}`, " ")}`
    }

    SupprimeMessageErreur(erreur) {
        let balise = document.getElementById(`${erreur}`)
        delete balise.dataset.errorVisible
        delete balise.parentNode.dataset.error 
    }


    validate() {
        try {
            this.validateChamp()
        } catch(Error) {
            this.AfficheMessageErreur(Error)
            return false
        }

        return true
    }

    modifierForm() {
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
        formBody.innerHTML = "<p>Votre message a bien été envoyé</p>"

        //Effacer le contenu du formulaire
        const champ = document.querySelectorAll(".formData")
        for(let i = 0;i < champ.length;i++) {
            champ[i].value = ""
        }
    }

    showModalContact() {
        const btnShowContact = document.querySelector(".contact_button")
        const idBtnShowContact = btnShowContact.id
        btnShowContact.addEventListener("click", () => {
            this.displayModal(idBtnShowContact)
        })
    }

    closeModalContact() {
        const btnCloseModalContact = document.querySelector(".modal header img")
        btnCloseModalContact.addEventListener("click", () => {
            this.closeModal()
        })
    }

    validationForm() {  
        const form = document.querySelector("form")
        form.addEventListener("submit", (event) => {
            event.preventDefault()
            if(!new contact().validate()) {
                return
            }
            new contact().modifierForm()
        })
    }
}