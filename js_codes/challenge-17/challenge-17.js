(function() {
    'use strict';
    var text = 'Manoel Marques de Sousa, Conde de Porto Alegre(Rio Grande, 13 de junho de 1804 - Rio de Janeiro, 18 de julho de 1875), apelidado         de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro.';

    console.log( 'Adicionando seu nome ao texto:' );
    console.log( text.replace(/Manoel Marques de Sousa/g, 'Wallace Sousa Silva') );
    console.log( '\nTrocando naturalidade:' );
    console.log( text.replace(/brasileiro/g, 'fluminense'));
    console.log( text.replace(/\d/g, '-') ); // g => global, i => insensitive, \d => all digits \w => all words,
    // [0-9] === \d,
    console.log( text.replace(/[D-Hd-h]/g, 0) );
    console.log( text.replace(/a/gi, 4) );
    console.log( text.replace(/O Centauro de Luvas/g, function(phrase) {
        return phrase.toUpperCase();
    }) );

    function getMonthNumber(monthName) {
        var months = {
            janeiro: '01',
            fevereiro: '02',
            'março': '03',
            abril: '04',
            maio: '05',
            junho: '06',
            julho: '07',
            agosto: '08',
            setembro: '09',
            outubro: '10',
            novembro: '11',
            dezembro: '12'
        };
        return months[ monthName ];
    }
    console.log( 'O mês de março é representado pelo número ' + getMonthNumber('março') + '.' );
    console.log( 'O mês de setembro é representado pelo número ' + getMonthNumber('setembro') + '.' );
    console.log( 'O mês de dezembro é representado pelo número ' + getMonthNumber('dezembro') + '.' );
    console.log( '\nRegex que vai fazer o match com as datas do texto:' );

    var regexDate = /(\d\d) de (junho|julho) de (\d\d\d\d)/;

    console.log( regexDate );
    console.log( '\n Replace de datas:' );

    function replaceDate(regex, day, month, year) {
        return day + '/' + getMonthNumber( month ) + '/' + year;
    }

    console.log( text.replace( regexDate, replaceDate) );
})();
