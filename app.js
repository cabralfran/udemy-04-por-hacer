// const argv = require ('yargs').argv;

const argv = require ('./config/yargs').argv;
const {crear, getListado, actualizar, borrarTarea} = require('./tareas/tareas')

let comando = argv._[0]; // en la posicion 0 esta el comando}


switch(comando){

    case 'crear':
        console.log('Crear tarea');
        let tarea =crear(argv.descripcion);
        console.log(tarea);
    break;

    case 'listar':
         let listado =  getListado();
         for(let tarea of listado){
             console.log('==========Tareas==========');
             console.log(tarea.descripcion);
             console.log('Estado: ', tarea.completado ? 'SI' : 'NO');
             console.log('==========================');
         }
    break;

    case 'actualizar':
        var result = actualizar(argv.descripcion, argv.completado);
        if(result){
            console.log('Tarea actualizada');
        }else{
            console.log('Tarea no actualizada');
        }
    break;

    case 'borrar':
        var result = borrarTarea(argv.descripcion);
        if(result){
            console.log('Tarea borrada');
        }else{
            console.log('Tarea no borrada');
        }
    break;

    default:
        console.log('Comando no existente');
    

}