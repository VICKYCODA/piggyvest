function signIn() {
    // alert("Sign in button clicked!");
    window.location.href = "https://accounts.google.com/signin";
    // Add your sign-in functionality here
}

function createAccount() {
    // Redirect to Google's account creation page
    window.location.href = "https://accounts.google.com/signup";
}

document.addEventListener("DOMContentLoaded", function () {
    // Selecting the sign-in button and adding an event listener
    const signInButton = document.querySelector(".cols2");
    signInButton.addEventListener("click", signIn);

    const createAccountButton = document.querySelector(".cols3");
    createAccountButton.addEventListener("click", createAccount);
});