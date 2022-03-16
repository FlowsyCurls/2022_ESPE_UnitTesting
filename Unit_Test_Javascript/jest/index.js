const function_examples = {
// Se definen algunas funciones de ejemplo para realizar pruebas unitarias.

    play_fizz_buzz(numbers, callback) {
        // Fizzbuzz es un juego en el que se hace una cuenta secuencial de numeros 
        // reemplazando unicamente los siguientes multiplos por palabras:
        // ---Multiplos de 3: fizz
        // ---Multiplos de 5: buzz
        // ---Multiplos de 15: fizzbuzz
        // Por ejemplo los primeros 10 numeros: [0,1,2,fizz,4,buzz,fizz,7,8,fizz]
        let result = []
        for (number of numbers) {
            
            if (number % 15 === 0) {
                result.push('fizzbuzz')
            } else if (number % 3 === 0) {
                result.push('fizz')
            } else if (number % 5 === 0) {
                result.push('buzz')
            } else {
                result.push(number)
            }
        }
        callback(result.join(', '))
        return result.join(', ')
    },

    play_escudo_o_corona(){
        // Esta funcion simula el juego de lanzar una moneda, se genera un numero aleatorio 
        // que solo puede ser 1 o 2, en el caso de que el resultado sea 1 retorna escudo y 
        // de lo contrario retorna corona.
        n = Math.floor(Math.random() * 2) + 1

        if(n==1){
            return 'escudo'
        }
        return 'corona'
    }
};

module.exports = function_examples;