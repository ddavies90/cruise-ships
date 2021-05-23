
class Ship {
    constructor(startingPort) {
        if (!(startingPort instanceof Port)) {
            throw new Error('Please pass in a valid port object')
        };
        this.startingPort = startingPort.name;
        this.passengers = [];
        this.isDocked = true;
    };
    set boardPassenger(passenger) {
        if (!passenger || typeof(passenger) !== 'string' || passenger.length < 2 || !isNaN(parseInt(passenger)) || (/\d/).test(passenger)) {
            throw new Error('Please enter a name to use this function')
        } else {
        this.passengers.push(passenger);
        };
    };
    setSail() {
        this.isDocked = false;
    };
    set dock(portName) {
        if (!(portName instanceof Port)) {
            throw new Error('Please pass in a valid port object')
        };
        this.startingPort = portName.name;
    };
};

class Port {
    constructor(name) {
        if(!name || typeof(name) !== 'string') {
            throw new Error('Please enter a valid port name');
        };
            this.name = name;
    }
}


module.exports = {Ship, Port}