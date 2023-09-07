document.getElementById('email').addEventListener('blur',
    validateemail)
    // document.getElementById('pass').addEventListener('blur',
    // validatepass)
    const emailinput = document.querySelector('#email')
    const passinput = document.querySelector('#pass')
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
// PASSWORD VALIDATON
    function validatepass(params) {
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
    }
}   
// LOG IN
    function login() {
            if (emailinput.value === '' || passinput.value === '') {
                alert('pls fill in the fields')
            } else {
                alert('You have been logged in')
                let info = [
                    {
                        EmailAddress : emailinput.value,
                        Password: passinput.value
                    }
                ]
                console.log(info)
            }
    }