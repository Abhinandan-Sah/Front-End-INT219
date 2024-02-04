const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

const name_error = document.getElementById('name_error');
const email_error = document.getElementById('email_error');
const password_error = document.getElementById('password_error');

form.addEventListener('submit', (e) => {
    var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(username.value=== '' || username.value===null){
        e.preventDefault(); //it will prevent the form from submitting

        name_error.innerHTML = "Name is required";
    }
    else{
        name_error.innerHTML = "";

    }

    if(!email.value.match(email_check)){
        e.preventDefault();
        email_error.innerHTML = "Valid Email is required";
    }
    else{
        email_error.innerHTML = "";

    }

    if(password.value.length < 6){
        e.preventDefault(); //it will prevent the form from submitting

        password_error.innerHTML = "Password must be more then 6";
    }
    else{
        password_error.innerHTML = "";
    }
    if(password.value.length > 20){
        e.preventDefault(); //it will prevent the form from submitting

        password_error.innerHTML = "Password cannot be more than 20 character";
    }
    if(password.value.length == 'password'){
        e.preventDefault(); //it will prevent the form from submitting
        password_error.innerHTML = "Password cannot password";
    }
});
