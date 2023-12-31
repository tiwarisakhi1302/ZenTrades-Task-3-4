function validateForm(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password-field').value;

    console.log(username);

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?!.*[^A-Za-z\d@]).*$/;

    if (!emailRegex.test(username)) {
        alert('Please enter a valid email address in the username field.');
        return false;
    }

    if (!passwordRegex.test(password)) {
        alert('Password must contain an uppercase letter, a number, and only allow @ as a special character.');
        return false;
    }

    window.location.href = 'next-page.html';

    return false;
}