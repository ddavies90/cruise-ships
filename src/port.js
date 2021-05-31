class Port {
    constructor(name) {
        if(!name || typeof(name) !== 'string') {
            throw new Error('Please enter a valid port name');
        };
            this.name = name;
    };
};

module.exports = Port;