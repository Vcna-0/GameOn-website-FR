import { handleValidate, handleRealTimeValidation } from './form.js';

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalContent = document.querySelector(".content");
const form = document.querySelector("form[name='reserve']");
const modalSuccess = document.querySelector(".modal-success");
const modalSuccessButtonsClose = document.querySelectorAll(".close-success-modal");
const formButtonClose = document.querySelector(".close-form-modal");

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

modalBtn.forEach((btn) => btn.addEventListener("click", () => openModal("form")));

// Open form and success modal
export function openModal(modalType) {
  if (modalType === "form") {
    closeModal("modalSuccess"); 
    modalbg.style.display = "block";
    modalContent.style.display = "block";
  } else if (modalType === "modalSuccess") {
    closeModal("formOnly"); 
    modalSuccess.style.display = "block";
  }
}

// Close form and success modal 
function closeModal(modalType) {
  if (modalType === "form") {
    modalContent.style.display = "none";
    modalbg.style.display = "none";
  } else if (modalType === "formOnly") {
    modalContent.style.display = "none";
  } else if (modalType === "modalSuccess") {
    modalSuccess.style.display = "none";
    modalbg.style.display = "none";
    form.reset();
  }
}

// Event listeners
formButtonClose.addEventListener("click", () => closeModal("form")); 
modalSuccessButtonsClose.forEach((btn) => btn.addEventListener("click", () => closeModal("modalSuccess")));

