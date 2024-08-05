const listarResidencias = require('./listarResidencias')
let residencias = require('./residencias')

function editarResidencias(prompt) {
        listarResidencias()
        index = parseInt(prompt('Qual residencia deseja editar? ')) - 1
        if (index >= 0 && index < residencias.length) {
            residencias[index].nome = prompt("Digite um novo nome: ")
            residencias[index].bairro = prompt("Digite um novo bairro: ")
            residencias[index].rua = prompt("Digite uma nova rua: ")
            residencias[index].numero = prompt("Digite um novo numero: ")
            console.log('Residencia atualizada com sucesso!')
        } else {
            console.log('Opção inválida!')
            menu()
        }
}

module.exports = editarResidencias