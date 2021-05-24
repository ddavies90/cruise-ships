const { TestScheduler } = require("@jest/core");
const {Ship, Port, Itinerary} = require("../src/cruise-ships")

let schedule;
let ship;
let yokohama;
let okinawa;
let miyajima;

beforeEach(() => {
    yokohama = new Port('Yokohama');
    okinawa = new Port('Okinawa');
    miyajima = new Port('Miyajima');
    schedule = new Itinerary([okinawa, miyajima]);
    ship = new Ship(yokohama, schedule);
});

// As a cruise ship captain,
// So I can get passengers aboard a ship,
// I want a ship to have a starting port.
describe('constructor', () => {
    it('Creates new instance of the Ship object', () => {
        expect(ship).toBeInstanceOf(Ship);
    });
    it('passengers array starts empty', () => {
        expect(ship.passengers).toEqual([]);
    });
    it('isDocked Has a starting state of true', () => {
        expect(ship.isDocked).toBe(true);
    });
    it('Contains starting port equal to the port object passed in as argument', () => {
        expect(ship).toEqual(expect.objectContaining({currentPort: yokohama}));
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
    it('On setting sail, isDocked should now be false', ()=> {
        ship.setSail = okinawa;
        expect(ship.isDocked).toBe(false);
    });
    it('previousPort is set to the name of port the ship is departing from', () => {
        ship.setSail = ship.currentPort;
        expect(ship.previousPort).toBe(yokohama)
    });
    //Add test to check if currentPort is now null
});

describe('dock', () => {
    it('Changes currentPort object to be first item in itinerary', () => {
        ship.dock();
        expect(ship.currentPort).toBe(okinawa);
    });
});