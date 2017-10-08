(function() {
    'use strict';
    console.log('As letras do meu nome:');

    var name = 'Wallace';

    for (var i = 0, len = name.length; i < len; i++) {
        console.log( name.charAt(i) + ' e a ' + (i + 1) + 'a letra do meu nome.' );
    }

    console.log( '\nNome convertido a partir de um slug:' );

    var fullName = 'wallace-sousa-silva';
    var newFullName = fullName.split('-').map(function(name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }).join(' ');

    console.log( fullName );
    console.log( newFullName );
    console.log( '\nSao meus amigos:' );

    var friends = ['Ana', 'Maria', 'Carlos', 'Val', 'Edu'];
    var phrase = friends.reduce(function(acumulado, atual, index) {
        var separator = friends.length -1 === index ? ' e ' : ', ';
        return acumulado + separator + atual;
    }).concat(' sao meus amigos.');

    console.log( phrase );
    console.log( '\nEra "Roberto" agora e:' );
    console.log('Roberto'.replace('to', 'ta'));
    console.log( 'Fernando'.substring(8, 3) );

    var myName = 'Wallace';
    var myNewName = [];

    for (var i = 0, len = myName.length; i < len; i++) {
        myNewName.push(i % 2 === 0 ? myName[i].toUpperCase() : myName[i].toLowerCase());
    }
    
    console.log( myNewName.join(''));

})();
