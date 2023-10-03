//Class pour la gestion de la navigation au clavier
export default class keyboard{

    //Recuperation des variables globales 
    getVariable() { 
        const nav = document.querySelectorAll(".nav")
        
        const navContact = document.querySelectorAll(".navContact")

        return {nav, navContact}
    }

    //Navigation du site avec le clavier
    keyboardNav() {  

        let i = 0
        let on = false

        const {nav} = this.getVariable()
        //Defilement avec le clavier
        document.onkeydown = (e) => {
            //Next media
            if (e.key === "ArrowRight") {
                if(i>0) {
                    nav[i-1].blur() 
                }
                //console.log(nav.length)
                //console.log(i)
                //console.log(nav[i])

                if(i===0 && !on){
                    console.log("rentrer en 0")
                    nav[i].focus()
                    on = true
                }
                //si le menu-deroulant est fermé
                else if(i === 2 && nav[i+1].style.display === "none" ){
                    console.log("rentrer"+i)
                    i=5
                    nav[i].focus()
                }else{
                    console.log("pas rentrer"+i)
                    console.log(nav[i])
                    i++
                    //si on arrive a la derniere media
                    if(i >= nav.length) {
                        i=0
                    }
                    nav[i].focus()
                }
            }

            //Boutton entrée
            if((i != 0 && nav[i].src) || nav[i].ariaLabel === "likes") {
                //Enter
                if (e.key === "Enter") {
                    if((i-1)<0){
                        i=1
                    }
                    nav[i].click()
                }    
            }

            //
            
        }
    }

    keyboardNavContact() {
        let j = 0

        const {navContact} = this.getVariable()
        //Defilement avec le clavier
        document.onkeydown = (e) => {
            //Next media
            if (e.key === "ArrowRight") {
                if(j>0) {
                    navContact[j-1].blur() 
                }
                console.log(navContact.length)
                console.log(j)
                console.log(navContact[j])
                
                navContact[j].focus()
                    j++

                //Quand on arrive a la derniere media
                if(j >= navContact.length) {
                    j=0
                }
            }
            //Focus sur bouton fermer
            if (e.key === "Escape") {
                document.getElementById("closeModalContact").click()
            }

        }

    }

    /*
    nextNav(i) {
        this.displayNav(i)
    }

    displayNav(i) {
        const {nav} = this.getVariable()

        nav[i].focus()
        console.log(i)
    }*/
}