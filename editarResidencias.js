const listarResidencias = require('./listarResidencias')
let residencias = require('./residencias')

function editarResidencias(index, novaResidencia) {
    residencias[index] = novaResidencia;
}

module.exports = editarResidencias