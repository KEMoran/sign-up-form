const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const tel = document.getElementById("tel");

form.addEventListener("submit", (e) => {

    //Check name isn't null
    if (fname.value === "" || fname.value === null) {
        document.getElementById("fnameError").innerText = "* Please enter your first name";
    }

    //Check last name isn't null
    if (lname.value === "" || lname.value === null) {
        document.getElementById("lnameError").innerText = "* Please enter your last name";
    }

    //Check email isn't null
    if (email.value === "" || email.value === null) {
        document.getElementById("emailError").innerText = "* Please enter a valid email address";
    }

    //Check number isn't null
    if (tel.value < 9) {
        document.getElementById("telError").innerText = "* Please enter your phone number";
    }

    //Check to see if passwords match

});