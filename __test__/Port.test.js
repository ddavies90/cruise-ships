const {Port} = require("../src/cruise-ships");

let port;

beforeEach(() => {
    port = new Port('Ishinomaki');
});

describe('constructor', () => {
    it('Creates new instance of the Port object', () => {
        expect(port).toBeInstanceOf(Port);
    });
    it('Takes a string as an argument only', () => {
        expect(() => {
            let port2 = new Port(8382)
        }).toThrow('Please enter a valid port name');
    });
});

