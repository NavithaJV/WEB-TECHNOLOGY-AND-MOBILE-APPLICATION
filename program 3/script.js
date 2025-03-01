function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const errorMessage = document.getElementById("error-message");

    
    errorMessage.textContent = "";

  
    if (!name || !email || !password || !confirmPassword) {
        errorMessage.textContent = "All fields are required!";
        return false;
    }

  
    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
        return false;
    }

    alert("Registration successful!");
    return true;
}
