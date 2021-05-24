
class Ship {
    constructor(homePort) {
        if (!(homePort instanceof Port)) {
            throw new Error('Please pass in a valid port object')
        };
        this.homePort = homePort.name;
        this.passengers = [];
        this.isDocked = true;
        this.previousPort = null;
    };
    set boardPassenger(passenger) {
        if (!passenger || typeof(passenger) !== 'string' || passenger.length < 2 || !isNaN(parseInt(passenger)) || (/\d/).test(passenger)) {
            throw new Error('Please enter a name to use this function')
        } else {
        this.passengers.push(passenger);
        };
    };
    set setSail(port) {
        this.isDocked = false;
        this.previousPort = port.name;
    };
    set dock(portName) {
        if (!(portName instanceof Port)) {
            throw new Error('Please pass in a valid port object')
        };
        this.previousPort = portName.name;
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