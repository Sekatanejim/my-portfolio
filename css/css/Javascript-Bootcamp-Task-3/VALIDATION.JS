// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('signupForm');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const termsCheckbox = document.getElementById('terms');
    
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const termsError = document.getElementById('termsError');
    
    const resendBtn = document.getElementById('resendBtn');
    let countdownInterval = null;
    
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    
    function removeRedBorder(inputElement) {
        inputElement.style.border = '';
        inputElement.style.borderColor = '';
    }
    
    
    function addRedBorder(inputElement) {
        inputElement.style.border = '2px solid #e74c3c';
    }
    
    
    function validateForm() {
        let isValid = true;
        
        
        usernameError.textContent = '';
        emailError.textContent = '';
        passwordError.textContent = '';
        termsError.textContent = '';
        removeRedBorder(usernameInput);
        removeRedBorder(emailInput);
        removeRedBorder(passwordInput);
        
        // 1. Validate Username (not empty)
        const username = usernameInput.value.trim();
        if (username === '') {
            usernameError.textContent = 'Username is required';
            addRedBorder(usernameInput);
            isValid = false;
        }
        
        // 2. Validate Email (not empty and matches pattern)
        const email = emailInput.value.trim();
        if (email === '') {
            emailError.textContent = 'Email is required';
            addRedBorder(emailInput);
            isValid = false;
        } else if (!emailPattern.test(email)) {
            emailError.textContent = 'Please enter a valid email address (e.g., name@example.com)';
            addRedBorder(emailInput);
            isValid = false;
        }
        
        // 3. Validate Password (minimum 8 characters)
        const password = passwordInput.value;
        if (password === '') {
            passwordError.textContent = 'Password is required';
            addRedBorder(passwordInput);
            isValid = false;
        } else if (password.length < 8) {
            passwordError.textContent = 'Password must be at least 8 characters long';
            addRedBorder(passwordInput);
            isValid = false;
        }
        
    
        if (!termsCheckbox.checked) {
            termsError.textContent = 'You must agree to the Terms and Conditions';
            isValid = false;
        }
        
        return isValid;
    }
    
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        if (validateForm()) {
            
            const successDiv = document.createElement('div');
            successDiv.className = 'success-msg';
            successDiv.textContent = 'Signup successful! Welcome aboard!';
            
            
            const existingMsg = document.querySelector('.success-msg');
            if (existingMsg) existingMsg.remove();
            
            form.parentNode.insertBefore(successDiv, form.nextSibling);
            
            
            setTimeout(() => {
                successDiv.remove();
            }, 5000);
            
            
        }
    });
    
    
    usernameInput.addEventListener('input', function() {
        if (this.value.trim() !== '') {
            usernameError.textContent = '';
            removeRedBorder(this);
        }
    });
    
    emailInput.addEventListener('input', function() {
        const email = this.value.trim();
        if (email !== '' && emailPattern.test(email)) {
            emailError.textContent = '';
            removeRedBorder(this);
        }
    });
    
    passwordInput.addEventListener('input', function() {
        if (this.value.length >= 8) {
            passwordError.textContent = '';
            removeRedBorder(this);
        } else if (this.value.length > 0) {
            passwordError.textContent = 'Need at least 8 characters';
            addRedBorder(this);
        } else {
            passwordError.textContent = '';
            removeRedBorder(this);
        }
    });
    
    termsCheckbox.addEventListener('change', function() {
        if (this.checked) {
            termsError.textContent = '';
        }
    });
    

    let countdown = 10;
    
    function startCountdown() {
        resendBtn.disabled = true;
        countdown = 10;
        resendBtn.textContent = `Resend Verification (${countdown}s)`;
        
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }
        
        countdownInterval = setInterval(function() {
            countdown--;
            
            if (countdown >= 0) {
                resendBtn.textContent = `Resend Verification (${countdown}s)`;
            }
            
            if (countdown === 0) {
                // Once zero is reached, invoke clearInterval
                clearInterval(countdownInterval);
                // Strip disabled constraint
                resendBtn.disabled = false;
                resendBtn.textContent = 'Resend Verification';
            }
        }, 1000);
    }
    
    // Start initial countdown when page loads
    startCountdown();
    
    // Resend button click handler
    resendBtn.addEventListener('click', function() {
        const msgDiv = document.getElementById('verificationMsg');
        msgDiv.textContent = 'Verification email resent successfully!';
        msgDiv.style.color =#27ae60';
        
        setTimeout(() => {
            msgDiv.textContent = '';
        }, 3000);
        
        // Restart the countdown
        startCountdown();
    });
});
