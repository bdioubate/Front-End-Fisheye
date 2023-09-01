//modal lightBox
const modal = document.getElementById('lightbox_modal')

const mainBody = document.getElementById('main')

function lightBoxModal() {
    modal.style.display = "grid";

    mainBody.style.display = "none";
    //Ajout la div a la balise body
   //document.body.appendChild(modal)
    /*
   //SVG arrow right
   const svgArrowRight = document.createElement('svg')
   svgArrowRight.setAttribute("xmlns","http://www.w3.org/2000/svg")
   svgArrowRight.setAttribute("width","24")
   svgArrowRight.setAttribute("height","24") //viewBox
   svgArrowRight.setAttribute("viewBox","0 0 24 24") 
   modal.appendChild(svgArrowRight)
   //Path SVG arrow right
   const pathSvgArrowRight = document.createElement('path') 
   pathSvgArrowRight.setAttribute("d","M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z")
   pathSvgArrowRight.setAttribute("fill","black")
   svgArrowRight.appendChild(pathSvgArrowRight)*/

}

function lightBoxCloseModal() {
    modal.style.display = "none";

    mainBody.style.display = "block";
}