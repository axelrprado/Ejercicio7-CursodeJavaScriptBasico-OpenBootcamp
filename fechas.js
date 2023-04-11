// Crea un archivo llamado fechas.js que contenga las siguientes líneas

// - La fecha de hoy
const fechaHoy = new Date();
console.log(fechaHoy);

// - La fecha de tu nacimiento
const fecNac = new Date(1997, 7, 20);
console.log(fecNac);

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const fecMasTarde = fecNac.getTime() >= new Date().getTime();
console.log(fecMasTarde);

// - Una variable que contenga el día de tu nacimiento
const DiaNac= fecNac.getDate();
console.log(DiaNac);

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const MesNac= fecNac.getMonth() + 1;
console.log(MesNac);

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const AnioNac = fecNac.getFullYear();
console.log(AnioNac);