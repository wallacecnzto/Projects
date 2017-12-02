(function(DOM) {
    'use strict';

    function app() {
        var $formCEP = new DOM('[data-js="form-cep"]');
        var $inputCEP = new DOM('[data-js="input-cep"]');
        var $logradouro = new DOM('[data-js="logradouro"]');
        var $bairro = new DOM('[data-js="bairro"]');
        var $estado = new DOM('[data-js="estado"]');
        var $cidade = new DOM('[data-js="cidade"]');
        var $cep = new DOM('[data-js="cep"]');
        var $status = new DOM('[data-js="status"]');
        var ajax = new XMLHttpRequest();

        $formCEP.on('submit', handleSubmitFormCEP);

        function handleSubmitFormCEP(event) {
            event.preventDefault();
            console.log($inputCEP.get()[0].value);
            var url = getUrl();
            ajax.open('GET', url);
            ajax.send();
            getMessage('loading');
            ajax.addEventListener('readystatechange', handleReadyStateChange);
        }

        function getUrl() {
            // return 'http://cep.correiocontrol.com.br/[CEP].json'.replace(
            return replaceCEP('http://apps.widenet.com.br/busca-cep/api/cep/[CEP].json');
        }

        function clearCEP() {
            return $inputCEP.get()[0].value.replace(/\D/g, '');
        }

        function handleReadyStateChange() {
            if( isRequestOk() ) {
                getMessage('ok');
                fillCEPFields();
            }
        }

        function isRequestOk() {
            return ajax.readyState === 4 && ajax.status === 200;
        }

        function fillCEPFields(){
            var data = parseData();
            if(!data) {
                getMessage('error');
                data = clearData();
            }

            $logradouro.get()[0].textContent = data.address;
            $bairro.get()[0].textContent = data.district;
            $estado.get()[0].textContent = data.state;
            $cidade.get()[0].textContent = data.city;
            $cep.get()[0].textContent = data.code;
        }

        function clearData() {
            return {
                logradouro: '-',
                bairro: '-',
                uf: '-',
                localidade: '-',
                cep: '-'
            }
        }

        function parseData() {
            var result;
            try {
                result = JSON.parse(ajax.responseText);
            }
            catch(e) {
                result = null;
            }
            return result;
        }

        function getMessage(type) {
            var messages = {
                loading: replaceCEP('Buscando informacoes para o CEP [CEP]...'),
                ok: replaceCEP('Endereco referente ao CEP [CEP]:'),
                error: replaceCEP('Nao encontramos o endereco para o CEP [CEP].')
            };
            $status.get()[0].textContent = messages[type];
        }

        function replaceCEP(message) {
            return message.replace('[CEP]', clearCEP());
        }

        return {
            getMessage: getMessage,
            replaceCEP: replaceCEP
        };
    }

    window.app = app;
    app();


})(window.DOM);
