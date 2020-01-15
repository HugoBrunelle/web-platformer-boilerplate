import Vec from "../utils/Vec";
import IActor from "../interfaces/IActor";

export default class Food implements IActor {
    size: Vec;
    position: Vec;
    speed: Vec;
    wobble: number;

    constructor(position: Vec, basePos: Vec, wobble: number) {
        this.position = position;
        this.speed = new Vec(0, 0);
        this.size = new Vec(0.6, 0.6);
        this.wobble = wobble;
    }

    type(): string | "food" { return "food" }

    static create(position: Vec) {
        let basePos = position.plus(new Vec(0.2, 0.1));
        return new Food(basePos, basePos, Math.random() * Math.PI * 2);
    }
}