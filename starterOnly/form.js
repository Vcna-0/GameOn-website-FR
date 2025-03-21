import { openModal } from './modal.js';
const formElement = document.querySelector("form[name='reserve']");
const formElements = document.querySelectorAll("form[name='reserve'] input");

// Verify if the date is filled and is a valid date
function isFilledDate(input) {
    const {value} = input;
    const [year, month, day] = value.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    const today = new Date();

    return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day &&
        date < today
    );
}

// Validation rules
const validationRules = {
    string: {
        regex: /^[A-Za-zÀ-ÖØ-öø-ÿ-]{2,}$/,
        error: "Veuillez entrer 2 caractères ou plus pour le champ du nom."
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
        customValidation: () => {
            const locationInputs = document.querySelectorAll("input[name='location']");
            return Array.from(locationInputs).some(input => input.checked);
        },
        error: "Vous devez choisir une option."
    },
    checkbox1: { 
        customValidation: (input) => input.checked,
        error: "Vous devez accepter les termes et conditions."
    }
};

// Set error message
function setError(input, isError, errorMessage) {
    const parent = input.parentNode;
    parent.setAttribute("data-error-visible", isError);
    parent.setAttribute("data-error", isError ? errorMessage : "");
}


// Validate input
function validateInput(input) {
    const rule = validationRules[input.dataset.type];
    if (!rule) {
        return true;
    }
    
    const isValid = rule.customValidation ? rule.customValidation(input) : rule.regex.test(input.value);
    setError(input, !isValid, rule.error);
    return isValid;
}


// Real-time validation
export function handleRealTimeValidation(event) {
    validateInput(event.target);
}

// Validate all form
export function handleValidate(event) {
    event.preventDefault();
    let isFormValid = true;

    formElements.forEach(input => {
        if (!validateInput(input)) {
            isFormValid = false;
        }
    });
    if (isFormValid) {
        openModal("modalSuccess");
    } 
}


// Event listeners
formElements.forEach(input => {
    input.addEventListener('input', handleRealTimeValidation);
});

formElement.addEventListener("submit", handleValidate);
