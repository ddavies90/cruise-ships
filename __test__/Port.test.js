const Port = require("../src/port");

let ishinomaki;
let surge;
let highwind;

beforeEach(() => {
    ishinomaki = new Port('Ishinomaki');
    surge = {name: 'Surge'};
    highwind = {name: 'Highwind'};
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
        ishinomaki.addShip(surge);
        ishinomaki.addShip(highwind);
        expect(ishinomaki.ships).toEqual([surge, highwind]);
    });
});

describe('removeShip', () => {
    //This test passes if the ships contain exactly the same properties and values so added name to test it actually works - Need to think of a way of testing this without this work around.
    it('Removes a ship from the ships array', () => {
        ishinomaki.addShip(surge);
        ishinomaki.addShip(highwind);
        ishinomaki.removeShip(surge);
        expect(ishinomaki.ships).toEqual([highwind]);
    });
})

