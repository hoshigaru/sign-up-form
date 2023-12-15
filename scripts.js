let password = document.getElementById('password');
let pwdConfirm = document.getElementById('pwdconfirm');

const submitBtn = document.querySelector('button');

const errorMsg = document.createElement('span');
errorMsg.textContent = "*Passwords must match.";
errorMsg.style.color = "red";

const passwordDiv = document.getElementById('top-right');

function passwordCheck() {
    if (password.value != pwdConfirm.value) {
        submitBtn.disabled = true;
        passwordDiv.append(errorMsg);
        password.style.border = "1px solid red";
        pwdConfirm.style.border = "1px solid red";
    }
    else if (password.value === pwdConfirm.value) {
        submitBtn.disabled = false;
        errorMsg.remove();
    }
}