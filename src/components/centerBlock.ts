import Controller from '../Controller'
import { XAppButton } from 'ait-bpd-common';
import { buildUiList,textDarkBlock,shadeTextBlock, exampleBlockContent } from './ElementCollections';


class CenterBlock extends Controller {

    lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nihil, harum quam exercitationem quidem impedit ea corrupti debitis officia eos maiores aliquam in incidunt minus illum corporis tenetur expedita pariatur."

    constructor() {
        super();
    }

    initPage() {
        console.log("Welcome to Siebel StoryBoard!!!");
        this.shadeText("Indice",'<i class="fa fa-list"></i>');
        this.BList();
        this.textBlock();
        this.shadeText("Texto");
        this.exmapleContentText();
        this.shadeText("Button");
        this.exmapleContentButton();
        this.shadeText("X-Button");
        this.exmapleContentXButton();
        this.shadeText("Div");
        this.exmapleContentDiv();
        this.shadeText("VStack");
        this.exmapleContentVStack();
        this.shadeText("HStack");
        this.exmapleContentHStack();
        this.shadeText("Table");
        this.exmapleContentTable();
    }

    BList() {
        let items = [
            { name: 'Texto', href: 'texto'},
            { name: 'Button', href: 'button' },
            { name: 'X-Button', href: 'x-button' },
            { name: 'Div', href: 'div' },
            { name: 'VStack', href: 'vstack' },
            { name: 'HStack', href: 'hstack' },
            { name: 'Table', href: 'table' },
            { name: 'Select', href: 'select' },
        ]

        buildUiList(items,this.center);
    }

    textBlock() {
        let str = "Códigos y ejemplos";
        textDarkBlock(str,this.center);
    }

    shadeText(str:string,icon?:string) {
        shadeTextBlock(str,this.center,icon);
    }

    exmapleContentText() {
        let code = `
            <i class="text-blue-500">new</i> <b class="text-teal-500">TextElement</b>(<i class="text-red-300">"Hola a todos"</i>,{ <br>
                <i class="text-cyan-300 ml-[1em]">class</i>: [<i class="text-red-300">"color-texto"</i>] <br>
            });
        `;
        let output = `<b>output:</b> <span class="ml-[1em] text-gray-500">Hola a todos</span>`;

        exampleBlockContent(this.lorem,code,output,this.center);
    }

    exmapleContentButton() {
        let code = `
            <i class="text-blue-500">new</i> <b class="text-teal-500">ButtonElement</b>(<i class="text-red-300">"Click aquí"</i>,{ <br>
                <div class="ml-[1em]">
                    <i class="text-yellow-300">target:</i> () => { <br>
                        <i class="text-yellow-300 ml-[1em]">alert</i>(<i class="text-red-300">"hola cómo estas"</i>); <br>
                    }, <br>
                    <i class="text-cyan-300">type</i>: <i class="text-teal-300">ButtonElementType</i>.<i class="text-cyan-300">Primary</i>, <br>
                    <i class="text-cyan-300">class</i>: [<i class="text-red-300">"custom-css"</i>] <br>
                </div>
            });
        `;
        let output = `<b>output:</b> <button onclick="alert('hola cómo estas')" class="ml-[1em] transition px-3 py-[.35em] bg-red-500 hover:bg-red-600 text-white rounded-sm shadow">click aquí</button>`;

        exampleBlockContent(this.lorem,code,output,this.center).then(con => {
            let right = con.querySelectorAll('.divided div')[1];
                right.classList.add('h-[14em]');
        });
    }

    exmapleContentXButton() {
        let code = `<x-app-button button-type="primary" button-text="Verificar" x-id="auth-verify-relation"></x-app-button>\n\n let btn = document.querySelector("x-app-button");\n\nbtn.onclick = () => alert("Hola a todos");`;
        let output = `<b>output:</b> <button onclick="alert('Hola a todos')" class="ml-[1em] bg-blue-700 hover:bg-blue-800 text-white rounded-sm px-3 py-1" id="auth-verify-relation">Verificar</button>`;

        let html = false
        exampleBlockContent(this.lorem,code,output,this.center,html).then(con => {
            let right = con.querySelectorAll('.divided div')[1];
                right.classList.add('h-[17em]')
        });
    }

    exmapleContentDiv() {
        let code = `<i class="text-blue-500">new</i> <b class="text-teal-300">DivElement</b>(<br>
            <i class="text-blue-500 ml-4">new</i> <span class="text-teal-300">TextElement</span>(<i class="text-red-300">"Saludos"</i>),{<br>
            <div class="ml-[1em]">
                <i class="text-cyan-300">class</i>: [<i class="text-red-300">"custom-css"</i>] <br>
            </div>
        });`;
        let output = `<b>output:</b> <span class="ml-[1em] px-3 py-1 border border-gray-200">Saludos</span>`;

        exampleBlockContent(this.lorem,code,output,this.center).then(con => {
            let right = con.querySelectorAll('.divided div')[1];
                right.classList.add('h-[10em]')
        });
    }

    exmapleContentVStack() {
        let code = `<span class="text-yellow-400">VStack</span>([<br>
            <i class="text-blue-500 ml-[1em]">new</i> <i class="text-teal-300">TextElement</i>(<i class="text-red-300">"Uno"</i>), <br>
            <i class="text-blue-500 ml-[1em]">new</i> <i class="text-teal-300">TextElement</i>(<i class="text-red-300">"Dos"</i>), <br>
            <i class="text-blue-500 ml-[1em]">new</i> <i class="text-teal-300">TextElement</i>(<i class="text-red-300">"Tres"</i>), <br>
        ],<br>
            <i class="text-cyan-300 ml-[1em]">class</i>: [<i class="text-red-300">"custom-css"</i>] <br>
        );`;
        let output = `<div class="flex items-start">
            <b>output:</b> 
            <p class="ml-[1em] px-3 py-1 border border-gray-200 w-fit flex flex-col">
                <span>Uno</span>
                <span>Dos</span>
                <span>Tres</span>
            </p>
        </div>`;

        exampleBlockContent(this.lorem,code,output,this.center).then(con => {
            let right = con.querySelectorAll('.divided div')[1];
                right.classList.add('h-[13em]')
        });
    }

    exmapleContentHStack() {
        let code = `<span class="text-yellow-400">HStack</span>([<br>
            <i class="text-blue-500 ml-[1em]">new</i> <i class="text-teal-300">TextElement</i>(<i class="text-red-300">"Uno"</i>), <br>
            <i class="text-blue-500 ml-[1em]">new</i> <i class="text-teal-300">TextElement</i>(<i class="text-red-300">"Dos"</i>), <br>
            <i class="text-blue-500 ml-[1em]">new</i> <i class="text-teal-300">TextElement</i>(<i class="text-red-300">"Tres"</i>), <br>
        ],<br>
            <i class="text-cyan-300 ml-[1em]">class</i>: [<i class="text-red-300">"custom-css"</i>] <br>
        );`;
        let output = `<div class="flex items-start">
            <b>output:</b> 
            <p class="ml-[1em] px-3 py-1 border border-gray-200 w-fit">
                <span>Uno</span>
                <span>Dos</span>
                <span>Tres</span>
            </p>
        </div>`;

        exampleBlockContent(this.lorem,code,output,this.center).then(con => {
            let right = con.querySelectorAll('.divided div')[1];
                right.classList.add('h-[13em]')
        });
    }

    exmapleContentTable() {
        let stylei = "text-cyan-300";
        let stylev = "text-teal-300";
        let stylel = "text-red-300";
        let styler = "text-purple-300";
        let stylen = "text-blue-400";
        let stylef = "text-yellow-300";

        let code = `<i class="${stylen}">var</i> <i class="${stylei}">table</i> = <span class="${stylef}">Table</span><{ <br>
            <div class="ml-[1em]">
            <i class="${stylei}">id</i>: <i class="${stylev}">string</i>, <br>
                <i class="${stylei}">name</i>: <i class="${stylev}">string</i> <br>
            </div>
        }>([<br>
            <div class="ml-[1em]">
                {
                    <div class="ml-[1em]">
                        <i class="${stylei}">header</i>: { <i class="${stylei}">title</i>: <i class="${stylel}">"ID"</i> }, <br>
                        <i class="${stylei}">data</i>: (<i class="${stylei}">_row</i>) => { <br>
                            <div class="ml-[1em] flex flex-row">
                                <i class="${styler}">return</i> <i class="${stylen} mx-[1em]">new</i> <i class="${stylev}">TextElement</i>(<i class="${stylei}">_row.id</i>);
                            </div>
                        }
                    </div>
                },
            </div>
            <div class="ml-[1em]">
                {
                    <div class="ml-[1em]">
                        <i class="${stylei}">header</i>: { <i class="${stylei}">title</i>: <i class="${stylel}">"Nombre"</i> }, <br>
                        <i class="${stylei}">data</i>: (<i class="${stylei}">_row</i>) => { <br>
                            <div class="ml-[1em] flex flex-row">
                                <i class="${styler}">return</i> <i class="${stylen} mx-[1em]">new</i> <i class="${stylev}">TextElement</i>(<i class="${stylei}">_row.name</i>);
                            </div>
                        }
                    </div>
                },
            </div>
        ]);
        
        <br>
        <br>

        <i class="text-gray-400">// asigno la data a la tabla</i> <br>
        <i class="${stylei}">table.data</i> = <i class="${stylei}">sourceData</i>;

        <br>
        <br>
        <br>
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

        exampleBlockContent(this.lorem,code,output,this.center).then(con => {
            let divided = con.querySelectorAll('.divided div');
            
            let left = divided[0];
                left.classList.add('w-[40%]')
                
            let right = divided[1];
                right.className = 'bg-gray-800 text-white rounded-lg p-3 flex items-center h-[20em] w-[22em] overflow-y-scroll overflow-x-scroll';
        });
    }
}


export {
    CenterBlock
}