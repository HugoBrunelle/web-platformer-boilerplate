export default function CreateElement(name: string, attrs?: Record<string, string>, children?: HTMLElement[]): HTMLElement {
    let dom = document.createElement(name);

    for (let attr of Object.keys(attrs)) {
        dom.setAttribute(attr, attrs[attr]);
    }

    for (let child of children) {
        dom.appendChild(child);
    }
    return dom;
}