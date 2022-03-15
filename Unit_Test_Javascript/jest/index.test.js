const function_examples = require('./index');

const mockFn = jest.fn(x => x);   // Funcion mock que devulve el parametro pasado.
 

// Bloques de descripcion: Cada bloque realiza una clase de pruebas especificas.

// Pruebas de verificacion (expect), estas pruebas verifican que el resultado de una funcion sea el esperado.
describe("FizzBuzz", () => {
    test('[3] deberia dar como resultado "fizz"', () => {
        expect(function_examples.play_fizz_buzz([3],mockFn)).toBe('fizz');
    });
    test('[5] deberia dar como resultado "buzz"', () => {
        expect(function_examples.play_fizz_buzz([5],mockFn)).toBe('buzz');
    });
    test('[15] deberia dar como resultado "fizzbuzz"', () => {
        expect(function_examples.play_fizz_buzz([15],mockFn)).toBe('fizzbuzz');
    });
    test('[1,2,3] deberia dar como resultado "1, 2, fizz"', () => {
        expect(function_examples.play_fizz_buzz([1,2,3],mockFn)).toBe('1, 2, fizz');
    });

});

// Pruebas con mock functions: son pruebas relacionadas con las llamadas a una funcion.
describe("Mock Functions", () => {

    test('Pruebas mock', () => {

        // La funcion mock ha sido llamada
        expect(mockFn).toHaveBeenCalled();
        // La funcion mock ha sido llamada 4 veces
        expect(mockFn.mock.calls.length).toBe(4);
        // El primer argumento de la primera llamada debe ser 3
        expect(mockFn.mock.calls[0][0]).toBe('fizz');
        // El primer argumento de la segunda llamada debe ser 5
        expect(mockFn.mock.calls[1][0]).toBe('buzz');
        // Lo devuelve la primera llamada debe ser fizz
        expect(mockFn.mock.results[0].value).toBe('fizz');

    });

});

describe("Spy Function", () => {

    test('Pruebas spy', () => {

        const spy = jest.spyOn(function_examples, 'play_fizz_buzz');

        const probe_1 = function_examples.play_fizz_buzz([1], mockFn);

        expect(spy).toHaveBeenCalled(); // La funcion fizz_buzz fue llamada.
        expect(probe_1).toBe("1"); // El resultado para la entrada 1 de fizz_buzz debe ser 1.

        spy.mockRestore(); //Restaura el estado del mock creado por el spy.

    });

});


// Esta prueba casi siempre pasara porque se intenta 3 veces la funcion de lanzar una moneda, 
// y solo si no se aprueba las 3 veces seguidas fallara.
describe("RetryTimes escudo o corona", () => {

    jest.retryTimes(3); // Prueba 3 veces la funcion en busqueda de que pase minimo una vez.
    test('Intento de obtener escudo en 3 turnos de lanzar una moneda', () => {
    expect(function_examples.play_escudo_o_corona()).toBe('escudo');
    });

});



