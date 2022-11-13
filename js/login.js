// LogIn
document.getElementById('login-submit').addEventListener('click',function(){
    const emailField = document.getElementById('user-email')
    console.log('Button clicked')
    const userEmail= emailField.value
    const passwordField = document.getElementById('user-password')
    const userPassword = passwordField.value
    if(userEmail == 'mahdee@gmail.com' && userPassword == '111333'){
        window.location.href = './banking.html'
    }
})

