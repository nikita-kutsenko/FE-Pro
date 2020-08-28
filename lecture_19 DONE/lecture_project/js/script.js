// function Plane() {};

// Plane.prototype.takeoff = function(sidewind) {
//     let allowed = this.max__sidewind > sidewind ? 'allowed' : 'not allowed';
//     return 'Takeoff for ' + this.name  + ' is ' + allowed;
// }

// Plane.prototype.landing = function() {
//     return 'landing';
// }

// function Airline(name, max__sidewind, airline__mass, passengers) {
//     this.name = name;
//     this.max__sidewind = max__sidewind;
//     this.airline__mass = airline__mass;
//     this.passengers = passengers;
// }

// Airline.prototype = Object.create(Plane.prototype);
// Airline.prototype.getMass = function() {
//     return this.airline__mass + (this.passengers * 70);
// }

// let Boeing737 = new Airline('Boeing737', 17, 50000, 80);
// console.log(Boeing737);

// console.log(Boeing737.takeoff(20));
// console.log(Boeing737.getMass());


// function lightAirline(name, max__sidewind) {
//     this.name = name;
//     this.max__sidewind = max__sidewind;
// }
// lightAirline.prototype = Object.create(Plane.prototype);


// let Extra330 = new lightAirline('Extra330', 11);
// console.log(Extra330);
// console.log(Extra330.takeoff(10));









// ------------------_------------------_------------------_



function Car(){};
Car.prototype.car = function(){return 'car'};

function Audi(name) {
    this.name = name;
}
Audi.prototype = Object.create(Car.prototype);








