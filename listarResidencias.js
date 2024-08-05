let residencias = require('./residencias')

function listarResidencias() {
    if(residencias.length === 0) {
        console.log('Não há residencias cadastradas.')
    } else {
    residencias.forEach((residencia, index) => {
        console.log(`${index + 1}. Nome: ${residencia.nome}, Bairro: ${residencia.bairro}, Rua: ${residencia.rua}, Numero: ${residencia.numero}`)
    })
}
}

module.exports = listarResidencias