const { TestScheduler } = require("@jest/core");
const {Ship, Port} = require("../src/cruise-ships")

let ship;
let port;

beforeEach(() => {
    port = new Port('Yokohama')
    ship = new Ship(port);
});

// As a cruise ship captain,
// So I can get passengers aboard a ship,
// I want a ship to have a starting port.
describe('constructor', () => {
    it('Creates new instance of the Ship object', () => {
        expect(ship).toBeInstanceOf(Ship);
    });
    it('Contains starting port equal to the name property of the object passed in as argument', () => {
        expect(ship).toEqual(expect.objectContaining({startingPort: 'Yokohama'}));
    });
    it('Throws an error if it does not receive a Port object as argument', () => {
        expect(() => {
            const ship2 = new Ship('JLB Credit');
        }).toThrow('Please pass in a valid port object')
    });
    it('Throws an error if object is not a port instance', () => {
        const port2 = {name: 'Jeff', age: 3};
        expect(() => {
            const ship2 = new Ship(port2);
        }).toThrow('Please pass in a valid port object');
    });
});

//Getting passengers aboard ?how will this work ?Counter or array of people <- probably better to be array but will passenger also be object? or just name
describe('boardPassenger', () => {
    it("Adds passenger to ship's passenger array", () => {
        ship.boardPassenger = 'Lando Norris';

        expect(ship.passengers).toEqual(['Lando Norris']);
    });
    it('Throws an error if empty string is passed in', () => {
        expect(() => {
            ship.boardPassenger = '';
        }).toThrow('Please enter a name to use this function');
    });
    it('Throws an error if a name containing < 2 letters is passed', () => {
        expect(() => {
            ship.boardPassenger = 'J';
        }).toThrow('Please enter a name to use this function');
    });
    it('Throws an error is a number is passed in as a name, even if it is a string', () => {
        expect(() => {
            ship.boardPassenger = '888';
        }).toThrow('Please enter a name to use this function');
        expect(() => {
            ship.boardPassenger = 8;
        }).toThrow('Please enter a name to use this function');
    });
    it('Throws an error if there a number anywhere in the passed string', () => {
        expect(() => {
            ship.boardPassenger = 'f7643';
        }).toThrow('Please enter a name to use this function');
    });
});

describe('setSail', () => {
    it('isDocked Has a starting state of true', () => {
        expect(ship.isDocked).toBe(true);
    });
    it('On setting sail, isDocked should now be false', ()=> {
        ship.setSail();
        expect(ship.isDocked).toBe(false);
    });
});

describe('dock', () => {
    it('Changes startingPort to value of name property of new port', () => {
        const port2 = new Port('Ishinomaki');
        ship.dock = port2;

        expect(ship.startingPort).toBe('Ishinomaki');
    });
    it('Throws an error if the object is not an instance of the port class', () => {
        let port2 = {name: 'Jeff', passengers: [], isDocked: true};
        
        expect(() => {
            ship.dock = port2;
        }).toThrow('Please pass in a valid port object');
    });
});