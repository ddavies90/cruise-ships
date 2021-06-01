const Port = require("../src/port");

let ishinomaki;

beforeEach(() => {
    ishinomaki = new Port('Ishinomaki');
});

describe('constructor', () => {
    it('Creates new instance of the Port object', () => {
        expect(ishinomaki).toBeInstanceOf(Port);
    });
    it('Contains name property', () => {
        expect(ishinomaki.hasOwnProperty('name')).toEqual(true);
    });
    it('Contains property called ships which holds currently docked ships', () => {
        expect(ishinomaki.hasOwnProperty('ships')).toEqual(true);
    });
    it('Takes a string as an argument only', () => {
        expect(() => {
            const port2 = new Port(8382)
        }).toThrow('Please enter a valid port name');
    });
    it('Will throw an error if an empty string is passed in', () => {
        expect(() => {
            const port2 = new Port('');
        }).toThrow('Please enter a valid port name');
    });
});

describe('addShip', () => {
    it('Adds a ship to the ships array', () => {
        const ship = {name: 'Surge', currentPort: ishinomaki};
        const ship2 = {name: 'Highwind', currentPort: ishinomaki};
        ishinomaki.addShip(ship);
        ishinomaki.addShip(ship2);
        expect(ishinomaki.ships).toEqual([ship, ship2]);
    });
});

describe('removeShip', () => {
    //This test passes if the ships contain exactly the same properties and values so added name to test it actually works - Need to think of a way of testing this without this work around.
    it('Removes a ship from the ships array', () => {
        const ship = {currentPort: ishinomaki, name: 'Barry'};
        const ship2 = {currentPort: ishinomaki, name: 'Paul'};
        ishinomaki.addShip(ship);
        ishinomaki.addShip(ship2);
        ishinomaki.removeShip(ship2);
        expect(ishinomaki.ships).toStrictEqual([ship]);
    });
})

