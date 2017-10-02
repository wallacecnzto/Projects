(function() {

    console.log('O array em formato de string é: ');
    console.log( [1, 2, 3, 4, 5 , 6, 7, 8].toString() );

    var sul = ['Paraná', 'Santa Catarina', 'Rio Grande do Sul'];
    var sudeste = ['Espírito Santo', 'Minas Gerais', 'Rio de Janeiro', 'São Paulo'];

    console.log( '\nAlguns Estados do Brasil' );

    var brasil = sul.concat( sudeste );

    console.log( brasil );
    console.log( '\nMais Estados adicionados:' );

    brasil.unshift( 'Acre', 'Amapá', 'Amazonas' );

    console.log( brasil );
    console.log( brasil.shift() );

    var newSul = brasil.slice( 2, 5 );

    console.log( newSul );
    console.log( brasil );

    var nordeste = [
        'Alagoas',
        'Bahia',
        'Ceará',
        'Maranhão',
        'Paraíba',
        'Pernambuco',
        'Piauí',
        'Rio Grande do Norte',
        'Sergipe'
    ];

    var newSudeste = brasil.splice( 5 );
     // console.log( newSudeste, brasil );

    brasil = brasil.concat( nordeste );

    console.log( newSudeste );
    console.log( brasil );

    var newBrasil= [];

    brasil.forEach(function( item, index ) {
        newBrasil.push({
            id: index,
            estado: item
        });
    });

    console.log( newBrasil );

    var every = brasil.every(function(item) {
        return item.length > 5;
    });

    console.log(
        every
        ? 'Sim, todos os estados tem mais de 7 letras.'
        : 'Nem todos os estados tem mais de 7 letras.'
    );

    var some = brasil.some(function(item) {
        return item === 'Ceará';
    });

    console.log(
        some
        ? 'Ceará está incluido'
        : 'Ceará não está incluido'
    );

    var map = newBrasil.map(function(item, index) {
        return {
            id: item.id + 1,
            estado: item.estado + ' pertence ao Brasil'
        };
    });
     console.log( map );

    var filter = newBrasil.filter(function(item, index) {
        return item.id % 2 === 0;
    });

    console.log( filter );

})();
