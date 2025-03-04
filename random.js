// Reference the password field
var passwordField = document.getElementById("password");

// Function to generate a password
function genPassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var password = "";
    for (var i = 0; i < passwordLength; i++) { // Fixed loop range
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.charAt(randomNumber); // Simplified string indexing
    }
    passwordField.value = password; // Updated to use the defined variable
}

// Function to copy the password
function copyPassword() {
    if (passwordField.value !== "") { // Ensure there is text to copy
        navigator.clipboard.writeText(passwordField.value)
            .then(() => {
                alert("Password copied to clipboard!");
            })
            .catch(err => {
                console.error("Failed to copy password:", err);
            });
    } else {
        alert("No password to copy!");
    }
}

// Add event listeners for buttons
document.querySelector(".btn button:nth-child(1)").addEventListener("click", genPassword); // Generate button
document.querySelector(".btn button:nth-child(2)").addEventListener("click", copyPassword); // Copy button
