import { XAppButton } from 'ait-bpd-common';
import Controller from '../Controller';
import {
     buildUiList
    ,textDarkBlock
    ,shadeTextBlock
    ,exampleBlockContent
    ,implementScrollUp
    ,activeSearchInput
} from './ElementCollections';
import { ButtonElement, CheckBoxElement, HStack, InputElement, SelectElement, Table, TextElement, VStack } from 'ait-bpd-common-core';




class CenterBlock extends Controller {

    descTexto = "El elemento <b>TextElement</b>, representa un elemento de control para la edición de texto sin formato.<br><br>Este elemento tiene dos parametros: <b>text:</b> tipo <em>string</em>, el cual es requerido, y <b>options:</b> tipo <em>TextElementOptions</em>, el cual es opcional.<br><br>Las opciones disponibles de tipo <em>TextElementOptions</em> son:  <b>alignment</b>, <b>class</b> y <b>node</b>"
    descButton = "El elemento <b>ButtonElement</b> representa un elemento cliqueable de tipo botón que puede ser utilizado en formularios o en cualquier parte de la página que necesite un botón.<br><br> Este elemento tiene dos parametros: <b>content:</b> de tipo <em>AITElement</em> o de tipo <em>HTMLElement</em>, el cual es requerido, y <b>options:</b> de tipo <em>ButtonElementOptions</em>, el cual es opcional.<br><br> Las opciones disponibles de tipo <em>ButtonElementOptions</em> son: <b>type</b>, <b>disabled</b>, <b>class</b>, <b>node</b> y <b>target</b>"
    descXButton = "El elemento <b>XAppButton</b> representa un elemento cliqueable de tipo botón que puede ser utilizado en formularios o en cualquier parte de la página que necesite un botón.<br><br> Este elemento tiene un parametro requerido: <b>config:</b> de tipo <em>XAppButtonActionConfig</em>.<br><br> Las opciones disponibles de tipo <em>XAppButtonActionConfig</em> son: <b>icon</b>, <b>type</b>, <b>text</b>, <b>disabled</b> y <b>size</b>"
    descDiv = "El elemento <b>DivElement</b> no existe"
    descVStack = "El elemento <b>VStack</b> representa un elemento que puede ser utilizado para crear secciones o agrupar contenidos con orientación vértical.<br><br> Este elemento tiene dos parametros: <b>elements:</b> un arreglo de tipo <em>HTMLElement</em> o de tipo <em>AITElement</em>, el cual es requerido, y <b>options:</b> de tipo <em>VStackConstructorOptions</em>, el cual es opcional.<br><br> Las opciones de tipo <em>VStackConstructorOptions</em> son: <b>type</b>, <b>node</b> y <b>class</b>"
    descHStack = "El elemento <b>HStack</b> representa un elemento que puede ser utilizado para crear secciones o agrupar contenidos con orientación horizontal.<br><br> Este elemento tiene dos parametros: <b>elements:</b> un arreglo de tipo <em>HTMLElement</em> o de tipo <em>AITElement</em>, el cual es requerido, y <b>options:</b> de tipo <em>HStackConstructorOptions</em>, el cual es opcional.<br><br> Las opciones de tipo <em>HStackConstructorOptions</em> son: <b>type</b>, <b>node</b> y <b>class</b>"
    descTable = "El Elemento <b>Table</b> representa un elemento para agrupar datos en dos o mas dimensiones.<br><br> Este elemento tiene dos objetos como parametros: <b>columns</b>, el cual es requerido, y <b>options:</b>, el cual es opcional.<br><br>El objeto <em>columns</em> tiene como parametros requeridos: <b>header:</b> de tipo <em>TableColumnHeaderOptions</em> y <b>data:</b>, el cual a su vez es un objeto formado por <b>_row:</b> de tipo <em>RowType</em>, <b>_id:</b> de tipo <em>number</em>.<br><br>En el parametro options solo existe un parametro: <b>outsideBorder:</b>de tipo <em>boolean</em>"
    descSelect = "El elemento <b>SelectElement</b> representa un elemento de control que muestra un menú de opciones<br><br>Este elemento tiene un parametro opcional llamado <b>options:</b> de tipo <em>AITSelectOptions</em>.<br><br>Las opciones disponibles de tipo <em>AITSelectOptions</em> son: <b>buttonIcon:</b> de tipo <em>HTMLElement</em> o de tipo <em>AITElement</em>, <b>title:</b> de tipo <em>string</em>, <b>placeholder:</b> de tipo <em>string</em> y un metodo <b>setValue:</b> con parametros <b>select:</b> de tipo <em>SelectElement</em> y <b>value:</b> de tipo <em>string</em>"
    descInput = "El elemento <b>InputElement</b> representa un elemento que se puede usar para crear controles interactivos, con el fin de recibir datos del usuario.<br><br>Este elemento tiene un parametro opcional llamado <b>options:</b> de tipo <em>InputElementOptions</em>.<br><br>Las opciones disponibles de tipo son: un metodo <b>setValue:</b> con los parametros: <b>select:</b> de tipo <em>InputElement</em> y <b>value:</b> de tipo <em>string</em>, <b>placeholder:</b> de tipo <em>string</em>, <b>alignment?:</b> de tipo <em>TextAlignment</em>, <b>prefix?:</b> de tipo <em>InputElementPrefix</em>, <b>maxLength:</b> de tipo <em>number</em>, <b>typeNumber:</b> de <em>tipo boolean</em>"
    descCheckbox = ""
    stylei = "text-cyan-300";
    stylev = "text-teal-300";
    stylel = "text-red-300";
    styler = "text-purple-300";
    stylen = "text-blue-400";
    stylef = "text-yellow-300";
    
    constructor() {
        super();

        this.center && implementScrollUp(this.center);
        this.left && activeSearchInput(this.left);
    }

    initPage() {
        console.log("Welcome to Siebel StoryBoard!!!");
            
        this.BList();
        this.shadeText("Texto");
        this.exmapleContentText("texto");
        this.shadeText("Button");
        this.exmapleContentButton("button");
        this.shadeText("X-Button");
        this.exmapleContentXButton("x-button");
        this.shadeText("Div");
        this.exmapleContentDiv("div");
        this.shadeText("VStack");
        this.exmapleContentVStack("vstack");
        this.shadeText("HStack");
        this.exmapleContentHStack("hstack");
        this.shadeText("Table");
        this.exmapleContentTable("table");
        this.shadeText("Select");
        this.exmapleContentSelect("select");
        this.shadeText("input");
        this.exmapleContentInput("input");
    }

    BList() {
        let items = [
            { name: 'Texto', href: 'texto',icon: 'fa fa-caret-right text' },
            { name: 'Button', href: 'button',icon: 'fa fa-caret-right' },
            { name: 'X-Button', href: 'x-button',icon: 'fa fa-caret-right' },
            { name: 'Div', href: 'div',icon: 'fa fa-caret-right' },
            { name: 'VStack', href: 'vstack',icon: 'fa fa-caret-right' },
            { name: 'HStack', href: 'hstack',icon: 'fa fa-caret-right' },
            { name: 'Table', href: 'table',icon: 'fa fa-caret-right' },
            { name: 'Select', href: 'select',icon: 'fa fa-caret-right' },
            { name: 'Input', href: 'input',icon: 'fa fa-caret-right' },
            { name: 'Checkbox', href: 'checkbox',icon: 'fa fa-caret-right' },
        ]

        return buildUiList(items,this.left);
    }

    textBlock(str:string) {
        textDarkBlock(str,this.centerContainer);
    }

    shadeText(str:string,icon?:string) {
        shadeTextBlock(str,this.centerContainer,icon);
    }

    exmapleContentText(id:string) {
        let code = `
new TextElement("Hola a todos",{ 
    class: ["color-texto"] 
});
        `;
        
        let textElm = new TextElement("Hola a todos", { class: ["border","p-2","rounded"] });
        
        exampleBlockContent(this.descTexto,code,textElm,this.centerContainer,true,id);
    }

    exmapleContentButton(id:string) {
        let code = `
new ButtonElement("Click aquí",{
    target: () => {
        alert("hola cómo estas");
    },
    type: ButtonElementType.Primary,
    class: ["custom-css"]
});
        `;
        let output = `<b>output:</b> <button onclick="alert('hola cómo estas')" class="ml-[1em] transition px-3 py-[.35em] bg-red-500 hover:bg-red-600 text-white rounded-sm shadow">click aquí</button>`;

        exampleBlockContent(this.descButton,code,null,this.centerContainer,true,id);
    }

    exmapleContentXButton(id:string) {
        let code = `<x-app-button button-type="primary" button-text="Verificar" x-id="auth-verify-relation"></x-app-button>\n\n let btn = document.querySelector("x-app-button");\n\nbtn.onclick = () => alert("Hola a todos");`;
        let output = `<b>output:</b> <button onclick="alert('Hola a todos')" class="ml-[1em] bg-blue-700 hover:bg-blue-800 text-white rounded-sm px-3 py-1" id="auth-verify-relation">Verificar</button>`;

        let html = false
        exampleBlockContent(this.descXButton,code,null,this.centerContainer,html,id);
    }

    exmapleContentDiv(id:string) {
        let code = `
new DivElement(
    new TextElement("Saludos"),{
        class: ["custom-css"]
});
        `;
        let output = `<b>output:</b> <span class="ml-[1em] px-3 py-1 border border-gray-200">Saludos</span>`;

        exampleBlockContent(this.descDiv,code,null,this.centerContainer,true,id);
    }

    exmapleContentVStack(id:string) {
        let code = `
VStack([
    new TextElement("Uno"), 
    new TextElement("Dos"), 
    new TextElement("Tres"), 
],
    class: ["custom-css"]
);
        `;
        let output = `<div class="flex items-start">
            <b>output:</b> 
            <p class="ml-[1em] px-3 py-1 border border-gray-200 w-fit flex flex-col">
                <span>Uno</span>
                <span>Dos</span>
                <span>Tres</span>
            </p>
        </div>`;

        exampleBlockContent(this.descVStack,code,null,this.centerContainer,true,id);
    }

    exmapleContentHStack(id:string) {
        let code = `
HStack([
    new TextElement("Uno"),
    new TextElement("Dos"),
    new TextElement("Tres"),
],
    class: ["custom-css"]
);
        `;
        let output = `<div class="flex items-start">
            <b>output:</b> 
            <p class="ml-[1em] px-3 py-1 border border-gray-200 w-fit">
                <span>Uno</span>
                <span>Dos</span>
                <span>Tres</span>
            </p>
        </div>`;

        exampleBlockContent(this.descHStack,code,null,this.centerContainer,true,id);
    }

    exmapleContentTable(id:string) {
        let code = `
var tbl = Table<{
    id: string,
    name: string,
}>([
    {
        header: { title: "ID" },
        data: (_row) => {
            return new TextElement(_row.id);
        }
    },
    {
        header: { title: "Nombre" },
        data: (_row) => {
            return new TextElement(_row.name);
        }
    },
]);

// asigno valores a la tabla 
tbl.data = sourceData;
`;
        let output = `<div class="flex items-start">
            <b>output:</b> <table class="ml-[1em] border w-fit">
                <thead class="text-gray-700 bg-gray-100 border-b">
                    <tr class="text-xs">
                        <th class="px-4 py-2">ID</th>
                        <th class="px-4 py-2 text-left">Nombre</th>
                    </tr>
                </thead>
                <tbody class="text-xs">
                    <tr class="border-b">
                        <td class="px-4 py-2 text-center">1</td>
                        <td class="px-4 py-2">Davivienda</td>
                    </tr>
                    <tr class="border-b">
                        <td class="px-4 py-2 text-center">2</td>
                        <td class="px-4 py-2">Banreservas</td>
                    </tr>
                    <tr class="border-b">
                        <td class="px-4 py-2 text-center">3</td>
                        <td class="px-4 py-2">Banco Popular Dominicano</td>
                    </tr>
                </tbody>
            <table>
        </div>`;

        exampleBlockContent(this.descTable,code,null,this.centerContainer,true,id);
    }

    exmapleContentSelect(id:string) {
        let code = `
let slct = new SelectElement({
    tag: "relationType",
    title: "Relación",
    model: "relation",
    buttonIcon: new GenericIcon(
        IconDAV,
        { 
            class: [ "icon-rotate","reflect-horizontal"]
        }
    )
});

slct.data = [{ 
    name: "Valor 1",
    value: 1, 
}, { 
    name: "Valor 2",
    value: 2,
}, {
    name: "Valor 3",
    value: 3,
}];
        `;
        let output = `<div class="flex justify-start items-start">
            <b>output:</b> <div class="ml-[1em] flex flex-col">
                <b class="text-[10px]">Relación</b>
                <select class="border px-3 py-1">
                    <option value="0">Seleccione</option>
                    <option value="1">Valor 1</option>
                    <option value="2">Valor 2</option>
                    <option value="3">Valor 3</option>
                </select>
            </div>
        </div>`;
        exampleBlockContent(this.descSelect,code,null,this.centerContainer,true,id);
    }

    exmapleContentInput(id:string) {
        let code = `
let inpNumber = new InputElement({
    tag: "idNum",
    title: "Número de Identificación",
    model: "idNum",
    typeNumber: true,
    maxLength: 10
});

let inpText = new InputElement({
    tag: "idtext",
    title: "Nómbre",
    model: "name",
});
        `;
        let output = `<div class="flex flex-row">
            <b>output:</b> 
            <div class="ml-[1em] flex flex-col">
                <b class="text-[10px]">Número de identificación</b>
                <input type="number" value="0" max="10" min="0" class="outline-0 ring-1 ring-gray-400 px-4 py-1 w-full rounded text-sm"  />
            </div> 
            <div class="ml-[1em] flex flex-col">
                <b class="text-[10px]">Nómbre</b>
                <input type="text" class="outline-0 ring-1 ring-gray-400 px-4 py-1 w-full rounded text-sm"  />
            </div>
        </div>`;

        exampleBlockContent(this.descInput,code,null,this.centerContainer,true,id);
    }
}


export {
    CenterBlock
}