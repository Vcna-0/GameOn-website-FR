const formElement = document.querySelector("form[name='reserve']");
const firstNameElement = document.getElementById("first");
const lastNameElement = document.getElementById("last");
const emailElement = document.getElementById("email");
const birthdateElement = document.getElementById("birthdate");
const quantityElement = document.getElementById("quantity");
const locationElements = document.querySelectorAll("input[name='location']");
const checkboxTermsElement = document.getElementById("checkbox1");
const submitButton = document.querySelector(".btn-submit");
const formElements = document.querySelectorAll("form[name='reserve'] input");

const validationRules = {
    first: {
        regex: /^[A-Za-zÀ-ÖØ-öø-ÿ-]{2,}$/,
        error: "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
    },
    last: {
        regex: /^[A-Za-zÀ-ÖØ-öø-ÿ-]{2,}$/,
        error: "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    },
    email: {
        regex: /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)*\w[\w-]{0,66}\.[a-z]{2,6}$/i,
        error: "Veuillez indiquer un email valide"
    },
    birthdate: {
        regex: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/,
        error: "Vous devez entrer votre date de naissance."
    },
    quantity: {
        regex: /^[0-9]+$/,
        error: "Veuillez entrer un nombre valide."
    },
    location: {
        customValidation: () => Array.from(locationElements).some(el => el.checked),
        error: "Vous devez choisir une option."
    },
    checkbox1: {
        customValidation: () => checkboxTermsElement.checked,
        error: "Vous devez accepter les termes et conditions."
    }
};

function handleValidate(event){
   event.preventDefault();

   formElements.forEach(input => {
      console.log("input", input)

      function showValidationError(input, isValid, errorMessage = "") {
         const parent = input.parentNode;
         parent.setAttribute("data-error-visible", !isValid);
         parent.setAttribute("data-error", isValid ? "" : errorMessage);
      }
      
      const rule = validationRules[input.name];
      if(rule){
         const isValid = rule.customValidation ? rule.customValidation() : rule.regex.test(input.value);
         showValidationError(input, isValid, rule.error)
      }
   })

//   //  DATE
//    const birthdateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/
//    const testbirthday = birthdateRegex.test(birthdateElement.value)
//    if(testbirthday){
//       console.log("OK")
//       const parent = birthdateElement.parentNode
//       parent.setAttribute("data-error-visible", false);
//       parent.setAttribute("data-error", "");
//    }else{
//       console.log("PAS OK")
//       const parent = birthdateElement.parentNode
//       parent.setAttribute("data-error-visible", true);
//       parent.setAttribute("data-error", "blabla");
//    }

}

