document.addEventListener("DOMContentLoaded", function() {
    /**
     * Variables
     */
    const signupButton = document.getElementById('signup-button');
    const loginButton = document.getElementById('login-button');
    const userForms = document.getElementById('user_options-forms');
    const signupForm = document.querySelector('.user_forms-signup .forms_form');
    const loginForm = document.querySelector('.user_forms-login .forms_form');

    /**
     * Add event listener to the "Sign Up" button
     */
    signupButton.addEventListener('click', () => {
        userForms.classList.remove('bounceRight');
        userForms.classList.add('bounceLeft');
    });

    /**
     * Add event listener to the "Login" button
     */
    loginButton.addEventListener('click', () => {
        userForms.classList.remove('bounceLeft');
        userForms.classList.add('bounceRight');
    });

    /**
     * Add event listener to the "Sign Up" form submission
     */
    signupForm.addEventListener('submit', (event) => {
        // Prevent the default form submission behavior
        event.preventDefault();
        // Redirect to the login page (assuming login.html is the login page)
        window.location.href = 'login.html';
    });

    /**
     * Add event listener to the "Login" form submission
     */
    loginForm.addEventListener('submit', (event) => {
        // Prevent the default form submission behavior
        event.preventDefault();
        // Redirect to the index page (assuming index.html is the index page)
        window.location.href = 'index.html';
    });
});

/**
 * Variables
 */
const signupButton = document.getElementById('signup-button');
const loginButton = document.getElementById('login-button');
const userForms = document.getElementById('user_options-forms');

/**
 * Add event listener to the "Sign Up" button
 */
signupButton.addEventListener('click', () => {
    userForms.classList.remove('bounceRight');
    userForms.classList.add('bounceLeft');
}, false);

/**
 * Add event listener to the "Login" button
 */
loginButton.addEventListener('click', () => {
    userForms.classList.remove('bounceLeft');
    userForms.classList.add('bounceRight');
}, false);
