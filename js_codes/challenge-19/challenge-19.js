(function() {
    'use strict';
    console.log( 'Regex para numeros usando construtor:' );
    
    var justNumberRegex = new RegExp( '^\\d+', 'gm' );

    console.log( justNumberRegex );

    var text = '10 anos.\n50 discos vendidos.\nE nem 10% dos meus amigos o conhece.';

    console.log( '\nNumeros no inicio da linha do texto:' + text, '\n' );
    console.log( text.match( justNumberRegex ) );
    console.log( '\nRegex para numeros somente no final das linhas:' );

    var numbersAtTheEnd = /\d+$/gm;

    console.log( numbersAtTheEnd );

    var markup = '<main>\n  <div class="container">\n   <span class="text date"></span>\n   <p class=\'excerpt \'></p>\n   </div>\n</main>';

    console.log( '\nQuais classes CSS existem na marcacao abaixo?\n\n', markup, '\n' );

    function hasClass(markup, cssClass) {

        var regex = new RegExp( 'class=["\'](?:[\\w\\s]+)' + cssClass + '(?:[\\w\\s]+)?["\']' );
        return regex.test( markup );
    }

    var classes = ['container', 'text', 'date', 'excerpt', 'main'];

    classes.forEach(function(cssClass) {
        console.log( hasClass(markup, cssClass) + ' para a classe ' + cssClass );
    });







})();
