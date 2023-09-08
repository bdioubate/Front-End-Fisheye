//modal lightBox
const modal = document.getElementById('lightbox_modal')

const mainBody = document.getElementById('main')

//global _src
let urlActuelle
let typeUrlActuelle

//Div de l'image
const divImg = document.getElementById('imgLightbox')

//Tab des medias
/*const {photographer} =  await getPhotographer()

const {allMediaPhotographer} = await getMedia(photographer)*/


function initModal(_src) {
   displayLightbox(_src)
}

function lightBoxModal(_src) {
    modal.style.display = "grid";

    mainBody.style.display = "none";

    urlActuelle = _src

    initModal(urlActuelle)

    //Next media
   document.getElementById("btnRight").addEventListener("click", function () {
      nextMedia(urlActuelle);
   });

   //Previous media
   document.getElementById("btnLeft").addEventListener("click", function () {
      prevMedia(urlActuelle);
   });

}

function lightBoxCloseModal() {
    modal.style.display = "none";

    mainBody.style.display = "block";
}

function displayLightbox(_src) {
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

async function nextMedia(_src) {
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

   initModal(urlActuelle)
}

async function prevMedia(_src) {
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

   initModal(urlActuelle)
}



async function getMediaLightbox() {

   const {photographer} =  await getPhotographer()

   const {allMediaPhotographer} = await getMedia(photographer)

   return {allMediaPhotographer}
}




 