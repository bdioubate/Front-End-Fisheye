class lightbox{

   getVariable() {
      //modal lightBox
      const modal = document.getElementById('lightbox_modal')

      const mainBody = document.getElementById('main')

      //Div de l'image
      const divImg = document.getElementById('imgLightbox')

      //
      //const tabMedia = document.querySelectorAll("#media-section")

      const tabMedia = document.getElementById("media-section")

      //Bouton fermeture modal
      const closeModal = document.getElementById('closeLightBox')

      return { modal, mainBody, divImg, tabMedia, closeModal}

   }

   lightBoxModal() {
      const { modal, mainBody, typeUrlActuelle, divImg, tabMedia} = this.getVariable()

      let j

      for (let i = 0; i < tabMedia.children.length; i++) {
         //Click article
         tabMedia.children[i].addEventListener("click", () => {

            modal.style.display = "grid";

            mainBody.style.display = "none";

            this.displayLightbox(i)

            j = i

         });
      }

      //Next media
      document.getElementById("btnRight").addEventListener("click", () => {
         if(j>=0){
         j++
         if(j === tabMedia.children.length){
            j = 0
         }
         this.nextMedia(j);
      }
      });

      //Prev media
      document.getElementById("btnLeft").addEventListener("click", () => {
         if(j>=0){
         j--
         if(j < 0){
            j = tabMedia.children.length - 1
         }
         this.prevMedia(j);
      }
      });
      

   }

   lightBoxCloseModal() {
      const { modal, mainBody, closeModal} = this.getVariable()

      //Boutton close modal
      closeModal.addEventListener("click", () => {
         modal.style.display = "none";

         mainBody.style.display = "block";
      });
   }

   displayLightbox(i) {
      const { modal, mainBody, urlActuelle, divImg, tabMedia} = this.getVariable()

      const _src = tabMedia.children[i].children[0].children[0].getAttribute("src") 

      //global _src
      let typeUrlActuelle

      let parts = _src.split('.')
      typeUrlActuelle = parts[parts.length - 1]

      if (divImg.hasChildNodes()) {
         divImg.removeChild(divImg.firstElementChild);
      }
      
      if(typeUrlActuelle === "jpg") {
         //Images 
         const img = document.createElement( 'img' );
         img.setAttribute("src", _src)   
         divImg.appendChild(img);
      }

      if(typeUrlActuelle === "mp4") {
         //Images 
         const video = document.createElement( 'video' );
         video.setAttribute("src", _src)   
         video.setAttribute("autoplay","")   
         video.setAttribute("loop","") 
         divImg.appendChild(video);
      }
   }

   nextMedia(debut) {
      this.displayLightbox(debut)
   }

   prevMedia(debut) {
      this.displayLightbox(debut)
   }
}