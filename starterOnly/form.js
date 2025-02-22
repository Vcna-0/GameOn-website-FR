
// Sélection des éléments du formulaire
const formElement = document.querySelector("form[name='reserve']");
const firstNameElement = document.getElementById("first");
const lastNameElement = document.getElementById("last");
const emailElement = document.getElementById("email");
const birthdateElement = document.getElementById("birthdate");
const quantityElement = document.getElementById("quantity");
const locationElements = document.querySelectorAll("input[name='location']");
const checkboxTermsElement = document.getElementById("checkbox1");
const submitButton = document.querySelector(".btn-submit");

function handleValidate(event){
   event.preventDefault();

   // FIRST NAME
   const regexName = /^[A-Za-zÀ-ÖØ-öø-ÿ-]{2,}$/
   const testfirstname = regexName.test(firstNameElement.value)
   if(testfirstname){
      console.log("OK")
      const parent = firstNameElement.parentNode
      parent.setAttribute("data-error-visible", false);
      parent.setAttribute("data-error", "");

   }else{
      console.log("PAS OK")
      const parent = firstNameElement.parentNode
      parent.setAttribute("data-error-visible", true);
      parent.setAttribute("data-error", "blabla");
   }


   // LAST NAME
   const testlastname = regexName.test(lastNameElement.value)
   if(testlastname){
      console.log("OK")
      const parent = lastNameElement.parentNode
      parent.setAttribute("data-error-visible", false);
      parent.setAttribute("data-error", "");
   }else{
      console.log("PAS OK")
      const parent = lastNameElement.parentNode
      parent.setAttribute("data-error-visible", true);
      parent.setAttribute("data-error", "blabla");
   }


   // EMAIL
   const regexEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
   const testemail = regexEmail.test(emailElement.value)
   if(testemail){
      console.log("OK")
      const parent = emailElement.parentNode
      parent.setAttribute("data-error-visible", false);
      parent.setAttribute("data-error", "");
   }else{
      console.log("PAS OK")
      const parent = emailElement.parentNode
      parent.setAttribute("data-error-visible", true);
      parent.setAttribute("data-error", "blabla");
   }


  //  DATE
   const birthdateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/
   const testbirthday = birthdateRegex.test(birthdateElement.value)
   if(testbirthday){
      console.log("OK")
      const parent = birthdateElement.parentNode
      parent.setAttribute("data-error-visible", false);
      parent.setAttribute("data-error", "");
   }else{
      console.log("PAS OK")
      const parent = birthdateElement.parentNode
      parent.setAttribute("data-error-visible", true);
      parent.setAttribute("data-error", "blabla");
   }


   // QUANTITY
   const quantityRegex = /^[0-9]+$/
   const testquantity = quantityRegex.test(quantityElement.value)
   if(testquantity){
      console.log("OK")
      const parent = quantityElement.parentNode
      parent.setAttribute("data-error-visible", false);
      parent.setAttribute("data-error", "");
   }else{
      console.log("PAS OK")
      const parent = quantityElement.parentNode
      parent.setAttribute("data-error-visible", true);
      parent.setAttribute("data-error", "blabla");
   }


   checkRadio()
   function checkRadio() {
      // Vérifie si au moins un bouton radio avec le name="option" est coché
      let isChecked = document.querySelector('input[name="location"]:checked') !== null;

      if (isChecked){
         console.log("c'est OK")
         const parent = document.querySelector('input[name="location"]').parentNode
         parent.setAttribute("data-error-visible", false);
         parent.setAttribute("data-error", "");
      }else {
         console.log("C'est PAS OK")
         const parent = document.querySelector('input[name="location"]').parentNode
         parent.setAttribute("data-error-visible", true);
         parent.setAttribute("data-error", "blabla");
      }
   }

   if(checkboxTermsElement.checked){
      console.log("OK")
      const parent = checkboxTermsElement.parentNode
      parent.setAttribute("data-error-visible", false);
      parent.setAttribute("data-error", "");
   }else{
      console.log("PAS OK")
      const parent = checkboxTermsElement.parentNode
      parent.setAttribute("data-error-visible", true);
      parent.setAttribute("data-error", "blabla");
   }

}

