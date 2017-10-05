// html:5 com o cursor na frente do 5 + f5 + a vírgula

(function() {

    function Person(name, lastName, age) {

        this.name = name; // este name vai receber o que vier do parametro name
        this.lastName = lastName;// este lastName vai receber o que vier do parametro lastName
        this.age = age; // este age vai receber o que vier do parametro age

        this.getFullName = function getFullName() {
            return this.name + ' ' + this.lastName;
        };

        this.getAge = function getAge() {
            return this.age;
        };

        this.addAge = function addAge() {
            this.age += arguments[0];
            return this;
        };
    };

    var fernando = new Person( 'Fernando', 'Daciuk', 30 );
    var wallace = new Person( 'Wallace', 'Silva', 40 );
    var val = new Person( 'Valdilene', 'Sousa', 41 );

    console.log( fernando );
    console.log( wallace );
    console.log( val );

    console.log( fernando.getFullName() );
    console.log( wallace.getFullName() );
    console.log( val.getFullName() );

    console.log( fernando.getFullName() + ' tem ' + fernando.getAge() + ' anos.' );
    console.log( wallace.getFullName() + ' tem ' + wallace.getAge() + ' anos.' );
    console.log( val.getFullName() + ' tem ' + val.getAge() + ' anos.' );

    console.log( fernando.getFullName() + ' agora tem ' + fernando.addAge(2).getAge() + ' anos.' );
    console.log( wallace.getFullName() + ' agora tem ' + wallace.addAge(2).getAge() + ' anos.' );
    console.log( val.getFullName() + ' agora tem ' + val.addAge(2).getAge() + ' anos.' );
})();
