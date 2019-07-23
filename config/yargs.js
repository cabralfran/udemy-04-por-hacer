
const descripcion ={
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const argv = require('yargs')
    .command('crear', 'Crea una tarea', {
        descripcion
    })
    .command('listar', 'Lista todas las tareas', {

    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado:{
            alias: 'c',
            default: true,
            desc: 'Marca como completado o pendiente la tarea'
        }
    })
    .command('borrar', 'Borrar una tarea', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}