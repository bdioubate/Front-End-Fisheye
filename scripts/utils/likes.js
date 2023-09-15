class btnLikes{

    getVariable() {
        const AllbtnLikes = document.getElementsByClassName("btnLikes")

        return {AllbtnLikes}
    }

    liked(index) {
        const { AllbtnLikes } = this.getVariable()

        AllbtnLikes[index].addEventListener("click", function () {
            if(AllbtnLikes[index].dataset.liked === "false") {
                AllbtnLikes[index].setAttribute("class","fa-solid fa-heart fa-xl btnLikes")  
                AllbtnLikes[index].setAttribute("data-liked",true)

                //Ajoute +1 au chiffre de la balise p avant la balise i
                AllbtnLikes[index].previousSibling.innerHTML++

                //Compteur de l'encart 
                document.querySelector("#likes p").innerHTML++;
            }else {
                AllbtnLikes[index].setAttribute("data-liked",false)
                AllbtnLikes[index].setAttribute("class","fa-regular fa-heart fa-xl btnLikes") 

                //Retire +1 au chiffre de la balise p avant la balise i
                AllbtnLikes[index].previousSibling.innerHTML--

                //Compteur de l'encart 
                document.querySelector("#likes p").innerHTML--;
            } 
        })
    }

    allBtnLiked() {
        const { AllbtnLikes } = this.getVariable()

        for(let i = 0; i < AllbtnLikes.length; i++) {
        this.liked(i)    
        }
    }   
}



/*
async function btnLikes() {
    const AllbtnLikes = document.getElementsByClassName("btnLikes")

    function liked(index) {
    AllbtnLikes[index].addEventListener("click", function () {
        if((AllbtnLikes[index].dataset.liked) != true) {
            //AllbtnLikes[index].removeAttribute("class")
            AllbtnLikes[index].setAttribute("class","fa-solid fa-heart fa-xl btnLikes")    
        } else {
            AllbtnLikes[index].setAttribute("class","fa-regular fa-heart fa-xl btnLikes") 
        } 
     });
    }

    console.log(AllbtnLikes[0]) 
    for(let i = 0; i < AllbtnLikes.length; i++) {
    liked(i)
    }   
}
*/
