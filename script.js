const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')

let minhaListaDeItens = []




function adicionarNovaTarefa() {
    minhaListaDeItens.push({

        tarefa: input.value,
        concluida: false
    })

    input.value = ""

    
    mostrarTarefas()
}

function mostrarTarefas() {

    let novaLi = ''

    minhaListaDeItens.forEach((task, posicao) => {

        novaLi = novaLi + `

            <li class="task ${task.concluida && "done"}"> 
                <img  src="img/check.png" alt="check-tarefa" onclick="concluirTarefa(${posicao})">
                <p>${task.tarefa}</p>
                <img src="img/lixovermeio.png" alt="tarefa-para-o-lixo" onclick="deletarItem(${posicao})">
            </li>

                `


    })

    listaCompleta.innerHTML = novaLi


    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))
}


function concluirTarefa(posicao) {
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida

    mostrarTarefas()
}

function deletarItem(posicao) {

    minhaListaDeItens.splice(posicao, 1)

    mostrarTarefas()

}

function recarregarTarefas() {
    const tarefasDoLocalStorage = localStorage.getItem('lista')

    if (tarefasDoLocalStorage) {
        minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
    }
    mostrarTarefas()
}

recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa)