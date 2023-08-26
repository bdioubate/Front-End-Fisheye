//Balise header
const header = document.querySelector("header");

//Balise main
const main = document.querySelector("main");

function displayModal() {
    //modal contact
    const modal = document.getElementById("contact_modal");

    //header.style.display = "none";
    //main.style.display = "none";

	modal.style.display = "block";

}

function closeModal() {
    const modal = document.getElementById("contact_modal");

    //header.style.display = "flex";
    //main.style.display = "block";

    modal.style.display = "none";
}
