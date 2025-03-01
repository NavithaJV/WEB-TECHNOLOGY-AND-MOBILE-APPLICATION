function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const errorMessage = document.getElementById("error-message");

    // Clear any previous error message
    errorMessage.textContent = "";

    // Check if all fields are filled
    if (!name || !email || !password || !confirmPassword) {
        errorMessage.textContent = "All fields are required!";
        return false;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
        return false;
    }

    // If everything is fine, the form will be submitted
    alert("Registration successful!");
    return true;
}
