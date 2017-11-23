(function() {
    'use strict';

    function DOM(elements) {
        this.element = this.getDOMElements(elements);
    }

    DOM.prototype.getDOMElements = function getDOMElements(elements) {
        return document.querySelectorAll(elements);
    };

    DOM.prototype.on = function on() {};
    DOM.prototype.off = function off() {};
    DOM.prototype.get = function get() {};

    var $a = new DOM ('[data-js="link"]');
    $a.on('click', function(e) {
        e.preventDefault();
        console.log('clicou');
    });
























})();
