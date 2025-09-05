const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Add a click event listener to the button
themeToggleButton.addEventListener('click', () => {
    // Toggle the 'dark-mode' class on the body
    body.classList.toggle('dark-mode');

    // Update the button text based on the current mode
    if (body.classList.contains('dark-mode')) {
        themeToggleButton.textContent = 'Toggle Light Mode';
    } else {
        themeToggleButton.textContent = 'Toggle Dark Mode';
    }
});


const faqQuestions = document.querySelectorAll('.faq-question');

// Loop through each question and add a click event listener
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        // Get the next sibling element, which is the answer div
        const answer = question.nextElementSibling;
        
        // Toggle the 'active' class on the answer to show/hide it
        answer.classList.toggle('active');
    });
});


// Get references to the form and all input fields
const form = document.getElementById('registration-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const formSuccessMessage = document.getElementById('form-success');

// Add a submit event listener to the form
form.addEventListener('submit', (event) => {
    // Prevent the default form submission (page reload)
    event.preventDefault();

    // Reset all error messages before validating
    clearErrorMessages();

    // Perform validation and get the result
    const isValid = validateForm();

    // If the form is valid, show a success message
    if (isValid) {
        formSuccessMessage.textContent = 'Form submitted successfully!';
        form.reset(); // Clear the form fields
    } else {
        // If not valid, clear any previous success message
        formSuccessMessage.textContent = '';
    }
});

/**
 * Validates all form fields and returns true if all are valid,
 * otherwise false. Displays error messages for invalid fields.
 */
function validateForm() {
    let isValid = true;

    // Validate Name
    if (nameInput.value.trim() === '') {
        displayError('name-error', 'Name is required.');
        isValid = false;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === '') {
        displayError('email-error', 'Email is required.');
        isValid = false;
    } else if (!emailPattern.test(emailInput.value)) {
        displayError('email-error', 'Please enter a valid email address.');
        isValid = false;
    }

    // Validate Password
    if (passwordInput.value.trim().length < 8) {
        displayError('password-error', 'Password must be at least 8 characters long.');
        isValid = false;
    }

    // Validate Confirm Password
    if (confirmPasswordInput.value !== passwordInput.value) {
        displayError('confirm-password-error', 'Passwords do not match.');
        isValid = false;
    }

    return isValid;
}

/**
 * Finds an element by its ID and sets its text content to the
 * specified error message.
 * @param {string} elementId - The ID of the error message span.
 * @param {string} message - The error message to display.
 */
function displayError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
    }
}

/**
 * Clears the text content of all error message spans.
 */
function clearErrorMessages() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => {
        error.textContent = '';
    });
}