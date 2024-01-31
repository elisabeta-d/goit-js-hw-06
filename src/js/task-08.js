const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputs = document.querySelector(".login-form").elements;
  const emailInput = inputs[0];
  const passwordInput = inputs[1];

  if (emailInput.value === "" || passwordInput.value === "") {
    alert("All fields must be filled in!");
  } else {
    const dataForm = {
      email: emailInput.value,
      password: passwordInput.value,
    };
    
    alert("The form has been submitted succsesfully!");
    loginForm.reset();
  }
});
