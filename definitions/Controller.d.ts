export default class Controller {
    root: HTMLElement;
    left: HTMLElement;
    center: HTMLElement;
    centerContainer: HTMLElement;
    right: HTMLElement;
    constructor();
    renderTemplate(container: HTMLElement, cb?: any): string;
}
