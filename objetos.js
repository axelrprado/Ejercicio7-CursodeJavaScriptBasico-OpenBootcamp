// Crea un archivo llamado objetos.js que contenga las siguientes líneas
// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const misDatos = {
    nombre : 'Axel',
    apellidos : 'Rodriguez',
    edad : 25,
    altura : 168,
    eresDesarrollador: true
}
console.log(misDatos);

// - Una variable que obtenga tu edad a partir del objeto anterior
miEdad = misDatos.edad;
console.log(miEdad);

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const lstDatos = [misDatos]
console.log(lstDatos);

const listaDatosPersonales = [
    misDatos,
    {
        nombre: 'María',
        apellido: 'García',
        edad: 30,
        altura: 1.65,
        eresDesarrollador: false
    },
    {
        nombre: 'Carlos',
        apellido: 'Sánchez',
        edad: 26,
        altura: 1.80,
        eresDesarrollador: true
    }
];
// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

listaDatosPersonales.sort((a, b) => b.edad - a.edad)
console.log(listaDatosPersonales);