import XTagElement from './x-tag-element';

declare class Xtag {

    static create(tagName: string, klass: any): void;

    static addEvent(element: XTagElement, type: string, handler: (event:Event) => void, capture?:boolean): void;

}