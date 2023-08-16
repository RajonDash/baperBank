

document.getElementById("login-btn").addEventListener('click', function () {

    const userEmail = document.getElementById('user-email').value;
    const userPassword = document.getElementById('user-password').value;

    if (userEmail == 'rajondas@gmail.com' && userPassword=='rajon') {
        window.location.href = 'bank.html'
        
    } else {
        alert("Wrong password and email");
    }


});