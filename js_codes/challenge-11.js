(function() {

    var once = false;

    do {
        console.log(' Entrou ao menos uma vez! ');
    } while( once );

    var person = {
            name: 'Wallace Silva',
            age: 40,
            weight: 94.5,
            birthday: '01/07/77'
    };

    var counter = 0;

    // for in usado quando não sabemos o tamanho do objeto.
    // for normal é usado quando sabemos.

    for( var prop in person ) {
        console.log(' A ' + prop + ' de person é ' + person[ prop ] + '.');
        counter++;
    }

    console.log('The person has ' + counter + ' properties.');

    function moreThan( age ) {
        /**if( person.age > 25 ) {
            return true;
        }
         **/
        // return person.age > 25 ? true : false; // prefira usar o operador ternário quando der.
        return person.age > age; // já retorna true ou false direto (melhor ainda).
    };

    console.log('The person has then more 25 years old? ', moreThan( 25 ));
    console.log('De 0 a 10:');

    var numbers = [];

    for(var i = 0; i < 20; i++) {
        if( i > 10 ) {
            break;
        }
        numbers.push( i );
    }

    console.log( numbers );
    console.log('Par de 0 a 20:');

    numbers = [];

    for(var i = 0; i <= 20; i++) {
        if( i % 2 === 0 ) {
            continue;
        }
        numbers.push( i );
    }

    console.log( numbers );

})();
