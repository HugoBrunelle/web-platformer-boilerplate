import IActor from "../interfaces/IActor";

export default class State {
    level: any;
    actors: IActor[];
    status: string;

    constructor(level: any, actors: IActor[], status: string) {
        this.level = level;
        this.actors = actors;
        this.status = status;
    }

    static start(level: any) {
        return new State(level, level.Actors, "playing");
    }

    get player() {
        return this.actors.filter((a: IActor) => a.type() == "player");
    }
}