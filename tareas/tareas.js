const fs = require('fs');


let listadoTareas =[];

const crear = (descripcion)=>{
  
        let tarea ={
            descripcion,
            completado: false
        };
        cargarDB();
        listadoTareas.push(tarea);
        guardarDB();
        return tarea;
}

const guardarDB = () =>{
    let data =  JSON.stringify(listadoTareas);

    fs.writeFile('db/data.json', data, (err) => {

        if (err)
           throw new Error('No se pudo grabar: '+err)

    });
}

const  cargarDB = () =>{

    try{
        listadoTareas = require ('../db/data.json');
    }catch(error){
        listadoTareas=[]; // si esta el archivo vacio creo un arreglo vacio
    }
    
}


let getListado = () => {
    cargarDB();
    return listadoTareas;
}

const actualizar = (desc, completado) =>{
    cargarDB();
    let index = listadoTareas.findIndex(tarea =>{
        return tarea.descripcion === desc;
    })

    if( index >=0){
        console.log(completado)
        listadoTareas[index].completado= (completado === 'true');
        guardarDB();
        return true;
    }
    else{
        return false;
    }
}

const borrarTarea = (desc) =>{

    cargarDB();

    // let nuevoListado = listadoTareas.filter(tarea =>{ // retorna un arreglo
    //     return tarea.descripcion !== desc;
    // })

    let index = listadoTareas.findIndex(tarea =>{
        return tarea.descripcion === desc;
    })
    if( index >=0){
        listadoTareas.splice(index,1);
        guardarDB();
        return true;
    }
    else{
        return false;;
    }
    
}

module.exports={
    crear,
    getListado,
    actualizar,
    borrarTarea
}