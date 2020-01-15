import Level from './Level';
import createElement from '../utils/createElement';

export default class DOMDisplay {
    dom: HTMLElement;
    level: Level;
    actorLayer: any;
    tileSize: number;
    parent: HTMLElement;

    constructor(parent: HTMLElement) {
        this.tileSize = 20;
        this.dom = createElement("div", {class: "game"}, [this.drawGrid(this.level)]);
        this.actorLayer = null;
        parent.appendChild(this.dom);
    }

    clear() { this.dom.remove() }

    drawGrid(level: Level) {
        return createElement("table", {
            class: "background",
            style: `width: ${level.width * this.tileSize}px`
        }, level.rows.map(row => // ...
            createElement("tr", {style: `height: ${this.tileSize}px`},
                row.map(type => createElement("td", {class: type}))) // ...
        ));
    }
}