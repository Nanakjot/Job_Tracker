
const popUp = document.getElementById("extraP");
const popUpBtn = document.getElementById("popUpBtn");
const bodyDiv = document.getElementById("bodyDiv");

const hidePopUp = () => {
    popUp.style.display = "none";  
    bodyDiv.style.display="block";
   }

bodyDiv.style.display="none";
popUpBtn.addEventListener("click", hidePopUp);
