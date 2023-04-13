

export default class Controller {

    document: Document = document;
    root: HTMLElement;
    left: HTMLElement;
    center: HTMLElement;
    right: HTMLElement;

    constructor() {
        this.renderTemplate();
        
        this.root = this.document.getElementById('root');
        this.left = this.document.getElementById('left');
        this.center = this.document.getElementById('center');
        this.right = this.document.getElementById('right');
    }

    renderTemplate() {
        let temp = this.document.getElementsByTagName('template')[0];
        let clon = temp.content.cloneNode(true);

        this.document.body.appendChild(clon);
    }

}