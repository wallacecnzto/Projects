<?php
class Produto {
    public $descricao;
    public $estoque;
    public $preco;

    public function aumentarEstoque($unidades) {
        if (is_numeric($unidades) AND $unidades >= 0) {
            $this->estoque += $unidades;
        }
    }

    public function diminuirEstoque($unidades) {
        if (is_numeric($unidades) AND $unidades >= 0) {
            $this->estoque -= $unidades;
        }
    }

    public function reajustaPrecos($percentual)
    {
        if (is_numeric($percentual) AND $percentual >= 0) {
            $this->preco *= (1+ ($percentual / 100));
        }
    }
    
}

$p1 = new Produto;
$p1->descricao = 'Chocolate';
$p1->estoque = 10;
$p1->preco = 8;

print "O estoque de {$p1->descricao} é {$p1->estoque} <br>\n";
print "O preço de {$p1->descricao} é {$p1->preco} <br>\n";