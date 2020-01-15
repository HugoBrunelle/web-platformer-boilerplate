import Vec from "../utils/Vec";
import IActor from "../interfaces/IActor";

export default class Player implements IActor {
    size: Vec;
    speed: Vec;
    position: Vec;

    constructor(position: Vec, speed: Vec) {
        this.size = new Vec(0.8, 1.5);
        this.position = position;
        this.speed = speed;
    }

    type(): string | "player" { return "player" }

    static create(pos: Vec) {
        return new Player(pos.plus(new Vec(0, -0.5)), new Vec(0, 0));
    }
}