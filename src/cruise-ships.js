
function Ship(startingPort) {
    this.startingPort = startingPort;
    this.passengers = [];
    this.isDocked = true;
};

Ship.prototype = {
    boardPassenger(passenger) {
        this.passengers.push(passenger);
    },
    setSail() {
        this.isDocked = false;
    },

};

function Port(name) {
    this.name = name;
};

module.exports = {Ship, Port}