const tarefas = {
    lista: [],
    
    entradaTarefa: document.getElementById('entradaTarefa'),
    botaoAdicionar: document.getElementById('botaoAdicionar'),
    listaTarefas: document.getElementById('listaTarefas'),

    adicionarTarefa: function(){
        const textoTarefa = tarefas.entradaTarefa.value.trim();
        if(textoTarefa !== ''){
            const tarefa = {
                texto: textoTarefa,
                concluida: false
            }

            tarefas.lista.push(tarefa);
            tarefas.exibirTarefas();
            tarefas.entradaTarefa.value = '';
            tarefas.entradaTarefa.focus();
        }
    },

    exibirTarefas: function(){
        tarefas.listaTarefas.innerHTML = '';
        tarefas.lista.forEach((tarefa,indice) => {
            const itemTarefa = document.createElement('li'
            );
            const texto = document.createElement('span');
            texto.textContent = tarefa.texto;
            if(tarefa.concluida){
                itemTarefa.classList.add('completed');
            }
            
            texto.addEventListener('click', () => {
                tarefas.marcarConcluida(indice);
            });

            const botaoRemover = document.createElement('button');
            botaoRemover.textContent = 'X';
            botaoRemover.addEventListener('click', () => {
                tarefas.removerTarefa(indice);
            });
            
            itemTarefa.appendChild(texto);
            itemTarefa.appendChild(botaoRemover);
            tarefas.listaTarefas.appendChild(itemTarefa);
        }
    )},

    marcarConcluida: (indice) => {
        tarefas.lista[indice].concluida = !tarefas.lista[indice].concluida;
        tarefas.exibirTarefas();
    },

    removerTarefa: () => {
        tarefas.lista.splice(indice,1);
        tarefas.exibirTarefas();
    },

    init: () => {
        tarefas.botaoAdicionar.addEventListener('click', tarefas.adicionarTarefa);
        tarefas.entradaTarefa.addEventListener('keyup',(evento) => {
                if(evento.key === 'Enter'){
                    tarefas.adicionarTarefa();
                }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    tarefas.init();
})