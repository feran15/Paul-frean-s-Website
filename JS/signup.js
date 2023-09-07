// Form Blur Event LIstener


// Authentication

document.getElementById('first').addEventListener('blur',
    validatefirst)
document.getElementById('last').addEventListener('blur',
    validatelast)
document.getElementById('use').addEventListener('blur',
    validateuse)
    document.getElementById('email').addEventListener('blur',
    validateemail)
// document.getElementById('age').addEventListener('blur',
//     validateage)
document.getElementById('pass').addEventListener('blur',
    validatepass)
document.getElementById('checked').addEventListener('blur',
    validatechecked)
let ui;
// First Name Validation
function validatefirst() {
    const first = document.getElementById('first');
    const re = /^[a-zA-z]{2,10}$/
    if (!re.test(first.value)) {
        first.classList.add('is-invalid')
    } else {
        first.classList.remove('is-invalid')
    }
}
// Last Name Validation
function validatelast() {
    const last = document.getElementById('last');
    const re = /^[a-zA-z]{2,10}$/

    if (!re.test(last.value)) {
        last.classList.add('is-invalid')
    } else {
        last.classList.remove('is-invalid')
    }
}
// User Name Validation
function validateuse() {
    const use = document.getElementById('use');
    const re = /^[a-zA-z1-5]{2,15}$/

    if (!re.test(use.value)) {
        use.classList.add('is-invalid')
    } else {
        use.classList.remove('is-invalid')
    }
}
// Email Address Validation
function validateemail() {
    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/
    if (!re.test(email.value)) {
        email.classList.add('is-invalid')
        //  document.body.style.backgroundColor = "green"

    } else {
        email.classList.remove('is-invalid')
        // document.body.style.borderColor = "red"
    }

}
// Age Validation

function validatechecked(params) {

}
// Password Validation
function validatepass() {
    const passwordInput = document.getElementById('pass');
    const passwordStrengthMessage = document.getElementById('password-strength-message');

    function validatePassword() {
        const password = passwordInput.value;

        const hasLowerCase = /[a-z]/.test(password);
        const hasUpperCase = /[A-Z]/.test(password);
        const hasDigit = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*]/.test(password);
        const isLengthValid = password.length >= 8;

        const isValidPassword = hasLowerCase && hasUpperCase && hasDigit && hasSpecialChar && isLengthValid;

        //      if (!isValidPassword) {
        //          passwordStrengthMessage.textContent = "Password must have at least 8 characters, including at least one lowercase letter, one uppercase letter, one digit, and one special character.";
        //          document.body.style.display = "inline"
        //      } else {
        //          passwordStrengthMessage.textContent = "";
        //      }
        //  }

        passwordInput.addEventListener('input', validatePassword);
    }


    const buttoninput = document.querySelector('#button')
    loadEventListeners();

    // Load all Event Listeners
    function loadEventListeners() {
        // Add task event
        buttoninput.addEventListener('submit', button);

    }
}

// Checkbox Validation


var localStorage;
   let obj;
const firstinput = document.querySelector('#first')
const lastinput = document.querySelector('#last')
const useinput = document.querySelector('#use')
const emailinput = document.querySelector('#email')
const ageinput = document.querySelector('#age')
const passinput = document.querySelector('#pass')
const checkedinput = document.querySelector('#checked')
function handleSubmit() {
    if (firstinput.value === '' || lastinput.value === '' || useinput.value === '' || emailinput.value === '' || ageinput.value === '' || passinput.value === '' || checkedinput.value === '') {
        alert('Pls fill in all fields')
        //  document.body.style.backgroundColor = "blue"
        //  alert('pls check the box to continue')
    } else {
        alert('You have been Signed in')
        let info = JSON.parse(localStorage.getItem('info'))
        if (info === null) { // Checks if user list has been createdx
            createUserList();
        }
        info.push(
            {
                FirstName: firstinput.value,
                LastName: lastinput.value,
                UserName: useinput.value,
                EmailAddress: emailinput.value,
                Age : ageinput.value,
                password: passinput.value   
            }
            )
        console.log(info)
      localStorage.setItem( 'info', JSON.stringify(info))
    }
}

//Creates userlist if it has not been created
function createUserList() {
    let info = []
    localStorage.setItem( 'info', JSON.stringify(info))
}
