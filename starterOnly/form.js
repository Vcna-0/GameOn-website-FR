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
const modalContent = document.querySelector(".content");

function isFilledDate(value) {

    const [year, month, day] = value.split("-").map(Number);
    const date = new Date(year, month - 1, day);

    return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day
    );
}

const validationRules = {
    string: {
        regex: /^[A-Za-zÀ-ÖØ-öø-ÿ-]{2,}$/,
        error: "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
    },
    email: {
        regex: /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)*\w[\w-]{0,66}\.[a-z]{2,6}$/i,
        error: "Veuillez indiquer un email valide"
    },
    date: {
        customValidation: isFilledDate,
        error: "Vous devez entrer votre date de naissance."
    },
    number: {
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

function setError(input, isError, errorMessage) {
    const parent = input.parentNode;
    parent.setAttribute("data-error-visible", isError);
    parent.setAttribute("data-error", isError ? errorMessage : "");
}

function handleValidate(event) {
    event.preventDefault();
    let isFormValid = true;

    formElements.forEach(input => {
       
        const rule = validationRules[input.dataset.type];
        if (rule) {
            const isValid = rule.customValidation ? rule.customValidation(input.value) : rule.regex.test(input.value);
            setError(input, !isValid, rule.error);

            if (!isValid) {
                isFormValid = false;
            }
        } 
    });
    
    if (isFormValid) {
        showConfirmationModal();
    }
}

formElement.addEventListener("submit", handleValidate);