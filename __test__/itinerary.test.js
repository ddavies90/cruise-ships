const {Itinerary, Port} = require('../src/cruise-ships');

let schedule;
let okinawa;
let yokohama;

beforeEach(() => {
    yokohama = new Port('Yokohama');
    okinawa = new Port ('Okinawa')
    schedule = new Itinerary([yokohama, okinawa]);
});

describe('constructor', () => {
    it('Creates a new instance of the Itinerary object', () => {
        expect(schedule).toBeInstanceOf(Itinerary);
    })
    it('Takes an array of ports as argument and sets this to ports property', () => {
        expect(schedule.ports).toEqual([yokohama, okinawa]);
    })
})