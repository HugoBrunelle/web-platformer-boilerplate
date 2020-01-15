import Vec from "../utils/Vec";
import IActor from "../interfaces/IActor";

export default class Grease implements IActor {
    size: Vec;
    position: Vec;
    speed: Vec;
    reset: Vec;

    constructor(position: Vec, speed: Vec, reset?: Vec) {
        this.size = new Vec(1, 1);
        this.position = position;
        this.speed = speed;

        if (reset) this.reset = reset;
    }

    type() { return "grease" }

    static create(position: Vec, tile: string): Grease {
        if (tile == "=") return new Grease(position, new Vec(2, 0));
        if (tile == "|") return new Grease(position, new Vec(0, 2));
        if (tile == "v") return new Grease(position, new Vec(0, 3), position);
    }
}