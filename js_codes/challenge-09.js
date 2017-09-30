// IIFE - funcões auto-executáveis

(function(){

    function calculator( num1, num2 ) {
        return function( callback ) {
            return callback( num1, num2 );
        };
    }

    var sum = calculator( 10, 2 );

    console.log( 'O resultado da soma é: ' );
    console.log( sum( function( num1, num2 ) {
        return num1 + num2;
    }) );

    var subtration = calculator( 10, 2 );
    var multiplication = calculator( 5, 2 );
    var division = calculator( 20, 2 );
    var mod = calculator( 3, 3 );

    console.log( 'O resultado da subtração é: ' );
    console.log( subtration( function( num1, num2 ) {
        return num1 - num2;
    }));

    console.log( 'O resultado da multiplicação é: ' );
    console.log( multiplication( function( num1, num2 ) {
        return num1 * num2;
    } ) );

    console.log( 'O resultado da divisão é: ' );
    console.log( division( function( num1, num2 ) {
        return num1 / num2;
    } ) );

    console.log( 'O resultado do módulo é: ' );
    console.log( mod( function( num1, num2 ) {
        return num2 % num2;
    } ) );













})();
