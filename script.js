document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.querySelector(".login");
    loginButton.addEventListener("click", function() {
        
    });

    const signupButton = document.querySelector(".signup");
    signupButton.addEventListener("click", function() {
        
    });

    const languageButtons = document.querySelectorAll(".language-switcher button");
    languageButtons.forEach(button => {
        button.addEventListener("click", function() {
            const language = this.id === "en-btn" ? "en" : "hi";
            switchLanguage(language);
        });
    });

    function switchLanguage(language) {
        const elements = document.querySelectorAll("[data-en], [data-hi]");
        elements.forEach(element => {
            element.textContent = element.getAttribute(`data-${language}`);
        });
    }
});
