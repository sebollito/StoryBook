declare const activeSearchInput: (parent: HTMLElement) => void;
declare const implementScrollUp: (parent?: HTMLElement) => Promise<void>;
declare const buildUiList: (items: any, parent?: HTMLElement) => string;
declare const textDarkBlock: (str: string, parent: HTMLElement) => Promise<HTMLDivElement>;
declare const shadeTextBlock: (str: string, parent: HTMLElement, icon?: string) => Promise<HTMLDivElement>;
declare const exampleBlockContent: (str: string, code: string, output?: string, parent?: HTMLElement, html?: boolean, id?: string) => Promise<HTMLDivElement>;
export { buildUiList, textDarkBlock, shadeTextBlock, exampleBlockContent, implementScrollUp, activeSearchInput };
