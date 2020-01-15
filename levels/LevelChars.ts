import Player from "../src/components/actors/Player";
import Food from "../src/components/actors/Food";
import Grease from "../src/components/actors/Grease";

const LevelChars: Record<string, any> = {
    ".": "empty",
    "#": "wall",
    "+": "grease",
    "@": Player,
    "o": Food,
    "=": Grease,
    "|": Grease,
    "v": Grease
};

export default LevelChars;