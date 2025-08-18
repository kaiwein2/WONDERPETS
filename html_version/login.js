window.onload = function() {
    document.getElementById('login-signup-container').style.display = 'none';
};

function showLogin() {
    document.getElementById('main-container').style.display = 'none';
    const container = document.getElementById('login-signup-container');
    container.style.display = 'flex';
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('signup-form').classList.add('hidden');
}

function showSignup() {
    document.getElementById('main-container').style.display = 'none';
    const container = document.getElementById('login-signup-container');
    container.style.display = 'flex';
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('signup-form').classList.remove('hidden');
}

function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        if (remember) {
            localStorage.setItem('rememberMe', 'true');
        } else {
            localStorage.removeItem('rememberMe');
        }
        alert(`Welcome back, ${username}!`);
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password!');
    }
}

function signup(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    if (newUsername.length < 3 || newPassword.length < 3) {
        alert('Username and Password must be at least 3 characters long!');
        return;
    }

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('username', newUsername);
    localStorage.setItem('password', newPassword);

    alert('Account created successfully! You can now log in.');
    showLogin();
}

function forgotPassword() {
    const email = prompt('Please enter your registered email:');
    if (email === localStorage.getItem('email')) {
        alert('Password reset link sent to your email!');
    } else {
        alert('Email not found. Please try again.');
    }
}
