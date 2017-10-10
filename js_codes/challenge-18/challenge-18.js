(function() {

    'use strict';

    console.log( '\nLimpando CPFs' );

    var cpfs = [
        '049 -214 3421-1',
        '210.458.522-05',
        '735 500 794 - 22',
        '101.123-131x32'
        ]

    function cleanCPF( cpf ) {
        return cpf.replace( /\D/g, '' );
    }

    cpfs.forEach(function( cpf ) {
        console.log( cleanCPF( cpf ) );
    });

    console.log( '\nFormatando CPFs corretamente:' );

    cpfs.forEach(function( cpf ) {
        console.log( cleanCPF( cpf ).replace( /(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4') );
    });

    // ou podemos usar uma função

    //  cpfs.forEach(function( cpf ) {
    //    console.log( cleanCPF( cpf ).replace( /(\d{3})(\d{3})(\d{3})(\d{2})/,
    //        function( regex, arg1, arg2, arg3, arg4 ) {
    //            return arg1 + '.' + arg2 + '.' + arg3 + '-' + arg4;
    //        } ) );

    console.log( '\nMatch com as palavras "junho" ou "julho"  para a frase "Os meses de janeiro, junho e julho começam com a letra j.":' );
    console.log('Os meses de janeiro, junho e julho começam com a letra j.'.match(
        /ju[nl]ho/g,
    ) );
    console.log('<div><section><blockquote>Texto <img /></blockquote></section></div>'
        .match( /<\w+>/g ));
    console.log( '<div><ul><li></li><li></li><li><span></span></li></ul></div>'
        .match( /<\w+><\/\w+>/g )
    );
    console.log( '<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>'
        .replace( /<(\w+)>([^<]+)<\/\w+>/g,
            '<$1>O texto dentro da tag "$1" é "$2"</$1>\n'
        )
    );










})();
