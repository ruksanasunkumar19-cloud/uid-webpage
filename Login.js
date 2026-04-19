const signInLink = document.getElementById('signInLink');
const passwordInput = document.getElementById('password');
const errorDisplay = document.getElementById('error-msg');

signInLink.addEventListener('click', function(e) {
    const password = passwordInput.value;

    // Requirement: 8 characters, 1 symbol, 1 number, and 1 uppercase
    const strongRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

    if (strongRegex.test(password)) {
        // SUCCESS: The password is strong.
        // We do NOT call e.preventDefault(), so the HTML link works.
        console.log("Password accepted. Loading travel.html...");
    } else {
        // FAIL: Stop the link from opening
        e.preventDefault(); 
        errorDisplay.textContent = "Not strong enough, sorry.";
        errorDisplay.style.display = 'block';
        passwordInput.style.border = "1px solid #ffb3b3";
    }
});

// Toggle eye icon for password visibility
document.getElementById('togglePassword').addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});