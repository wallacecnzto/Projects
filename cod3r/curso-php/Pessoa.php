<?php

class Pessoa {

    public $nome;
    public $idade;

    function __construct($nome, $idade) {
        $this->nome = $nome;
        $this->idade = $idade;
        echo 'Pessoa criada! <br>';
    }

    function __destruct(){
        echo 'Tchau!';
    }

    public function apresentar() {
        echo "{$this->nome}, {$this->idade} anos <br>";
    }
}

class Usuario extends Pessoa {

    public $login;

    function __construct($nome, $idade, $login) {
        $this->nome = $nome;
        $this->idade = $idade;
        $this->login = $login;
        echo 'Usuário logado!';
    }

    function __destruct() {
        echo 'Usuário diz TCHAU!';
    }

    public function apresentar() {
        echo "@{$this->login}!!!";
        parent::apresentar(); //parent invoca comportamentos
    }

}

$usuario = new Usuario('Wallace', 42, 'cnzto');
$usuario->apresentar();

