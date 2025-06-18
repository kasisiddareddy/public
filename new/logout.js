 document.addEventListener("DOMContentLoaded", function () {
    const loginLogoutBtn = document.getElementById("loginLogoutBtn");
    const isLoggedIn = localStorage.getItem("loggedInUser");

    if (isLoggedIn) {
      loginLogoutBtn.innerHTML = '<i class="fa-solid fa-arrow-right-from-bracket"></i> Logout';
      loginLogoutBtn.addEventListener("click", function () {
        localStorage.removeItem("loggedInUser");
        alert("You have been logged out.");
        window.location.href = "login.html";
      });
    } else {
      loginLogoutBtn.innerHTML = '<i class="fa-solid fa-arrow-right-to-bracket"></i> Login';
      loginLogoutBtn.setAttribute("href", "login.html");
    }
  });