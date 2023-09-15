class menuDeroulant{

    constructor(allMediaPhotographer) {
        this.allMediaPhotographer = allMediaPhotographer
      }

      getVariable() {
        const menuDeroulant = document.getElementById("menu-deroulant");
        const allBtn = menuDeroulant.getElementsByClassName("btnMenu");
        const btnFirst = allBtn[0];
        const btnSecond= allBtn[1];
        const btnThird = allBtn[2];

        return {menuDeroulant, allBtn, btnFirst, btnSecond, btnThird}
      }

    showMenuDeroulant() {
        const {allBtn, btnFirst, btnSecond} = this.getVariable()

        btnFirst.addEventListener("click", function () {
            if((btnSecond.style.display === "block")) {
                for(let i = 1; i < allBtn.length; i++) {
                    (allBtn)[i].style.display = "none"
                } 
            }else {
                for(let i = 0; i < allBtn.length; i++) {
                    allBtn[i].style.display = "block"
                } 
            }
        })    
    }

    sortMedia(typeSort,allMediaPhotographer, photographer) {
        if(typeSort === "Date") {
            console.log(typeSort)
            allMediaPhotographer.sort(function (a, b) {
                    return a.date.split("-").join('') - b.date.split("-").join('');
                });    
        }
        else if(typeSort === "Titre") {
            console.log(typeSort)
            allMediaPhotographer.sort(function (a, b) {
            if (a.title < b.title) {
              return -1;
            }
            if (a.title > b.title) {
              return 1;
            }
            return 0;
          });
        }else {
            console.log(typeSort)
            allMediaPhotographer.sort(function (a, b) {
                return b.likes - a.likes;
            });
        }
        const encart = document.getElementById("encart")
        encart.remove()
        const mediaSection = document.getElementById("media-section")
        mediaSection.remove()
        displayMedia(allMediaPhotographer, photographer)
        const menu = document.querySelectorAll("#menu-selection")
        menu[1].remove()
    }

    changeOrderBtn(allMediaPhotographer, photographer) {
        const {btnFirst, btnSecond, btnThird} = this.getVariable()

        btnSecond.addEventListener("click", () => {
            const sortbtnSecond = btnSecond.dataset.value
            this.sortMedia(sortbtnSecond, allMediaPhotographer, photographer)
            const temporaryText = btnFirst.textContent
            const temporaryDataset = btnFirst.dataset.value

            btnFirst.textContent = btnSecond.textContent
            btnFirst.dataset.value = btnSecond.dataset.value

            btnSecond.textContent = temporaryText
            btnSecond.dataset.value = temporaryDataset
        }) 

        btnThird.addEventListener("click", () => {
            const sortbtnThird = btnThird.dataset.value
            this.sortMedia(sortbtnThird, allMediaPhotographer, photographer)
            const temporaryText = btnFirst.textContent
            const temporaryDataset = btnFirst.dataset.value

            btnFirst.textContent = btnThird.textContent
            btnFirst.dataset.value = btnThird.dataset.value

            btnThird.textContent = temporaryText
            btnThird.dataset.value = temporaryDataset
        })

    }

    content(allMediaPhotographer, photographer) {
        this.showMenuDeroulant()
        this.changeOrderBtn(allMediaPhotographer, photographer)
    }




}



