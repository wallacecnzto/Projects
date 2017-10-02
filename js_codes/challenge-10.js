(function(){
    operation = {
        '+': function( x, y ) { return x + y; },
        '-': function( x, y ) { return x - y; },
        '*': function( x, y ) { return x * y; },
        '/': function( x, y ) { return x / y; },
        '%': function( x, y ) { return x % y; }
    }

    function isOperatorValid( operator ){
        // return operation[ operator ] !== undefined; // se for != de undefined é pq é válido
        return !!operation[ operator ]; // !! retorna sempre o boolean
    };

    function calculator( operator ) {
        if( !isOperatorValid( operator )) {
            return false;
        };

        return function( x, y ) {
            if( typeof x !== 'number' && typeof y !== 'number') {
                return false;
            };

            return operation [ operator ]( x,y ); // usa-se array quando não consigo usar o . pq é uma string
        };
    }

    function showOperatorMessage( operator, number1, nymber2 ) {
        return 'A operação ' + number1 + ' ' + operator + ' ' + number2 + ' ' + ' = ';
    };

    function showErrorMessage(operator ) {
        return 'Operação ' + operator + ' não permitida!';
    };

    var number1 = 0;
    var number2 = 0;
    var operationSignal;

    var operationSignal = '+';
    var sum = calculator( operationSignal );

    if( sum ) { // if é sempre true quando o valor passado seja qqr coisa != de false.
        number1 = 10;
        number2 = 12;

        console.log( showOperatorMessage( operationSignal, number1, number2 ), sum( number1, number2 ) );
    }
    else {
        console.log( showErrorMessage( operationSignal ) );
    };

    var operationSignal = '-';
    var subtraction = calculator( operationSignal );

    if( subtraction ) { // if é sempre true quando o valor passado seja qqr coisa != de false.
        number1 = 100;
        number2 = 120;

        console.log( showOperatorMessage( operationSignal, number1, number2 ), subtraction( number1, number2 ) );
    }
    else{
        console.log( showErrorMessage( operationSignal ) );
    };

    var operationSignal = '*';
    var multiplication = calculator( operationSignal );

    if( multiplication ) { // if é sempre true quando o valor passado seja qqr coisa != de false.
        number1 = 25;
        number2 = 25;

        console.log( showOperatorMessage( operationSignal, number1, number2 ), multiplication( number1, number2 ) );
    }
    else{
        console.log( showErrorMessage( operationSignal ) );
    };

    var operationSignal = '/';
    var division = calculator( operationSignal );

    if(division) { // if é sempre true quando o valor passado seja qqr coisa != de false.
        number1 = 100;
        number2 = 2;

        console.log( showOperatorMessage( operationSignal, number1, number2 ), division( number1, number2 ) );
    }
    else{
        console.log( showErrorMessage( operationSignal ) );
    };

    var operationSignal = '%';
    var mod = calculator( operationSignal );

    if( mod ) { // if é sempre true quando o valor passado seja qqr coisa != de false.
        number1 = 10;
        number2 = 3;

        console.log( showOperatorMessage( operationSignal, number1, number2 ), mod( number1, number2 ) );
    }
    else{
        console.log( showErrorMessage( operationSignal ) );
    };

    var operationSignal = 'XXX';
    var invalid = calculator( operationSignal );

    if( invalid ) { // if é sempre true quando o valor passado seja qqr coisa != de false.
        number1 = 10;
        number2 = 3;

        console.log( showOperatorMessage( operationSignal, number1, number2 ), invalid( number1, number2 ) );
    }
    else{
        console.log( showErrorMessage( operationSignal ) );
    };











})();
