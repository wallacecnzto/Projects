(function() {

    'use strict';

    var wallace = {
        name: 'Wallace',
        lastName: 'Silva'
    };

    var val = {
        name: 'Val',
        lastName: 'Sousa'
    };

    console.log( 'O nome das pessoas é:' );

    function getFullName() {
        return this.name + ' ' + this.lastName;
    };

    console.log( getFullName.call( wallace ) );
    console.log( getFullName.call( val ) );

    function sum() {
        console.log( arguments );
        return Array.prototype.reduce.call(arguments,
            function(accumulated, acctualItem) {
                return +accumulated + +acctualItem;
            }
        );
    }

    console.log( sum(1, 2, 3) );
    console.log( sum(2, 8, 9, 7, 5) );
    console.log( sum(10, 100) );

    var userEntry = prompt( 'Entre com alguns numeros que serão somados:' );

    console.log( '\nEntrada do usuário:' );
    console.log( userEntry );
    console.log( '\nEntrada limpa:' );

    function justNumbers( entry ) {
        return entry.replace( /\D+/g, ',' ).split( ',' );
    }

    var numbers = justNumbers( userEntry );

    console.log( numbers );
    console.log( sum.apply( sum, numbers ) );



})();
