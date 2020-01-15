import Vec from '../utils/Vec';
import LevelChars from '../../../levels/LevelChars';

export default class Level {
    width: number;
    height: number;
    startActors: Array<string>;
    rows: Array<Array<string>>;

    constructor(plan: string) {
        let rows = plan.trim().split('\n').map(
            row  => row.split('')
        );
        this.width = rows[0].length;
        this.height = rows.length;
        this.startActors = [];

        rows.map((row: Array<string>, y: number) => {
            return row.map((ch: string, x: number) => {
                let tileType: any = LevelChars[ch];
                if (tileType == 'string') return tileType;
                this.startActors.push(tileType.create(new Vec(x, y), ch));
                return "emtpy";
            });
        });
    }
}