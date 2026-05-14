let form = document.getElementById("form");

let nameInput = document.getElementById("name");

let emailInput = document.getElementById("email");

let passwordInput = document.getElementById("password");

let submitBtn = document.getElementById("submit");

let successMsg = document.getElementById("successMsg");

let strength = document.getElementById("strength");



function validateForm() {

    let valid = true;



    /* NAME VALIDATION */

    if (nameInput.value.trim() === "") {

        document.getElementById("nameError").innerHTML = "";

        valid = false;

    }

    else {

        document.getElementById("nameError").innerHTML = "";

    }



    /* EMAIL VALIDATION */

    let emailPattern =
        /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (emailInput.value.trim() === "") {

        document.getElementById("emailError").innerHTML = "";

        valid = false;

    }

    else if (!emailInput.value.match(emailPattern)) {

        document.getElementById("emailError").innerHTML =
            "Enter valid email";

        valid = false;

    }

    else {

        document.getElementById("emailError").innerHTML = "";

    }



    /* PASSWORD VALIDATION */

    let strongPattern =
        /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;

    if (passwordInput.value.length === 0) {

        document.getElementById("passwordError").innerHTML = "";

        strength.innerHTML = "";

        valid = false;

    }

    else if (passwordInput.value.length < 6) {

        document.getElementById("passwordError").innerHTML =
            "Password must be minimum 6 characters";

        strength.innerHTML =
            "Weak Password ❌";

        strength.style.color = "red";

        valid = false;

    }

    else if (!passwordInput.value.match(strongPattern)) {

        document.getElementById("passwordError").innerHTML =
            "Add uppercase, number & symbol";

        strength.innerHTML =
            "Medium Password ⚠️";

        strength.style.color = "orange";

        valid = false;

    }

    else {

        document.getElementById("passwordError").innerHTML = "";

        strength.innerHTML =
            "Strong Password ✅";

        strength.style.color = "#7dff7d";

    }



    /* ENABLE / DISABLE BUTTON */

    submitBtn.disabled = !valid;

}



/* LIVE VALIDATION */

nameInput.addEventListener("input", validateForm);

emailInput.addEventListener("input", validateForm);

passwordInput.addEventListener("input", validateForm);



/* FORM SUBMIT */

form.addEventListener("submit", function (event) {

    event.preventDefault();

    successMsg.style.display = "block";

});



/* SHOW PASSWORD */

function togglePassword() {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

    }

    else {

        passwordInput.type = "password";

    }

}