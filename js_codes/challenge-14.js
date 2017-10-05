(function() {

    console.log('\nNumber Objects Arrays:' );

    var numberObjects = [];

    for(var i = 1; i <= 10; i++) {
        numberObjects.push( { number: i } );
    }

    console.log( numberObjects );
    console.log( '\nJust Numbers:' );

    var justNumbers = numberObjects.map(function(item) {
        return item.number; // map retorna um array
    });

    console.log( justNumbers );
    console.log( '\nJust module of division by 2 or 3:' );

    var justMod2Or3 = justNumbers.filter(function(item) {
        return item % 2 === 0 || item % 3 === 0; // filter retorna boolean
    });

    console.log( justMod2Or3 );
    console.log('\nOperation:');

    var operation = justMod2Or3.reduce(function(acumulado, atual) {
        return ( acumulado + 1 ) * atual;
    }, 0);

    console.log( operation );
    console.log('\nOperation2:');

    var operation2 = justMod2Or3.reduceRight(function(acumulado, atual) {
        return ( acumulado + 1 ) * atual;
    }, 0);

    console.log( operation2 );
    console.log( '\nSeu nome com a lingua do P:' );

    var name = [ 'wa', 'lla', 'ce' ];
    var reduceP = name.reduce(function(acumulado, atual) {
        return acumulado + 'P' + atual;
    }, '');

    console.log( reduceP );
    console.log( 'Inversed Name:' );

    var inversedName = name.reduceRight(function(acumulado, atual) {
        return acumulado + atual;
    });

    console.log( inversedName );
    console.log( '\nShow numberObjects:' );
    console.log( numberObjects );

    if( numberObjects.indexOf({ number: 2 }) > -1){
        console.log('Existe um objeto { number: 2 } em numberObjects!');
    }
    else {
        console.log('Não existe um objeto { number: 2 } em numberObjects!');
    }

    if( Array.isArray( justMod2Or3 ) ) {
        console.log( justMod2Or3.toString() );
    }




;})();
