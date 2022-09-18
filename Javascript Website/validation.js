let formElement = document.getElementById("registration");

formElement.addEventListener("submit", function (y) {
  y.preventDefault();

  let errors = {};
  let form = y.target;

  //username
  let username = document.getElementById("username").value;
  if (username.length < 5 && username == "") {
    errors.usernameValue =
      "Username value is empty or not more than 5 characters";
  }

  //password
  let password = document.getElementById("passw").value;
  let password2 = document.getElementById("passw2").value;

  if (password.length < 5 && password == "") {
    errors.password = "Password value must be more than 5 symbols";
  }

  if (password != password2) {
    errors.password2 = "Passwords do not match";
  }

  //checkbox
  let agree = document.getElementById("agree").checked;
  if (!agree) {
    errors.agree = "You have to agree to our conditions";
  }

  //radio
  let gender = false;

  form.querySelectorAll('[name = "gender"]').forEach((item) => {
    if (item.checked) {
      gender = true;
    }
  });

  if (!gender) {
    errors.gender = "Please Select Your Gender";
  }

  console.log(errors);

  form.querySelectorAll(".error-text").forEach((element) => {
    element.innerHTML = "";
  });

  for (let item in errors) {
    console.log(item); //username // gender // agree //password2

    let TextError = document.getElementById("error_" + item);

    // div id="error_usernameValue"
    // div id="error_password2" - Passwords do not match'

    if (TextError) {
      TextError.textContent = errors[item];
    }
  }

  if (Object.keys(errors).length == 0) {
    form.submit();
  }
});

function validationEmail() {
  let email = document.getElementById("email").value;

  let emailStructure =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email.match(emailStructure)) {
    form.classList.add("valid");
    errorText.innerHTML = "Your Email is Valid";
    errorText.style.color = "green";
  } else {
    form.classList.remove("valid");
    form.classList.add("invalid");
    errorText.innerHTML = "Your Email is Invalid";
    errorText.style.color = "red";
  }

  if (email == "") {
    form.classList.remove("valid");
    form.classList.add("invalid");
    errorText.innerHTML = "Enter Your Email";
    errorText.style.color = "blue";
  }
}

let passwordShow = document.getElementById("passw");
let icon = document.getElementById("toggleIcon");

icon.addEventListener("click", function () {
  if (passwordShow.type == "password") {
    passwordShow.setAttribute("type", "text");
    icon.classList.add("fa-eye-slash");
  } else {
    icon.classList.remove("fa-eye-slash");
    passwordShow.setAttribute("type", "password");
  }
});

//LOCALSTORAGE

let countvisit = localStorage.getItem("counter");

let NewValue;

if (!countvisit) {
  NewValue = 1;
} else {
  NewValue = parseInt(countvisit) + 1;
}

localStorage.setItem("counter", NewValue);

document.getElementById("visit_counter").textContent =
  localStorage.getItem("counter");
