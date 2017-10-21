(function(win, doc) {
    'use strict';

    var $visor = doc.querySelector('[data-js="visor"]');
    var $buttonsNumbers = doc.querySelectorAll('[data-js="button-number"]');

    Array.prototype.forEach.call($buttonsNumbers, function(button) {
        button.addEventListener('click', handleClickNumber, false);
    });

    function handleClickNumber(event) {
        $visor.value += this.value;
    }





















})(window, document);
