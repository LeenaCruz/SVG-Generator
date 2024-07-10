const {Circle, Square, Triangle} = require("./lib/shapes.js");

//Test Circle shape render
describe('Circle', () => {
    test('Render circle', () => {
        const circle = new Circle ();
expect(circle.toEqual( `<circle cx="100" cy="100" r="100" width="100%" height="100%" fill="${this.shapeColor}"/>`))

}) 
});