const btn2  = document.getElementById('btn2');
const btnEye = document.getElementById('eye');

const login = () => {
    window.alert('login efetuado com sucesso!');
}

function showPassword() {

    let input = document.querySelector('#pass');

    if (input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    }
};

btn2.addEventListener('click', login);
btnEye.addEventListener('click', showPassword);