class Libro {
    titulo: string;
    autor: string;
    prestado: boolean;
  
    constructor(titulo: string, autor: string) {
      this.titulo = titulo;
      this.autor = autor;
      this.prestado = false;
    }
  
    prestar() {
      if (!this.prestado) {
        this.prestado = true;
        console.log(`El libro "${this.titulo}" de ${this.autor} ha sido prestado.`);
      } else {
        console.log(`El libro "${this.titulo}" de ${this.autor} ya está prestado.`);
      }
    }
  
    devolver() {
      if (this.prestado) {
        this.prestado = false;
        console.log(`El libro "${this.titulo}" de ${this.autor} ha sido devuelto.`);
      } else {
        console.log(`El libro "${this.titulo}" de ${this.autor} no estaba prestado.`);
      }
    }
  }
  
  class Biblioteca {
    libros: Libro[] = [];
  
    agregarLibro(titulo: string, autor: string) {
      const libro = new Libro(titulo, autor);
      this.libros.push(libro);
      console.log(`El libro "${titulo}" de ${autor} ha sido agregado a la biblioteca.`);
    }
  
    listarLibros() {
      if (this.libros.length === 0) {
        console.log('La biblioteca está vacía.');
      } else {
        console.log('Libros en la biblioteca:');
        this.libros.forEach((libro) => {
          const estado = libro.prestado ? 'Prestado' : 'Disponible';
          console.log(`- "${libro.titulo}" de ${libro.autor} (${estado})`);
        });
      }
    }
  }
  
  // Programa principal
  const biblioteca = new Biblioteca();
  
  console.log('¡Bienvenido a la Biblioteca Virtual!\n');
  
  function mostrarMenu() {
    console.log('Menú:');
    console.log('1. Agregar libro');
    console.log('2. Prestar libro');
    console.log('3. Devolver libro');
    console.log('4. Listar libros');
    console.log('5. Salir');
  }
  
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  function realizarAccion(opcion: string) {
    switch (opcion) {
      case '1':
        rl.question('Ingrese el título del libro: ', (titulo) => {
          rl.question('Ingrese el autor del libro: ', (autor) => {
            biblioteca.agregarLibro(titulo, autor);
            mostrarMenu();
          });
        });
        break;
      case '2':
        biblioteca.listarLibros();
        rl.question('Ingrese el título del libro que desea prestar: ', (titulo) => {
          const libro = biblioteca.libros.find((l) => l.titulo === titulo);
          if (libro) {
            libro.prestar();
          } else {
            console.log(`No se encontró el libro "${titulo}" en la biblioteca.`);
          }
          mostrarMenu();
        });
        break;
      case '3':
        biblioteca.listarLibros();
        rl.question('Ingrese el título del libro que desea devolver: ', (titulo) => {
          const libro = biblioteca.libros.find((l) => l.titulo === titulo);
          if (libro) {
            libro.devolver();
          } else {
            console.log(`No se encontró el libro "${titulo}" en la biblioteca.`);
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
  
  rl.on('line', (opcion) => {
    realizarAccion(opcion);
  });
  