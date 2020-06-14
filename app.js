const argv  = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require ('./multiplicar/multiplicar');

let comando = argv._[0];
console.log(argv);

switch(comando) {
    
    case 'listar':
        listarTabla(argv.base, argv.limite)
        .catch(e => console.log(e));
    break;

    case 'crear':
        crearArchivo(argv.base)
        .then(archivo => console.log(`Archivo creado: ${ archivo } `))
        .catch(e => console.log(e));
    break;

    default: 
    console.log('comando no reconocido');
}
