const navbar = document.getElementById('navbar');
const fundoNavbar = document.getElementById('fundo-navopen');
const body = document.body;

const navbarButtons = document.querySelectorAll('.navbar-menu a');
const btnMenu = document.getElementById('btn-abrirmenu');
const btnFecharMenu = document.getElementById('closemenu-btn');

//Animação da navbar abrindo e fechando, e do fundo escuro sumindo ou aparecendo
const abrirFecharMenu = () => {
    console.log('oi')
    if (navbar.classList.contains('ativo')) {
        navbar.classList.remove('ativo');
        fundoNavbar.classList.remove('ativo');
        body.classList.remove('noscroll');
    }
    else {
        navbar.classList.add('ativo');
        fundoNavbar.classList.remove('oculto');
        setTimeout(function() {
            fundoNavbar.classList.add('ativo');
        }, 50);
        body.classList.add('noscroll');
    }
}

//evento para ativar o display: none; no fundo escuro atras da navbar apenas após a transição terminar
fundoNavbar.addEventListener('transitionend', function(){
    if (!fundoNavbar.classList.contains('ativo')) {
        fundoNavbar.classList.add('oculto');
    }
});

navbarButtons.forEach(element => {
    element.onclick = abrirFecharMenu;
});

btnMenu.onclick = abrirFecharMenu;
btnFecharMenu.onclick = abrirFecharMenu;
fundoNavbar.onclick = abrirFecharMenu;
