var Mascota = /** @class */ (function () {
    function Mascota(nombre) {
        this.nombre = nombre;
        this.nivelFelicidad = 50; // Inicialmente, el nivel de felicidad es 50
    }
    Mascota.prototype.alimentar = function () {
        this.nivelFelicidad += 10;
        console.log("".concat(this.nombre, " ha sido alimentada."));
    };
    Mascota.prototype.jugar = function () {
        this.nivelFelicidad += 20;
        console.log("".concat(this.nombre, " ha jugado y est\u00E1 m\u00E1s feliz."));
    };
    Mascota.prototype.mostrarEstado = function () {
        console.log("".concat(this.nombre, ": Nivel de Felicidad ").concat(this.nivelFelicidad));
    };
    return Mascota;
}());
// Programa principal
var mascotas = [];
console.log('¡Bienvenido a la Simulación de Mascotas Virtuales!\n');
function mostrarMenu() {
    console.log('Menú:');
    console.log('1. Crear una nueva mascota');
    console.log('2. Alimentar a una mascota');
    console.log('3. Jugar con una mascota');
    console.log('4. Mostrar estado de una mascota');
    console.log('5. Salir');
}
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function realizarAccion(opcion) {
    switch (opcion) {
        case '1':
            rl.question('Ingrese el nombre de la mascota: ', function (nombre) {
                var mascota = new Mascota(nombre);
                mascotas.push(mascota);
                console.log("".concat(nombre, " ha sido creada."));
                mostrarMenu();
            });
            break;
        case '2':
            listarMascotas();
            rl.question('Ingrese el nombre de la mascota que desea alimentar: ', function (nombre) {
                var mascota = buscarMascota(nombre);
                if (mascota) {
                    mascota.alimentar();
                }
                else {
                    console.log("No se encontr\u00F3 a ".concat(nombre, "."));
                }
                mostrarMenu();
            });
            break;
        case '3':
            listarMascotas();
            rl.question('Ingrese el nombre de la mascota con la que desea jugar: ', function (nombre) {
                var mascota = buscarMascota(nombre);
                if (mascota) {
                    mascota.jugar();
                }
                else {
                    console.log("No se encontr\u00F3 a ".concat(nombre, "."));
                }
                mostrarMenu();
            });
            break;
        case '4':
            listarMascotas();
            rl.question('Ingrese el nombre de la mascota cuyo estado desea mostrar: ', function (nombre) {
                var mascota = buscarMascota(nombre);
                if (mascota) {
                    mascota.mostrarEstado();
                }
                else {
                    console.log("No se encontr\u00F3 a ".concat(nombre, "."));
                }
                mostrarMenu();
            });
            break;
        case '5':
            console.log('Gracias por jugar con las mascotas virtuales. ¡Hasta luego!');
            rl.close();
            break;
        default:
            console.log('Opción no válida. Por favor, seleccione una opción válida.');
            mostrarMenu();
    }
}
function listarMascotas() {
    if (mascotas.length === 0) {
        console.log('No tienes ninguna mascota.');
    }
    else {
        console.log('Tus mascotas:');
        mascotas.forEach(function (mascota) {
            console.log("- ".concat(mascota.nombre));
        });
    }
}
function buscarMascota(nombre) {
    return mascotas.find(function (mascota) { return mascota.nombre === nombre; });
}
mostrarMenu();
rl.on('line', function (opcion) {
    realizarAccion(opcion);
});
