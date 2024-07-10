

class Shapes {
    constructor(text, fontColor,shapeColor) {
   this.fontColor = fontColor
    this.shapeColor = shapeColor;
    this.text = text;
} 
render () {
    throw new Error ("Error");
}
}


class Circle extends Shapes {
    constructor (text, fontColor, shapeColor) {
        super(text,fontColor,shapeColor);
    }
render() {
    return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="100" width="100%" height="100%" fill="${this.shapeColor}" />
    <text x="100" y="100" fill="${this.fontColor}" font-size="20px" text-anchor="middle" alignment-baseline="middle">${this.text}</text></svg>`
}
}

class Square extends Shapes { 
    render () {
        return `  <rect x="10" y="10" width="30" height="30"  fill="${this.color}"/> `
    }
}

class Triangle extends Shapes { 
    render () {
        return `  <polygon points="150, 18 244, 182 56, 182"  fill="${this.color}"/> `
    }
}



module.exports = {Circle, Square, Triangle};

