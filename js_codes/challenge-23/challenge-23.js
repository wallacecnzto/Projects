(function(win, doc) {
    'use strict';

    var $visor = doc.querySelector('[data-js="visor"]');
    var $buttonsNumbers = doc.querySelectorAll('[data-js="button-number"]');
    var $buttonsOperations = doc.querySelectorAll('[data-js="button-operation"]');
    var $buttonCE = doc.querySelector('[data-js="button-ce"]');
    var $buttonEqual = doc.querySelector('[data-js="button-equal"]');

    Array.prototype.forEach.call($buttonsNumbers, function(button) {
        button.addEventListener('click', handleClickNumber, false);
    });

    Array.prototype.forEach.call($buttonsOperations, function(button) {
        button.addEventListener('click', handleClickOperation, false);
    });

   $buttonCE.addEventListener('click', handleClickCE, false);
   $buttonEqual.addEventListener('click', handleClickEqual, false);

    function handleClickNumber() {
        $visor.value += this.value;
    }

    function handleClickOperation() {
        removeLastItemIfItIsAnOperator();
        $visor.value += this.value;
    }

    function handleClickCE() {
        $visor.value = 0;
    }

    function isLastItemAnOperation() {
        var operations = ['+', '-', '*', '/'];
        var lastItem = $visor.value.split('').pop();
        return operations.some(function(operator) {
            return operator === lastItem;
        });
    }

    function removeLastItemIfItIsAnOperator() {
        if(isLastItemAnOperation())
            $visor.value = $visor.value.slice(0, -1);
    }

    function handleClickEqual() {
        removeLastItemIfItIsAnOperator();
        var allValues = $visor.value.match(/\d+[+x\/-]?/g);
        var result = allValues.reduce(function(accumulated, actual) {
            return accumulated + actual;
        });

        console.log(result);
    }

















})(window, document);
