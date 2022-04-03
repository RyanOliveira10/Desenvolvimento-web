const btn = document.getElementById('btn');
const btnEye = document.getElementById('eye1');
const btnEye2 = document.getElementById('eye2');

btn.addEventListener("click", submit);

function submit() {
    window.alert("cadastro efetuado com sucesso!");
};

function showPassword() {

    let input = document.querySelector('#pass');

    if (input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    }
};

function showPassword2() {
    let input = document.querySelector('#pass2');

    if (input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    }
}

btnEye.addEventListener('click', showPassword);
btnEye2.addEventListener('click', showPassword2);