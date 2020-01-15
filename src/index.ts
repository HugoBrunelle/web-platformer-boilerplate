import State from "./components/engine/State";
import Player from "./components/actors/Player";
import Food from "./components/actors/Food";
import Vec from "./components/utils/Vec";

let player = new Player(new Vec(0,0), new Vec(0,0));
let food = new Food(new Vec(0,0), new Vec(0,0), 10);
console.log(player.type);
