export default class Vec {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    plus(vec: Vec) {
        return new Vec(this.x + vec.x, this.y + vec.y);
    }

    times(factor: number) {
        return new Vec(this.y * factor, this.x * factor);
    }
}