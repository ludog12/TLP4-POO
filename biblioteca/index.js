var Libro = /** @class */ (function () {
    function Libro(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.prestado = false;
    }
    Libro.prototype.prestar = function () {
        if (!this.prestado) {
            this.prestado = true;
            console.log("El libro \"".concat(this.titulo, "\" de ").concat(this.autor, " ha sido prestado."));
        }
        else {
            console.log("El libro \"".concat(this.titulo, "\" de ").concat(this.autor, " ya est\u00E1 prestado."));
        }
    };
    Libro.prototype.devolver = function () {
        if (this.prestado) {
            this.prestado = false;
            console.log("El libro \"".concat(this.titulo, "\" de ").concat(this.autor, " ha sido devuelto."));
        }
        else {
            console.log("El libro \"".concat(this.titulo, "\" de ").concat(this.autor, " no estaba prestado."));
        }
    };
    return Libro;
}());
var Biblioteca = /** @class */ (function () {
    function Biblioteca() {
        this.libros = [];
    }
    Biblioteca.prototype.agregarLibro = function (titulo, autor) {
        var libro = new Libro(titulo, autor);
        this.libros.push(libro);
        console.log("El libro \"".concat(titulo, "\" de ").concat(autor, " ha sido agregado a la biblioteca."));
    };
    Biblioteca.prototype.listarLibros = function () {
        if (this.libros.length === 0) {
            console.log('La biblioteca está vacía.');
        }
        else {
            console.log('Libros en la biblioteca:');
            this.libros.forEach(function (libro) {
                var estado = libro.prestado ? 'Prestado' : 'Disponible';
                console.log("- \"".concat(libro.titulo, "\" de ").concat(libro.autor, " (").concat(estado, ")"));
            });
        }
    };
    return Biblioteca;
}());
// Programa principal
var biblioteca = new Biblioteca();
console.log('¡Bienvenido a la Biblioteca Virtual!\n');
function mostrarMenu() {
    console.log('Menú:');
    console.log('1. Agregar libro');
    console.log('2. Prestar libro');
    console.log('3. Devolver libro');
    console.log('4. Listar libros');
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
            rl.question('Ingrese el título del libro: ', function (titulo) {
                rl.question('Ingrese el autor del libro: ', function (autor) {
                    biblioteca.agregarLibro(titulo, autor);
                    mostrarMenu();
                });
            });
            break;
        case '2':
            biblioteca.listarLibros();
            rl.question('Ingrese el título del libro que desea prestar: ', function (titulo) {
                var libro = biblioteca.libros.find(function (l) { return l.titulo === titulo; });
                if (libro) {
                    libro.prestar();
                }
                else {
                    console.log("No se encontr\u00F3 el libro \"".concat(titulo, "\" en la biblioteca."));
                }
                mostrarMenu();
            });
            break;
        case '3':
            biblioteca.listarLibros();
            rl.question('Ingrese el título del libro que desea devolver: ', function (titulo) {
                var libro = biblioteca.libros.find(function (l) { return l.titulo === titulo; });
                if (libro) {
                    libro.devolver();
                }
                else {
                    console.log("No se encontr\u00F3 el libro \"".concat(titulo, "\" en la biblioteca."));
                }
                mostrarMenu();
            });
            break;
        case '4':
            biblioteca.listarLibros();
            mostrarMenu();
            break;
        case '5':
            console.log('Gracias por usar la Biblioteca Virtual. ¡Hasta luego!');
            rl.close();
            break;
        default:
            console.log('Opción no válida. Por favor, seleccione una opción válida.');
            mostrarMenu();
    }
}
mostrarMenu();
rl.on('line', function (opcion) {
    realizarAccion(opcion);
});
