var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FormaGeometrica = /** @class */ (function () {
    function FormaGeometrica() {
    }
    FormaGeometrica.prototype.calcularArea = function () {
        throw new Error('Método calcularArea() no implementado.');
    };
    FormaGeometrica.prototype.calcularPerimetro = function () {
        throw new Error('Método calcularPerimetro() no implementado.');
    };
    return FormaGeometrica;
}());
var Circulo = /** @class */ (function (_super) {
    __extends(Circulo, _super);
    function Circulo(radio) {
        var _this = _super.call(this) || this;
        _this.radio = radio;
        return _this;
    }
    Circulo.prototype.calcularArea = function () {
        return Math.PI * Math.pow(this.radio, 2);
    };
    Circulo.prototype.calcularPerimetro = function () {
        return 2 * Math.PI * this.radio;
    };
    return Circulo;
}(FormaGeometrica));
var Rectangulo = /** @class */ (function (_super) {
    __extends(Rectangulo, _super);
    function Rectangulo(ancho, alto) {
        var _this = _super.call(this) || this;
        _this.ancho = ancho;
        _this.alto = alto;
        return _this;
    }
    Rectangulo.prototype.calcularArea = function () {
        return this.ancho * this.alto;
    };
    Rectangulo.prototype.calcularPerimetro = function () {
        return 2 * (this.ancho + this.alto);
    };
    return Rectangulo;
}(FormaGeometrica));
var Triangulo = /** @class */ (function (_super) {
    __extends(Triangulo, _super);
    function Triangulo(base, altura) {
        var _this = _super.call(this) || this;
        _this.base = base;
        _this.altura = altura;
        return _this;
    }
    Triangulo.prototype.calcularArea = function () {
        return (this.base * this.altura) / 2;
    };
    Triangulo.prototype.calcularPerimetro = function () {
        // En este ejemplo, suponemos que el triángulo es un triángulo equilátero
        // y calculamos el perímetro como la suma de sus tres lados.
        return 3 * this.base;
    };
    return Triangulo;
}(FormaGeometrica));
// Función para interactuar con el usuario
function calcularGeometria() {
    var readline = require('readline');
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    console.log('Calculadora de Geometría');
    console.log('1. Calcular área');
    console.log('2. Calcular perímetro');
    console.log('3. Salir');
    rl.question('Selecciona una opción: ', function (opcion) {
        if (opcion === '1') {
            console.log('Seleccionaste calcular área.');
            rl.question('Selecciona una forma (circulo, rectangulo, triangulo): ', function (forma) {
                if (forma === 'circulo') {
                    rl.question('Ingresa el radio: ', function (radioStr) {
                        var radio = parseFloat(radioStr);
                        var circulo = new Circulo(radio);
                        console.log("El \u00E1rea del c\u00EDrculo es: ".concat(circulo.calcularArea()));
                        rl.close();
                    });
                }
                else if (forma === 'rectangulo') {
                    rl.question('Ingresa el ancho: ', function (anchoStr) {
                        rl.question('Ingresa el alto: ', function (altoStr) {
                            var ancho = parseFloat(anchoStr);
                            var alto = parseFloat(altoStr);
                            var rectangulo = new Rectangulo(ancho, alto);
                            console.log("El \u00E1rea del rect\u00E1ngulo es: ".concat(rectangulo.calcularArea()));
                            rl.close();
                        });
                    });
                }
                else if (forma === 'triangulo') {
                    rl.question('Ingresa la base: ', function (baseStr) {
                        rl.question('Ingresa la altura: ', function (alturaStr) {
                            var base = parseFloat(baseStr);
                            var altura = parseFloat(alturaStr);
                            var triangulo = new Triangulo(base, altura);
                            console.log("El \u00E1rea del tri\u00E1ngulo es: ".concat(triangulo.calcularArea()));
                            rl.close();
                        });
                    });
                }
                else {
                    console.log('Forma no válida.');
                    rl.close();
                }
            });
        }
        else if (opcion === '2') {
            console.log('Seleccionaste calcular perímetro.');
            rl.question('Selecciona una forma (circulo, rectangulo, triangulo): ', function (forma) {
                if (forma === 'circulo') {
                    rl.question('Ingresa el radio: ', function (radioStr) {
                        var radio = parseFloat(radioStr);
                        var circulo = new Circulo(radio);
                        console.log("El per\u00EDmetro del c\u00EDrculo es: ".concat(circulo.calcularPerimetro()));
                        rl.close();
                    });
                }
                else if (forma === 'rectangulo') {
                    rl.question('Ingresa el ancho: ', function (anchoStr) {
                        rl.question('Ingresa el alto: ', function (altoStr) {
                            var ancho = parseFloat(anchoStr);
                            var alto = parseFloat(altoStr);
                            var rectangulo = new Rectangulo(ancho, alto);
                            console.log("El per\u00EDmetro del rect\u00E1ngulo es: ".concat(rectangulo.calcularPerimetro()));
                            rl.close();
                        });
                    });
                }
                else if (forma === 'triangulo') {
                    rl.question('Ingresa la base: ', function (baseStr) {
                        var base = parseFloat(baseStr);
                        var triangulo = new Triangulo(base, base); // Suponemos un triángulo equilátero para el perímetro
                        console.log("El per\u00EDmetro del tri\u00E1ngulo es: ".concat(triangulo.calcularPerimetro()));
                        rl.close();
                    });
                }
                else {
                    console.log('Forma no válida.');
                    rl.close();
                }
            });
        }
        else if (opcion === '3') {
            console.log('Saliendo...');
            rl.close();
        }
        else {
            console.log('Opción no válida.');
            rl.close();
        }
    });
}
calcularGeometria();
