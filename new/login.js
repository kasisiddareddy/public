document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("errorMsg");

    if (email === "" || password === "") {
        errorMsg.textContent = "Both fields are required.";
        errorMsg.style.display = "block";
        return;
    }

    if (
        (email === "kasisiddareddy@gmail.com" && password === "1234") ||
        (email === "sampath@gmail.com" && password === "1234")
    ) {
        localStorage.setItem("loggedInUser", email); 
        alert("Login successful!");
        window.location.href = "raw.html";
    } else {
        errorMsg.textContent = "Invalid email or password.";
        errorMsg.style.display = "block";
    }
});
