(function(window, document) {

    'use strict';

    var username = prompt('Qual é o seu nome?') || 'Desconhecido';  // usamos o curto-circuito

    alert( 'Bem-vindo ' + username );

    var email = prompt( 'Qual é o seu email?' );

    var $inputUsername = document.querySelector( 'input[type="text"]' );
    var $inputEmail = document.querySelector( 'input[type="email"]' );
    var $message = document.querySelector( 'textarea' );
    var $button = document.querySelector( 'button' );

    $inputUsername.value = username;
    $inputEmail.value = email;
    $button.addEventListener( 'click', function(event) {

        event.preventDefault();

        if( !$inputUsername.value )
            return alert( 'Preencha o nome do usuário!' );

        if( !$inputEmail.value)
            return alert( 'Preencha o e-mail!' );

        if( !isValidEmail( $inputEmail.value ) )
            return alert( 'Entre com um email válido!' );

        if( !$message.value )
            return alert( 'Preencha a mensagem!' );

        if( !confirm( 'Tem certeza que deseja enviar o formulário?' ) )
            return alert( 'Não enviado!' );

        return alert( 'Enviado com sucesso!' );

    }, false );

    function isValidEmail( email ){
        return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test( email );
    }

})(window, document);
