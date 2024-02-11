// nav bar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
// navbar fixed top
//    onscroll = function() { scrollFunction() };

//     function scrollFunction() {
//       var navbar = document.getElementById("navbar");

//       if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         navbar.classList.add("fixed");
//       } else {
//         navbar.classList.remove("fixed");
//       }
//     }
// form
function printError(elemId, hintMsg) {
    var errorDiv = document.getElementById(elemId);
    errorDiv.innerHTML = hintMsg;
    // Show or hide the error message div based on the presence of hintMsg
    errorDiv.style.display = hintMsg ? 'block' : 'none';
}

function validateForm() {

    var name = document.getElementById('inputName').value;
    var email = document.getElementById('inputEmail').value;
    var mobile = document.getElementById('inputPhone').value;
    var country = document.getElementById('inputState').value;
    var city = document.getElementById('inputCity').value;
    var address = document.getElementById('inputAddress').value;
    var delivery = document.getElementById('inputDelivery').value;
    var height = document.getElementById('inputHeight').value;
    var weight = document.getElementById('inputWeight').value;
    var length = document.getElementById('inputLength').value;
    var width = document.getElementById('inputWidth').value;
    var nameErr = emailErr = mobileErr = countryErr = cityErr= addressErr = deliveryErr=heightErr=weightErr= lengthErr=widthErr= false;
    

    // Name validation
    if (name == "") {
        printError("nameErr", "Please enter your name");
        nameErr = true;
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
            nameErr = true;
        } else {
            printError("nameErr", "");
        }
    }

    // Email validation
    if (email == "") {
        printError("emailErr", "Please enter your email address");
        emailErr = true;
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
            emailErr = true;
        } else {
            printError("emailErr", "");
        }
    }

    // Mobile validation
    if (mobile == "") {
        printError("phoneErr", "Please enter your mobile number");
        mobileErr = true;
    } else {
        var regex = /^[1-9]\d{9}$/;
        if (regex.test(mobile) === false) {
            printError("phoneErr", "Please enter a valid 10 digit mobile number");
            mobileErr = true;
        } else {
            printError("phoneErr", "");
        }
    }

    // Country validation
    if (country == "") {
        printError("countryErr", "Please select your Flight");
        countryErr = true;
    } else {
        printError("countryErr", "");
    }
    // city validiation
    if (city == "") {
        printError("cityErr", "Please enter your city");
        cityErr = true;
    } else {
        printError("cityErr", "");
    }
    // address validiation
    if (address == "") {
        printError("addressErr", "Please enter your address");
        addressErr = true;
    } else {
        printError("addressErr", "");
    }
    // delivery validiation
    if (delivery == "") {
        printError("deliveryErr", "Please select  your delivery");
        deliveryErr = true;
    } else {
        printError("addressErr", "" );
    }
    // height validiation
    if (height == "") {
        printError("heightErr", "Please enter your height");
        mobileErr = true;
    } else {
        var regex = /^\d+(\.\d+)?$/;
        if (regex.test(height) === false) {
            printError("heightErr", "Please enter a valid height value");
            heightErr = true;
        } else {
            printError("heightErr", "");
        }
    }
    // weight validiation
    if (weight == "") {
        printError("weightErr", "Please enter your weight");
        weightErr = true;
    } else {
        var regex = /^\d+(\.\d+)?$/;
        if (regex.test(weight) === false) {
            printError("weightErr", "Please enter a valid weight value");
            weightErr = true;
        } else {
            printError("weightErr", "");
        }
    }
    // length validiation
    if (length == "") {
        printError("lengthErr", "Please enter your length");
        lengthErr = true;
    } else {
        var regex = /^\d+(\.\d+)?$/;
        if (regex.test(length) === false) {
            printError("lengthErr", "Please enter a valid length value");
            lengthErr = true;
        } else {
            printError("lengthErr", "");
        }
    }
    // width validation
    if (width == "") {
        printError("widthErr", "Please enter your length");
        widthErr = true;
    } else {
        var regex = /^\d+(\.\d+)?$/;
        if (regex.test(width) === false) {
            printError("widthErr", "Please enter a valid width value");
            widthErr = true;
        } else {
            printError("widthErr", "");
        }
    }
// 
// form validation
function process(v) {
    var Adult = parseInt(document.getElementById("ddlAdult").value);
    var Child = parseInt(document.getElementById("ddlChild").value);
    var Infant = parseInt(document.getElementById("ddlInfant").value);
    Adult += v;
    var total = Adult + Child;
    if (total <= 9 && Adult >= 1) {
        document.getElementById("ddlAdult").value = Adult;
        if (Infant > Adult) {
            document.getElementById("ddlInfant").value = Adult;
        }
        var TotTravelers = Adult + Child + Infant;
        document.getElementById("txtTotalTravelers").value = (TotTravelers + " passenger");
    }
}


function process2(s) {
    var Adult = parseInt(document.getElementById("ddlAdult").value);
    var Child = parseInt(document.getElementById("ddlChild").value);
    var Infant = parseInt(document.getElementById("ddlInfant").value);
    Child += s;
    var total = Adult + Child;
    if (total <= 9 && Child >= 0) {
        document.getElementById("ddlChild").value = Child;
        var TotTravelers = Adult + Child + Infant;
        document.getElementById("txtTotalTravelers").value = (TotTravelers + " passenger");
    }
}


function process3(sh) {
    var Adult = parseInt(document.getElementById("ddlAdult").value);
    var Infant = parseInt(document.getElementById("ddlInfant").value);
    var Child = parseInt(document.getElementById("ddlChild").value);
    Infant += sh;
    if (Infant <= Adult && Infant >= 0) {
        document.getElementById("ddlInfant").value = Infant;
        var TotTravelers = Adult + Child + Infant;
        document.getElementById("txtTotalTravelers").value = (TotTravelers + " passenger");
    }
}

// track and trace







// 

    // Prevent the form from being submitted if there are any errors
    if (nameErr || emailErr || mobileErr || countryErr||cityErr||addressErr||deliveryErr||heightErr||weightErr||widthErr||lengthErr) {
        return false;
    } else {
        return true;
    }
};
// 
// when we click on hamburger icon its close 

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
// 