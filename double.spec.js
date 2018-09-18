const double = require("./double");

it('double of 1 is 2', () => {
    expect(double(1)).toBe(2);
});

it('double of 3 is 6', () => {
    expect(double(3)).toBe(6);
});

it('double gets error with string input', () => {
    // TODO: write me!
    expect(double('3')).toBe(6);
});

// TODO: add one more test case
it('double of 4 is 8', () => {
    expect(double(4)).toBe(8);
});