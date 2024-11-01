const botao = document.getElementById("botaoSome");
const botao2 = document.getElementById("botaoQuiz");


botao2.addEventListener("click", function() {
    location.href = "site2/genioQuizMenu.html";
})

let moveX = 0;
let moveY = 0;

botao.addEventListener("mouseover", function () {
    moveX = (Math.random() * 601 - 200); //gera um número entre -400 e 400 para atribuir ao movimento no eixo X do botão 
    moveY = (Math.random() * 201 - 200); //aqui é o mesmo esquema de random, mas é de -400 a 0, respeitando o valor pra não sumir da tela, que acaba tendo um limite diferente do eixo X

    botao.style.transform = `translate(${moveX}px, ${moveY}px)`; //atribui os valores randomicos ao botão aplicando um translate no css dele
})

const toggleButton = document.getElementById('modohw');
const audioha = document.getElementById('audio_ha');

toggleButton.addEventListener('click', () => {
    
    audioha.play();
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
    document.querySelector('image-header').classList.toggle('dark-mode');
    document.querySelector('botao-cancelar').classList.toggle('dark-mode');
    document.querySelector('botao-pix').classList.toggle('dark-mode');
});


const playPause = document.getElementById('tocarMusica');
const audio = document.getElementById('audio');

playPause.addEventListener('click', function (){
    if(audio.paused){
        audio.play();
    }else{
        audio.pause();
    }
})