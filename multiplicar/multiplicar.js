const fs = require('fs');
const colors = require('colors');



let listarTabla = (base, limite) =>{

    console.log('============'.green);
    console.log(`Tabla del ${ base }`.green);
    console.log('============'.green);

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(` El valor introducido ${ base } no es un numero`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            let resul = base * i;
            console.log(`${ base} * ${ i } = ${ resul } `);
        
            
        }


    });
}

let crearArchivo = (base) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(` El valor introducido ${ base } no es un numero`);
            return;
        }

        let data = '';

        for (let i = 0; i < 11; i++) {
            let resul = base * i;
            data += `${ base} * ${ i } = ${ resul }
            `;
        }
        
        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err) throw err;
            console.log(`El archivo`, colors.red(`tabla-${ base }.txt`), ` ha sido creado`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}


