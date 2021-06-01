class Ship {
    constructor(name, itinerary) {
        if (typeof itinerary !== 'object') {
            throw new Error('Please pass in a valid object')
        };
        this.name = name;
        this.currentPort = itinerary.ports[0];
        this.itinerary = itinerary;
        this.passengers = [];
        this.previousPort = null;
        this.currentPort.addShip(this);
    };
    set boardPassenger(passenger) {
        if (!passenger || typeof passenger !== 'string' || passenger.length < 2 || !isNaN(parseInt(passenger)) || (/\d/).test(passenger)) {
            throw new Error('Please enter a name to use this function')
        } else {
        this.passengers.push(passenger);
        };
    };
    setSail() {
        const currentPortIndex = this.itinerary.ports.indexOf(this.currentPort);
        if (this.itinerary.ports[currentPortIndex + 1] !== undefined) {
            this.previousPort = this.currentPort;
            this.previousPort.removeShip(this);
            this.currentPort = null;
        } else {
            throw new Error('The ship can not leave the dock without a destination');
        };
    };
    dock() {
        const prevPortIndex = this.itinerary.ports.indexOf(this.previousPort);
        //If not docked
        if (!(this.currentPort)) {
            this.currentPort = this.itinerary.ports[prevPortIndex + 1];
            this.currentPort.addShip(this);
        } else {
            throw new Error('The ship is already docked');
        };
    };
};



module.exports = Ship