class lightbox{

   /*constructor(_src) {
      this._src = _src
   }*/

   getVariable() {
      //modal lightBox
      const modal = document.getElementById('lightbox_modal')

      const mainBody = document.getElementById('main')

      //global _src
      //let urlActuelle
      //let typeUrlActuelle

      //Div de l'image
      const divImg = document.getElementById('imgLightbox')

      return { modal, mainBody, divImg}

   }

   initModal(_src) {
      this.displayLightbox(_src)
   }

   lightBoxModal(_src) {
      console
      const { modal, mainBody, typeUrlActuelle, divImg} = this.getVariable()

      //global _src
      let urlActuelle

      modal.style.display = "grid";

      mainBody.style.display = "none";

      urlActuelle = _src

      this.initModal(urlActuelle)

      //Next media
      document.getElementById("btnRight").addEventListener("click", () => {
         this.nextMedia(urlActuelle);
      });

      //Previous media
      document.getElementById("btnLeft").addEventListener("click", () => {
         this.prevMedia(urlActuelle);
      });

   }

   lightBoxCloseModal() {
      const { modal, mainBody, urlActuelle, typeUrlActuelle, divImg} = this.getVariable()

      modal.style.display = "none";

      mainBody.style.display = "block";
   }

   displayLightbox(_src) {
      const { modal, mainBody, urlActuelle, divImg} = this.getVariable()

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

   async nextMedia(_src) {
      console.log(_src)
      const { modal, mainBody, divImg} = this.getVariable()

      //global _src
      let typeUrlActuelle
      let urlActuelle

      //Obtenir le nom du fichier
      let parts = _src.split('/')
      let nameImg = parts[parts.length - 1]
      parts.pop()
      //Obtenir le type
      let partsType = _src.split('.')
      typeUrlActuelle = partsType[partsType.length - 1]

      // Tab des medias du photographe
      const {photographer} =  await getPhotographer()
      const {allMediaPhotographer} = await getMedia(photographer)

      //Trouve l'index du photographe grace a findIndex
      let indexPhotographer = allMediaPhotographer.findIndex(photographer => (photographer.image || photographer.video) === nameImg);

      //nom du prochain fichier
      let nameNextMedia

      if((indexPhotographer+1) === allMediaPhotographer.length) {
         indexPhotographer = -1
      }

      if(allMediaPhotographer[indexPhotographer+1].image) {
         nameNextMedia = allMediaPhotographer[indexPhotographer+1].image
      }
      else {
         nameNextMedia = allMediaPhotographer[indexPhotographer+1].video
      }

      parts.push(nameNextMedia)
      urlActuelle = parts.join('/')

      console.log(urlActuelle)

      this.initModal(urlActuelle)
   }

   async prevMedia(_src) {
      const { modal, mainBody, divImg} = this.getVariable()

      //global _src
      let typeUrlActuelle
      let urlActuelle

      //Obtenir le nom du fichier
      let parts = _src.split('/')
      let nameImg = parts[parts.length - 1]
      parts.pop()
      //Obtenir le type
      let partsType = _src.split('.')
      typeUrlActuelle = partsType[partsType.length - 1]

      // Tab des medias du photographe
      const {allMediaPhotographer} = await getMediaLightbox()

      //Trouve l'index du photographe grace a findIndex
      let indexPhotographer = allMediaPhotographer.findIndex(photographer => (photographer.image || photographer.video) === nameImg);

      //nom du prochain fichier
      let nameNextMedia

      if((indexPhotographer-1) === -1) {
         indexPhotographer = allMediaPhotographer.length
      }

      if(allMediaPhotographer[indexPhotographer-1].image) {
         nameNextMedia = allMediaPhotographer[indexPhotographer-1].image
      }
      else {
         nameNextMedia = allMediaPhotographer[indexPhotographer-1].video
      }

      parts.push(nameNextMedia)
      urlActuelle = parts.join('/')

      this.initModal(urlActuelle)
   }



   async getMediaLightbox() {

      const {photographer} =  await getPhotographer()

      const {allMediaPhotographer} = await getMedia(photographer)

      return {allMediaPhotographer}
   }
}



//Tab des medias
/*const {photographer} =  await getPhotographer()

const {allMediaPhotographer} = await getMedia(photographer)*/
/*
const tabMedia = document.querySelectorAll("#media-section article")

const tab = []

for (let i of tabMedia) {
   console.log(_src)
   console.log(i.children[0].children[0].getAttribute("src")); // affiche 3, 5, 7 dans la console
   tab.push(i.children[0].children[0].getAttribute("src"))
 }
*/


//Tab des medias
/*const {photographer} =  await getPhotographer()

const {allMediaPhotographer} = await getMedia(photographer)*/
/*
const tabMedia = document.querySelectorAll("#media-section article")

const tab = []

for (let i of tabMedia) {
   console.log(_src)
   console.log(i.children[0].children[0].getAttribute("src")); // affiche 3, 5, 7 dans la console
   tab.push(i.children[0].children[0].getAttribute("src"))
 }
*/
