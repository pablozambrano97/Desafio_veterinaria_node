import {registrar, leer} from './operaciones.js'

const arg = process.argv.slice(2);
const [operaciones, name, age, type, color, sickness] = arg;

if (operaciones.toLowerCase()==='registrar'){
    registrar(name, age, type, color, sickness);
}else if(operaciones.toLowerCase()==='leer'){
    leer('citas.json');
}else{
    console.log('Función no declarada.');
}