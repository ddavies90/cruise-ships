
class Ship {
    constructor(itinerary) {
        if (!(itinerary instanceof Itinerary)) {
            throw new Error('Please pass in a valid Itinerary object')
        };
        this.currentPort = itinerary.ports[0];
        this.itinerary = itinerary;
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
    setSail() {
        this.isDocked = false;
        this.previousPort = this.currentPort;
    };
    dock() {
        const prevPortIndex = this.itinerary.ports.indexOf(this.previousPort);
        this.currentPort = this.itinerary.ports[prevPortIndex + 1];
        // need to cycle to next item in array once dock is called - options: Create counter to increment and use that index to select port. 
    };
};

class Port {
    constructor(name) {
        if(!name || typeof(name) !== 'string') {
            throw new Error('Please enter a valid port name');
        };
            this.name = name;
    };
};

class Itinerary {
    //I would like this to take individual port objects and push them to the array rather than have it accept an array ?use getter and setter functions
    constructor(ports) {
        this.ports = ports;
    };
};


module.exports = {Ship, Port, Itinerary}