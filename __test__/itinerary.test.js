const Itinerary = require('../src/itinerary');

let schedule;
let okinawa;
let yokohama;

beforeEach(() => {
    yokohama = {name: 'Yokohama'};
    okinawa = {name: 'Okinawa'}
    schedule = new Itinerary([yokohama, okinawa]);
});

describe('constructor', () => {
    it('Creates a new instance of the Itinerary object', () => {
        expect(schedule).toBeInstanceOf(Itinerary);
    });
    it('Takes an array of ports as argument and sets this to ports property', () => {
        expect(schedule.ports).toEqual([yokohama, okinawa]);
    });
});