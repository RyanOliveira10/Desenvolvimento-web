const signUp = document.getElementById('btn2');
const login = document.getElementById('btn1');
const getStarted = document.getElementById('btnMain');
const service = document.getElementById('btnService');
const closed = document.getElementById('btn3');

const home = document.getElementById('content');
const servicos = document.getElementById('secondContent');

getStarted.addEventListener("click", () => {
    home.classList.remove('content')
    home.classList.add('removeContent');
    servicos.classList.remove('removeSecondContent');
    servicos.classList.add('secondContent');
});

service.addEventListener("click", () => {
    home.classList.remove('removeContent');
    home.classList.add('content');
    servicos.classList.remove('secondContent');
    servicos.classList.add('removeSecondContent');
})


//configuração do menu responsivo

const btnMobile = document.getElementById('btnMobile');

function toggleMenu() {
    const aside = document.getElementById('aside');
    aside.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);

//efeito scroll reveall

window.sr = ScrollReveal({ reset: true });

sr.reveal('#effect1', {
    rotate: {x: 0, y:80 , z: 0},
    duration: 1000
});

sr.reveal('#effect2', {
    rotate: {x: 80, y:0 , z: 0},
    duration: 1000
});

sr.reveal('#effect', {
    rotate: {x: 0, y:0 , z: 80},
    duration: 1000
})

sr.reveal('#effectImg', {
    opacity: 0,
    duration: 1000
})