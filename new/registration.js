document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  // Basic patterns
  const namePattern = /^[A-Za-z\s]+$/;
  const emailPattern = /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/;
  const phonePattern = /^[6-9]\d{9}$/;
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_=+\-]).{8,}$/;

  // Error message collector
  let errorMessages = [];

  if (!namePattern.test(name)) {
    errorMessages.push("Name should contain only letters and spaces.");
  }

  if (!emailPattern.test(email)) {
    errorMessages.push("Enter a valid email (e.g., example@domain.com).");
  }

  if (!phonePattern.test(phone)) {
    errorMessages.push("Enter a valid 10-digit phone number starting with 6-9.");
  }

  if (!passwordPattern.test(password)) {
    errorMessages.push("Password must be at least 8 characters and include an uppercase letter, lowercase letter, number, and symbol.");
  }

  if (password !== confirmPassword) {
    errorMessages.push("Passwords do not match.");
  }

  if (errorMessages.length > 0) {
    alert("Please fix the following errors:\n\n" + errorMessages.join("\n"));
    return;
  }

  alert("Registration successful!");
  document.getElementById("registerForm").reset();
  localStorage.setItem("user", JSON.stringify({ name, email, phone, password }));

});
