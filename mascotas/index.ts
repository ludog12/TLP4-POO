class Mascota {
    nombre: string;
    nivelFelicidad: number;
  
    constructor(nombre: string) {
      this.nombre = nombre;
      this.nivelFelicidad = 50; // Inicialmente, el nivel de felicidad es 50
    }
  
    alimentar() {
      this.nivelFelicidad += 10;
      console.log(`${this.nombre} ha sido alimentada.`);
    }
  
    jugar() {
      this.nivelFelicidad += 20;
      console.log(`${this.nombre} ha jugado y está más feliz.`);
    }
  
    mostrarEstado() {
      console.log(`${this.nombre}: Nivel de Felicidad ${this.nivelFelicidad}`);
    }
  }
  
  // Programa principal
  const mascotas: Mascota[] = [];
  
  console.log('¡Bienvenido a la Simulación de Mascotas Virtuales!\n');
  
  function mostrarMenu() {
    console.log('Menú:');
    console.log('1. Crear una nueva mascota');
    console.log('2. Alimentar a una mascota');
    console.log('3. Jugar con una mascota');
    console.log('4. Mostrar estado de una mascota');
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
        rl.question('Ingrese el nombre de la mascota: ', (nombre) => {
          const mascota = new Mascota(nombre);
          mascotas.push(mascota);
          console.log(`${nombre} ha sido creada.`);
          mostrarMenu();
        });
        break;
      case '2':
        listarMascotas();
        rl.question('Ingrese el nombre de la mascota que desea alimentar: ', (nombre) => {
          const mascota = buscarMascota(nombre);
          if (mascota) {
            mascota.alimentar();
          } else {
            console.log(`No se encontró a ${nombre}.`);
          }
          mostrarMenu();
        });
        break;
      case '3':
        listarMascotas();
        rl.question('Ingrese el nombre de la mascota con la que desea jugar: ', (nombre) => {
          const mascota = buscarMascota(nombre);
          if (mascota) {
            mascota.jugar();
          } else {
            console.log(`No se encontró a ${nombre}.`);
          }
          mostrarMenu();
        });
        break;
      case '4':
        listarMascotas();
        rl.question('Ingrese el nombre de la mascota cuyo estado desea mostrar: ', (nombre) => {
          const mascota = buscarMascota(nombre);
          if (mascota) {
            mascota.mostrarEstado();
          } else {
            console.log(`No se encontró a ${nombre}.`);
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
    } else {
      console.log('Tus mascotas:');
      mascotas.forEach((mascota) => {
        console.log(`- ${mascota.nombre}`);
      });
    }
  }
  
  function buscarMascota(nombre: string): Mascota | undefined {
    return mascotas.find((mascota) => mascota.nombre === nombre);
  }
  
  mostrarMenu();
  
  rl.on('line', (opcion) => {
    realizarAccion(opcion);
  });
  