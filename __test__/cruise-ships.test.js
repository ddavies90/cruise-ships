const {Ship} = require("../src/cruise-ships")

let ship;
let port;

beforeEach(() => {
    ship = new Ship('Yokohama');
    port = new Port('Yokohama');
});

// As a cruise ship captain,
// So I can get passengers aboard a ship,
// I want a ship to have a starting port.
describe('Ship constructor', () => {
    it("Creates new instance of the Ship object", () => {
        expect(ship).toBeInstanceOf(Ship);
    });

    it("Contains starting port equal to the value passed in as argument", () => {
        expect(ship).toEqual(expect.objectContaining({startingPort: 'Yokohama'}));
    });

//Getting passengers aboard ?how will this work ?Counter or array of people <- probably better to be array but will passenger also be object? or just name

    it("Adds passenger to ship's passenger array", () => {
        ship.boardPassenger('Jeff');

        expect(ship.passengers).toEqual(["Jeff"]);
    });


// As a cruise ship captain,
// So I can get passengers started on their journey,
// I want a ship to be able to set sail from a port.
    it("Sets sail from dock", () => {
        ship.setSail();

        expect(ship.isDocked).toEqual(false);
    });
});