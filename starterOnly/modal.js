import { handleValidate, handleRealTimeValidation } from './form.js';

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
const modalContent = document.querySelector(".content");
const form = document.querySelector("form[name='reserve']");
const modalSuccess = document.querySelector(".modal-success");
const modalSuccessButtonsClose = document.querySelectorAll(".close-success-modal");
const formButtonClose = document.querySelector(".close-form-modal");

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  closeModal("modalSuccess");
  modalbg.style.display = "block";
  modalContent.style.display = "block";
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

formButtonClose.addEventListener("click", () => closeModal("form")); 
modalSuccessButtonsClose.forEach((btn) => btn.addEventListener("click", () => closeModal("modalSuccess")));

export function showConfirmationModal() {
  closeModal("formOnly");
  modalSuccess.style.display = "block";
}
