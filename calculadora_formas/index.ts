class FormaGeometrica {
  calcularArea(): number {
    throw new Error('Método calcularArea() no implementado.');
  }

  calcularPerimetro(): number {
    throw new Error('Método calcularPerimetro() no implementado.');
  }
}

class Circulo extends FormaGeometrica {
  radio: number;

  constructor(radio: number) {
    super();
    this.radio = radio;
  }

  calcularArea(): number {
    return Math.PI * Math.pow(this.radio, 2);
  }

  calcularPerimetro(): number {
    return 2 * Math.PI * this.radio;
  }
}

class Rectangulo extends FormaGeometrica {
  ancho: number;
  alto: number;

  constructor(ancho: number, alto: number) {
    super();
    this.ancho = ancho;
    this.alto = alto;
  }

  calcularArea(): number {
    return this.ancho * this.alto;
  }

  calcularPerimetro(): number {
    return 2 * (this.ancho + this.alto);
  }
}

class Triangulo extends FormaGeometrica {
  base: number;
  altura: number;

  constructor(base: number, altura: number) {
    super();
    this.base = base;
    this.altura = altura;
  }

  calcularArea(): number {
    return (this.base * this.altura) / 2;
  }

  calcularPerimetro(): number {
    // En este ejemplo, suponemos que el triángulo es un triángulo equilátero
    // y calculamos el perímetro como la suma de sus tres lados.
    return 3 * this.base;
  }
}

// Función para interactuar con el usuario
function calcularGeometria() {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log('Calculadora de Geometría');
  console.log('1. Calcular área');
  console.log('2. Calcular perímetro');
  console.log('3. Salir');

  rl.question('Selecciona una opción: ', (opcion) => {
    if (opcion === '1') {
      console.log('Seleccionaste calcular área.');

      rl.question('Selecciona una forma (circulo, rectangulo, triangulo): ', (forma) => {
        if (forma === 'circulo') {
          rl.question('Ingresa el radio: ', (radioStr) => {
            const radio = parseFloat(radioStr);
            const circulo = new Circulo(radio);
            console.log(`El área del círculo es: ${circulo.calcularArea()}`);
            rl.close();
          });
        } else if (forma === 'rectangulo') {
          rl.question('Ingresa el ancho: ', (anchoStr) => {
            rl.question('Ingresa el alto: ', (altoStr) => {
              const ancho = parseFloat(anchoStr);
              const alto = parseFloat(altoStr);
              const rectangulo = new Rectangulo(ancho, alto);
              console.log(`El área del rectángulo es: ${rectangulo.calcularArea()}`);
              rl.close();
            });
          });
        } else if (forma === 'triangulo') {
          rl.question('Ingresa la base: ', (baseStr) => {
            rl.question('Ingresa la altura: ', (alturaStr) => {
              const base = parseFloat(baseStr);
              const altura = parseFloat(alturaStr);
              const triangulo = new Triangulo(base, altura);
              console.log(`El área del triángulo es: ${triangulo.calcularArea()}`);
              rl.close();
            });
          });
        } else {
          console.log('Forma no válida.');
          rl.close();
        }
      });
    } else if (opcion === '2') {
      console.log('Seleccionaste calcular perímetro.');

      rl.question('Selecciona una forma (circulo, rectangulo, triangulo): ', (forma) => {
        if (forma === 'circulo') {
          rl.question('Ingresa el radio: ', (radioStr) => {
            const radio = parseFloat(radioStr);
            const circulo = new Circulo(radio);
            console.log(`El perímetro del círculo es: ${circulo.calcularPerimetro()}`);
            rl.close();
          });
        } else if (forma === 'rectangulo') {
          rl.question('Ingresa el ancho: ', (anchoStr) => {
            rl.question('Ingresa el alto: ', (altoStr) => {
              const ancho = parseFloat(anchoStr);
              const alto = parseFloat(altoStr);
              const rectangulo = new Rectangulo(ancho, alto);
              console.log(`El perímetro del rectángulo es: ${rectangulo.calcularPerimetro()}`);
              rl.close();
            });
          });
        } else if (forma === 'triangulo') {
          rl.question('Ingresa la base: ', (baseStr) => {
            const base = parseFloat(baseStr);
            const triangulo = new Triangulo(base, base); // Suponemos un triángulo equilátero para el perímetro
            console.log(`El perímetro del triángulo es: ${triangulo.calcularPerimetro()}`);
            rl.close();
          });
        } else {
          console.log('Forma no válida.');
          rl.close();
        }
      });
    } else if (opcion === '3') {
      console.log('Saliendo...');
      rl.close();
    } else {
      console.log('Opción no válida.');
      rl.close();
    }
  });
}

calcularGeometria();
