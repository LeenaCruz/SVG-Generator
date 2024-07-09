

class Shapes {
    constructor(name, fontColor, shape, color) {
    this.name = name,
    this.fontColor = fontColor,
    this.shape = shape,
    this.color = color,
}};


class Circle extends Shapes {
render() {
    return `<circle cx="50" cy="50" r="100" fill="${this.color} />`
}
}

module.exports = Circle;

