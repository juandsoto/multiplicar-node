const fs = require('fs');
const colors = require('colors');

const crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un número`);
            return;
        }
        let data = '';

        for (let i = 0; i <= limite; i++) {
            data += (`${base} * ${i} = ${base*i}\n`);
        }
        fs.writeFile(`tablas/tabla-${base}-${limite}.txt`, data, err => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-${limite}.txt`.cyan);
        });
    });
}
const listarTabla = (base, limite) => {
    return new Promise((response, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un número`)
        }
        let data = '';

        for (let i = 0; i <= limite; i++) {
            data += (`${base} * ${i} = ${base*i}\n`);
        }
        response(data);
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}