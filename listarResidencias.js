let residencias = require('./residencias')

function listarResidencias() {
    residencias.forEach((residencia, index) => {
        console.log(`${index + 1}. Nome: ${residencia.nome}, Bairro: ${residencia.bairro}, Rua: ${residencia.rua}, Numero: ${residencia.numero}`)
    })
}


module.exports = listarResidencias;