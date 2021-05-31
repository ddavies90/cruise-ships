
class Ship {
    constructor(itinerary) {
        if (typeof itinerary !== 'object') {
            throw new Error('Please pass in a valid object')
        };
        this.currentPort = itinerary.ports[0];
        this.itinerary = itinerary;
        this.passengers = [];
        this.isDocked = true;
        this.previousPort = null;
    };
    set boardPassenger(passenger) {
        if (!passenger || typeof passenger !== 'string' || passenger.length < 2 || !isNaN(parseInt(passenger)) || (/\d/).test(passenger)) {
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



module.exports = Ship