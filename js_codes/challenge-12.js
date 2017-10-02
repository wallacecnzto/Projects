// push adiciona no final (não altera o array)
// pop remove do final (não altera o array)
// reverse inverte o array (altera o array)
// sort ordena o array (altera o array)

(function() {

    var person = {

        name: 'cnzto',
        lastName: 'silva',
        age: 40

    };

    console.log('Propriedades de person: ');
    console.log(Object.keys( person ));

    var books = [];

    books.push({ name: 'jQuery Mobile', pages: 250 });
    books.push({ name: 'Javascript de Alto Desempenho', pages: 150 });
    books.push({ name: 'CSS3', pages: 280 });

    console.log('\nLista de Livros:');
    console.log( books );
    console.log( books.pop() );
    console.log( '\nAgora sobraram somente estes livros:' );
    console.log( books );

    var books = JSON.stringify( books ); // converte o obj para string (JAVASCRIPT OBJECT NOTATION)

    console.log( '\nLivros em formato string:' );

    console.log( books );

    books = JSON.parse( books ); // converte de string para obj.

    console.log( '\nAgora os livros são objetos novamente.' );

    console.log( books );

    for( i = 0; i < books.length; i++) {
        for( var prop in books[i] ) {
            console.log( prop + ': ' + books[i][prop] );
        }
    }

    var myName = ['w','a','l','l','a','c','e'];

    console.log( myName.join('') );
    console.log( myName.reverse().join('') );
    console.log( myName.sort() );

})();
