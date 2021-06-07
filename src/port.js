(function exportPort() {
    class Port {
        constructor(name) {
            if(!name || typeof(name) !== 'string') {
                throw new Error('Please enter a valid port name');
            };
                this.name = name;
                this.ships = [];
        };
        addShip(ship) {
            this.ships.push(ship);
        };
        removeShip(ship) {
            this.ships = this.ships.filter(item => item !== ship)
        };
    };
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Port;
    } else {
        window.Port = Port;
    }
}());