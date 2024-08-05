const prompt = require('prompt-sync')()
let residencias = require('./residencias')
const listarResidencias = require('./listarResidencias')
const adicionarResidencia = require('./adicionarResidencia')
const editarResidencias = require('./editarResidencias')
const deletarResidencias = require('./deletarResidencias')

function menu() {
    console.log(`Bem vindo! O que deseja?\n1. Listar residencias\n2. Adicionar residencias\n3. Editar residencias\n4. Deletar residencias\n5. Sair`)
    let opcao = prompt("Escolha uma opçâo: ")

    switch (opcao) {
        case '1':
            listarResidencias()
            menu()
            break;
        case '2':
            let nome = prompt("Diga o nome do proprietário: ")
            let bairro = prompt("Diga um bairro: ")
            let rua = prompt("Diga um rua: ")
            let numero = prompt("Diga um numero: ")
            adicionarResidencia({nome, bairro, rua, numero})
            console.log("Adicionado com sucesso!")
            menu()
            break;
        case '3':
            if (residencias.length === 0) {
                console.log("Não há residencias cadastradas!")
                menu()
            } else {
            editarResidencias(prompt)
            menu()
            }
            break;
        case '4':
            if (residencias === 0) {
                console.log("Não há residencias cadastradas.")
                menu()
            } else {
            deletarResidencias(prompt)
            menu()
            }
            break;
        case '5':
            console.log('Obrigado pela visita!')
            break;
        default:
            console.log("Opção inválida!")
            break;
    }
}

menu()