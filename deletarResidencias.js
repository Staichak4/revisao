const listarResidencias = require('./listarResidencias')
let residencias = require('./residencias')

function deletarResidencias(index) {
    residencias.splice(index, 1);
}


module.exports = deletarResidencias