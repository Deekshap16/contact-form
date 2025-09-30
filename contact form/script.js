document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let valid = true;
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  const errorElements = document.querySelectorAll(".error");
  errorElements.forEach(el => el.textContent = ""); // Clear old errors
  document.getElementById("successMessage").textContent = ""; // Clear success

  // Validate Name
  if (name.value.trim() === "") {
    setError(name, "Name is required");
    valid = false;
  }

  // Validate Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === "") {
    setError(email, "Email is required");
    valid = false;
  } else if (!emailPattern.test(email.value.trim())) {
    setError(email, "Invalid email format");
    valid = false;
  }

  // Validate Message
  if (message.value.trim() === "") {
    setError(message, "Message cannot be empty");
    valid = false;
  }

  // If valid, show details
  if (valid) {
    document.getElementById("successMessage").innerHTML = `
      ✅ Form submitted successfully! <br>
      <strong>Name:</strong> ${name.value.trim()} <br>
      <strong>Email:</strong> ${email.value.trim()} <br>
      <strong>Message:</strong> ${message.value.trim()}
    `;

    // Log details in console (for debugging)
    console.log("Name:", name.value.trim());
    console.log("Email:", email.value.trim());
    console.log("Message:", message.value.trim());

    // Clear fields
    name.value = "";
    email.value = "";
    message.value = "";
  }
});

// Helper function to set error
function setError(inputElement, message) {
  inputElement.nextElementSibling.textContent = message;
}
