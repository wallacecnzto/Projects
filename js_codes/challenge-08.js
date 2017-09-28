var sum = function calculateSum( x, y ) {
    return x + y;
};

var value1 = 2;
var value2 = 3;

console.log( 'A soma de ' + value1 + ' e ' + value2 + ' é igual a ' + sum( value1,
   value2 ) );

console.log( 'O nome da função que faz a soma é ' + sum.name + '.' );

function showName() {
    return 'Wallace Silva';
}

var varShowName = showName;

console.log( 'A função ' + varShowName.name + ' retorna ' + varShowName() + '.' );

function calculator( operator ) {
    return function ( number1, number2 ) {
        var result;
        switch ( operator ) {
            case '+':
                result = number1 + number2;
                break;
            case '-':
                result = number1 - number2;
                break;
            case '*':
                result = number1 * number2;
                break;
            case '/':
                result = number1 / number2;
                break;
            case '%':
                result = number1 % number2;
                break;
            default:
                return 'Operação inválida.'
        }
        return 'Resultado da operação ' + number1 + ' ' + operator + ' ' + number2
         + ' ' + '= ' + result + '.';
    };
}

var sum = calculator( '+' );

console.log( sum( 10, 10 ) );

var subtraction = calculator( '-' );
var multiplication = calculator( '*' );
var division = calculator( '/' );
var mod = calculator( '%' );
var invalid = calculator( 'x' );

console.log( subtraction( 10, 5 ) );
console.log( multiplication( 3, 3 ) );
console.log( division( 5, 5 ) );
console.log( mod( 10, 3 ) );
console.log( invalid( 5, 5 ) );
