function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form 
function closeModal() {
  modalbg.style.display = "none";
}

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("close") || event.target.classList.contains("btn-close")) {
    closeModal();
  }
});

function showConfirmationModal() {
   document.querySelector(".content").innerHTML = `
      <button type="button" class="close" aria-label="Fermer">&times;</button>
      <div class="modal-body">
            <p class="confirmation-message">Merci pour votre inscription</p>
            <button class="btn-close">Fermer</button>
      </div>
   `;
}