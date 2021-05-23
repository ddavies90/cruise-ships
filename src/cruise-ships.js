
class Ship {
    constructor(startingPort) {
        if(typeof(startingPort) !== 'string') {
            throw new Error('Please enter a valid port name');
        } else {
            this.startingPort = startingPort;
        };
        this.passengers = [];
        this.isDocked = true;
    }
    boardPassenger(passenger) {
        if (!passenger || typeof(passenger) !== 'string' || passenger.length < 2 || !isNaN(parseInt(passenger)) || (/\d/).test(passenger)) {
            throw new Error('Please enter a name to use this function')
        } else {
        this.passengers.push(passenger);
        };
    }
    setSail() {
        this.isDocked = false;
    }
};

class Port {
    constructor(name) {
        if(typeof(name) !== 'string') {
            throw new Error('Please enter a valid port name');
        } else {
            this.name = name;
        };
    }
}


module.exports = {Ship, Port}