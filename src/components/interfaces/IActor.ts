import Vec from '../utils/Vec';

export default interface IActor {
    size: Vec;
    speed: Vec;
    position: Vec;
    type(): string;
}