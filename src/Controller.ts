export default class Controller {

    document: Document;
    root: HTMLElement;
    left: HTMLElement;
    center: HTMLElement;
    centerContainer: HTMLElement;
    right: HTMLElement;

    constructor() {
        this.renderTemplate();

        this.document = document;
        this.root = this.document.getElementById('root');
        this.left = this.document.getElementById('left');
        this.center = this.document.getElementById('center');
        this.centerContainer = this.document.getElementById('center-container');
        this.right = this.document.getElementById('right');
    }

    renderTemplate(container?:HTMLElement,cb?:any) {
        let temp = document.getElementsByTagName('template')[0];
        let clon = temp.content.cloneNode(true);

        if(container != null)
        {
            container.appendChild(clon);
        }
        else
        {
            document.body.appendChild(clon);
        }


        cb && cb(container);
        
        return container;
    }

}