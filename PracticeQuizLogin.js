document.addEventListener("DOMContentLoaded", function () {
    var loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        var usernameInput = document.getElementById("username").value;
        var passwordInput = document.getElementById("password").value;

        if (usernameInput.includes("@kiit.ac.in") && passwordInput.length > 0) {
            alert("Login successful! Welcome, " + usernameInput + "!");
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});
