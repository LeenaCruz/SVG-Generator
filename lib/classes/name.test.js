const Logo = require("../logo.js")

describe('Logo', () => {
    //A test to check if the save has 3 letters
    describe('name', () => {
        it ('Should check that logo name is 3 letters or less', () => {
            const total= 3;
            const name = new Name();
            expect(name.lenght >3).toEqual(total);
        });

    });
})