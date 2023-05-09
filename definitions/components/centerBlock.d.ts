import Controller from '../Controller';
declare class CenterBlock extends Controller {
    lorem: string;
    stylei: string;
    stylev: string;
    stylel: string;
    styler: string;
    stylen: string;
    stylef: string;
    constructor();
    initPage(): void;
    BList(): void;
    textBlock(str: string): void;
    shadeText(str: string, icon?: string): void;
    exmapleContentText(id: string): void;
    exmapleContentButton(id: string): void;
    exmapleContentXButton(id: string): void;
    exmapleContentDiv(id: string): void;
    exmapleContentVStack(id: string): void;
    exmapleContentHStack(id: string): void;
    exmapleContentTable(id: string): void;
    exmapleContentSelect(id: string): void;
    exmapleContentInput(id: string): void;
}
export { CenterBlock };
