
function Ship (startingPort) {
    this.startingPort = startingPort;
    this.passengers = [];
};

Ship.prototype = {
    boardPassenger(passenger) {
        this.passengers.push(passenger);
    },
}

module.exports = {Ship}