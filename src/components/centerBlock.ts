import Controller from '../Controller';
import { TextElement } from 'ait-bpd-common-core';
import {
     buildUiList
    ,textDarkBlock
    ,shadeTextBlock
    ,exampleBlockContent
    ,implementScrollUp
    ,activeSearchInput
} from './ElementCollections';


class CenterBlock extends Controller {

    lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nihil, harum quam exercitationem quidem impedit ea corrupti debitis officia eos maiores aliquam in incidunt minus illum corporis tenetur expedita pariatur."
    stylei = "text-cyan-300";
    stylev = "text-teal-300";
    stylel = "text-red-300";
    styler = "text-purple-300";
    stylen = "text-blue-400";
    stylef = "text-yellow-300";

    constructor() {
        super();
        implementScrollUp(this.center);
        activeSearchInput(this.left);
    }

    initPage() {
        console.log("Welcome to Siebel StoryBoard!!!");
        //this.shadeText("Indice",`<i class="fa fa-list"></i>`);
        this.BList();
        //this.textBlock("Códigos y ejemplos");
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

        buildUiList(items,this.left);
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
        //let output = `<b>output:</b> <span class="ml-[1em] text-gray-500">Hola a todos</span>`;
        let textElm = new TextElement("Hola a todos", { class: ["color-texto"] });

        exampleBlockContent(this.lorem,code,null,this.centerContainer,true,id).then(con => {
            let output = con.querySelector('.output');

            output.appendChild(textElm);
        });
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

        exampleBlockContent(this.lorem,code,output,this.centerContainer,true,id).then(con => {
            let right = con.querySelectorAll('.divided div')[1];
                right.classList.add('h-[14em]','w-[70%]');
        });
    }

    exmapleContentXButton(id:string) {
        let code = `<x-app-button button-type="primary" button-text="Verificar" x-id="auth-verify-relation"></x-app-button>\n\n let btn = document.querySelector("x-app-button");\n\nbtn.onclick = () => alert("Hola a todos");`;
        let output = `<b>output:</b> <button onclick="alert('Hola a todos')" class="ml-[1em] bg-blue-700 hover:bg-blue-800 text-white rounded-sm px-3 py-1" id="auth-verify-relation">Verificar</button>`;

        let html = false
        exampleBlockContent(this.lorem,code,output,this.centerContainer,html,id).then(con => {
            let right = con.querySelectorAll('.divided div')[1];
                right.classList.add('h-[17em]','w-[65%]')
        });
    }

    exmapleContentDiv(id:string) {
        let code = `
new DivElement(
    new TextElement("Saludos"),{
        class: ["custom-css"]
});
        `;
        let output = `<b>output:</b> <span class="ml-[1em] px-3 py-1 border border-gray-200">Saludos</span>`;

        exampleBlockContent(this.lorem,code,output,this.centerContainer,true,id).then(con => {
            let right = con.querySelectorAll('.divided div')[1];
                right.classList.add('h-[10em]')
        });
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

        exampleBlockContent(this.lorem,code,output,this.centerContainer,true,id).then(con => {
            let right = con.querySelectorAll('.divided div')[1];
                right.classList.add('h-[13em]')
        });
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

        exampleBlockContent(this.lorem,code,output,this.centerContainer,true,id).then(con => {
            let right = con.querySelectorAll('.divided div')[1];
                right.classList.add('h-[13em]')
        });
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

        exampleBlockContent(this.lorem,code,output,this.centerContainer,true,id).then(con => {
            let divided = con.querySelectorAll('.divided div');
            
            let left = divided[0];
                left.classList.add('w-[40%]')
                
            let right = divided[1];
                right.className = 'bg-gray-800 text-white rounded-lg p-3 flex items-center h-[20em] w-[22em] overflow-y-scroll overflow-x-scroll';
        });
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
        exampleBlockContent(this.lorem,code,output,this.centerContainer,true,id).then(con => {
            let divided = con.querySelectorAll('.divided div');

            let left = divided[0];
                left.classList.add('w-[30%]')

            let right = divided[1];
                right.classList.add('h-[18em]','w-[70%]','overflow-x-scroll')
        })
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

        exampleBlockContent(this.lorem,code,output,this.centerContainer,true,id).then(con => {
            let divided = con.querySelectorAll('.divided div');

            let left = divided[0];
                left.classList.add('w-[30%]')

            let right = divided[1];
                right.classList.add('h-[18em]','w-[70%]','overflow-x-scroll')
        });
    }
}


export {
    CenterBlock
}