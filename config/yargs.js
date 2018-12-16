const descripcion = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    }
}
const completado = {
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado  o pendiente la tarea'
    }
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completo de una tarea', {
        descripcion,
        completado
    })
    .command('listar', 'Lista tareas')
    .command('borrar', 'Borrar un elemento todo', {
        descripcion
    })
    .help()
    .argv
module.exports = {
    argv
}