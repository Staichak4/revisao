const listarResidencias = require('./listarResidencias')
let residencias = require('./residencias')


function deletarResidencias(prompt) {
        listarResidencias()
        index = parseInt(prompt('Qual residencia deseja deletar? ')) - 1
        if (index >= 0 && index < residencias.length) {
            residencias.splice(index, 1)
            console.log("Residencia removida com sucesso!")
        } else {
            console.log("Opção inválida.")
            menu()
    }
}

module.exports = deletarResidencias