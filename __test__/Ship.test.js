const {Ship} = require("../src/cruise-ships")

let ship;

beforeEach(() => {
    ship = new Ship('Yokohama');
});

// As a cruise ship captain,
// So I can get passengers aboard a ship,
// I want a ship to have a starting port.
describe('constructor', () => {
    it("Creates new instance of the Ship object", () => {
        expect(ship).toBeInstanceOf(Ship);
    });
    it("Contains starting port equal to the value passed in as argument", () => {
        expect(ship).toEqual(expect.objectContaining({startingPort: 'Yokohama'}));
    });
    it('Takes a string as an argument only', () => {
        expect(() => {
            let ship2 = new Ship(9)
        }).toThrow('Please enter a valid port name');
    });
});

//Getting passengers aboard ?how will this work ?Counter or array of people <- probably better to be array but will passenger also be object? or just name
describe('boardPassenger', () => {
    it("Adds passenger to ship's passenger array", () => {
        ship.boardPassenger('Lando Norris');

        expect(ship.passengers).toEqual(['Lando Norris']);
    });
    it('Throws an error if no argument is passed in', () => {
        expect(() => {
            ship.boardPassenger();
        }).toThrow('Please enter a name to use this function');
    });
    it('Throws an error if a name containing < 2 letters is passed', () => {
        expect(() => {
            ship.boardPassenger('J');
        }).toThrow('Please enter a name to use this function');
    });
    it('Throws an error is a number is passed in as a name, even if it is a string', () => {
        expect(() => {
            ship.boardPassenger(888);
        }).toThrow('Please enter a name to use this function');
        expect(() => {
            ship.boardPassenger(8);
        }).toThrow('Please enter a name to use this function');
    });
    it('Throws an error if there a number anywhere in the argument', () => {
        expect(() => {
            ship.boardPassenger('f7643');
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
})
