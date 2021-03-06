const Ship = require("../src/ship");

let schedule;
let ship;
let okinawa;
let miyajima;
let dover;
let itin;

beforeEach(() => {
    okinawa = {name: 'Okinawa', addShip: jest.fn(), removeShip: jest.fn(), ships: []};
    miyajima = {name: 'Miyajima', addShip: jest.fn(), removeShip: jest.fn(), ships: []};
    schedule = {ports: [okinawa, miyajima]};
    ship = new Ship('Highwind', schedule);
});

beforeAll(() => {
    dover = {name: 'Dover', ships: [], addShip: jest.fn()};
    itin = {ports: [dover]};
});

describe('constructor', () => {
    it('Creates new instance of the Ship object', () => {
        expect(ship).toBeInstanceOf(Ship);
    });
    it('passengers array starts empty', () => {
        expect(ship.passengers).toEqual([]);
    });
    it('Contains currentPort property equal to the first port object in the itinerary passed in as argument', () => {
        expect(ship).toEqual(expect.objectContaining({currentPort: okinawa}));
    });
    it('Throws an error if it receives a falsy argument or does not receive a string as the name argument', () => {
        expect(() => {
            const failShip = new Ship(888, schedule);
        }).toThrow('Please pass in valid arguments');
        expect(() => {
            const failShipMk2 = new Ship('', schedule);
        }).toThrow('Please pass in valid arguments');
    });
    it('Throws an error if it receives a falsy argument or does not receive an object as the itinerary argument', () => {
        expect(() => {
            const failShipMk3 = new Ship('Ragnarok', 'JLB Credit');
        }).toThrow('Please pass in valid arguments');
        expect(() => {
            const failShipMk4 = new Ship('Ragnarok');
        }).toThrow('Please pass in valid arguments');
    });
    it('Adds ship to the port ports array when instantiated', () => {
        const ship2 = new Ship('HMS Pepe', itin);
        expect(ship2.currentPort.addShip).toHaveBeenCalledWith(ship2);
    })
});


describe('boardPassenger', () => {
    it("Adds passenger to ship's passenger array", () => {
        ship.boardPassenger = 'Lando Norris';

        expect(ship.passengers).toEqual(['Lando Norris']);
    });
    it('Throws an error if empty string is passed in', () => {
        expect(() => {
            ship.boardPassenger = '';
        }).toThrow('Please enter a valid name');
    });
    it('Throws an error if a name containing < 2 letters is passed', () => {
        expect(() => {
            ship.boardPassenger = 'J';
        }).toThrow('Please enter a valid name');
    });
    it('Throws an error is a number is passed in as a name, even if it is a string', () => {
        expect(() => {
            ship.boardPassenger = '888';
        }).toThrow('Please enter a valid name');
        expect(() => {
            ship.boardPassenger = 8;
        }).toThrow('Please enter a valid name');
    });
    it('Throws an error if there a number anywhere in the passed string', () => {
        expect(() => {
            ship.boardPassenger = 'f7643';
        }).toThrow('Please enter a valid name');
    });
});

describe('setSail', () => {
    it('previousPort is set to the name of port the ship is departing from', () => {
        ship.setSail();
        expect(ship.previousPort).toBe(okinawa);    
    });
    it('Sets currentPort to null when setting sail', () => {
        ship.setSail();
        expect(ship.currentPort).toBe(null);
    });
    it('Calls removeShip on the port object the ship is departing from', () => {
        ship.setSail();
        expect(ship.previousPort.removeShip).toHaveBeenCalledWith(ship);
    });
    it('Throws an error when the next item in the ports array is undefined - no destination!', () => {
        ship.currentPort = schedule.ports[1];
        expect(() => {
            ship.setSail();
        }).toThrow('The ship can not leave the dock without a destination');
    });
});

describe('dock', () => {
    it('Changes currentPort object to be next indexed item in itinerary', () => {
        ship.setSail();
        ship.dock();
        expect(ship.currentPort).toBe(miyajima);
    });
    it('Adds ship to ports array on the port object', () =>
    {
        ship.setSail();
        ship.dock();
        expect(ship.currentPort.addShip).toHaveBeenCalledWith(ship);
    });
    it('Will not dock if already docked', () => {
        expect(() => {
            ship.dock();
        }).toThrow('The ship is already docked');
    });
});