const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lampada = document.getElementById('lampada');
const trocar = document.getElementById('trocar');
const btns = document.getElementById('btns');
const trocarLampada = document.getElementById('trocarLampada');
const text = document.querySelector("h1");

turnOn.addEventListener('click', lampadaOn);
turnOff.addEventListener('click', lampadaOff);
lampada.addEventListener('click', lampadaQuebrada);
trocarLampada.addEventListener('click', lampadaTrocada);

function lampadaOn() {
    lampada.src = './img/ligada.jpg';
    text.innerHTML = "lâmpada<br> ligada"
}

function lampadaOff() {
    lampada.src = './img/desligada.jpg';
    text.innerHTML = "lâmpada<br> desligada"
}

function lampadaQuebrada() {
    lampada.src = './img/quebrada.jpg';
    trocar.classList.remove('active');
    btns.classList.add('btns');
    text.innerHTML = "lâmpada<br> quebrada"
}

function lampadaTrocada() {
    lampada.src = './img/desligada.jpg';
    trocar.classList.add('active');
    btns.classList.remove('btns');
    text.innerHTML = "lâmpada<br> desligada"
}