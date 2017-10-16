(function(win, doc) {

    'use strict';

    var $timer = doc.querySelector('[data-js="timer"]');
    var $start = doc.querySelector('[data-js="start"]');
    var $stop = doc.querySelector('[data-js="stop"]');
    var $reset = doc.querySelector('[data-js="reset"]');
    var interval;

    $start.addEventListener( 'click', startTimer, false );
    $stop.addEventListener( 'click', stopTimer, false );
    $reset.addEventListener( 'click', resetTimer, false );

    function startTimer() {
        $timer.value = +$timer.value + 1;
        interval = setTimeout(startTimer, 1000);
    }

    function stopTimer() {
        clearTimeout(interval);
    }

    function resetTimer() {
        $timer.value = 0;
        stopTimer();
    }


})(window, document);
