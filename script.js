document.addEventListener("DOMContentLoaded", () => {
    const lengthInput = document.getElementById("length");
    const lowercaseCheckbox = document.getElementById("include-lowercase");
    const uppercaseCheckbox = document.getElementById("include-uppercase");
    const numbersCheckbox = document.getElementById("include-numbers");
    const symbolsCheckbox = document.getElementById("include-symbols");
    const generateButton = document.getElementById("generate");
    const resultDiv = document.getElementById("result");

    const generatePassword = (length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) => {
        const lowercase = "abcdefghijklmnopqrstuvwxyz";
        const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numbers = "0123456789";
        const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
        
        let characters = "";
        if (includeLowercase) characters += lowercase;
        if (includeUppercase) characters += uppercase;
        if (includeNumbers) characters += numbers;
        if (includeSymbols) characters += symbols;

        if (characters.length === 0) return ""; // No character types selected

        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }
        return password;
    };

    generateButton.addEventListener("click", () => {
        const length = parseInt(lengthInput.value, 10);
        const includeLowercase = lowercaseCheckbox.checked;
        const includeUppercase = uppercaseCheckbox.checked;
        const includeNumbers = numbersCheckbox.checked;
        const includeSymbols = symbolsCheckbox.checked;

        const password = generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
        resultDiv.textContent = password || "Please select at least one character type.";
    });
});
