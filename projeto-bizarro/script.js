const botao = document.getElementById('#botaoSome');

let moveX = 0;
let moveY = 0;

botao.addEventListener("mouseover", function () {
    moveX = (Math.random() * 801 - 400); //gera um número entre -400 e 400 para atribuir ao movimento no eixo X do botão 
    moveY = (Math.random() * 401 - 400); //aqui é o mesmo esquema de random, mas é de -400 a 0, respeitando o valor pra não sumir da tela, que acaba tendo um limite diferente do eixo X

    botao.style.transform = `translate(${moveX}px, ${moveY}px)`; //atribui os valores randomicos ao botão aplicando um translate no css dele
})