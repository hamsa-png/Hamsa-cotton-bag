function registerUser(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Registration successful!");

    window.location.href = "login.html";
}


function loginUser(event) {

    event.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let savedEmail = localStorage.getItem("userEmail");
    let savedPassword = localStorage.getItem("userPassword");

    if (email === savedEmail && password === savedPassword) {

        localStorage.setItem("loggedIn", "true");

        alert("Login successful!");

        window.location.href = "dashboard.html";

    } else {

        alert("Invalid email or password!");

    }
}


function adminLogin(event) {

    event.preventDefault();

    let username =
        document.getElementById("adminUsername").value;

    let password =
        document.getElementById("adminPassword").value;

    /*
       Demo credentials only.
       Change these before using the site publicly.
    */

    if (username === "admin" && password === "admin123") {

        alert("Admin Login Successful!");

        window.location.href = "index.html";

    } else {

        alert("Invalid Admin Username or Password!");

    }
}


function logout() {

    localStorage.removeItem("loggedIn");

    alert("You have been logged out.");

    window.location.href = "index.html";
}


function sendMessage(event) {

    event.preventDefault();

    alert("Thank you! Your message has been submitted.");

}