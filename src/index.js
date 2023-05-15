import Controller from './Controller.ts';
import { CenterBlock } from './components/centerBlock.ts';
import { exampleBlockContent } from './components/ElementCollections.ts';

import './css/style.css';

let lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nihil, harum quam exercitationem quidem impedit ea corrupti debitis officia eos maiores aliquam in incidunt minus illum corporis tenetur expedita pariatur.";

require(["x-tag"],function(xtag) {

    /**
     * AGREGO EL COMMON CORE AL DOCUMENT
     */
    let script = document.createElement('script');
        script.type = 'module';
        script.setAttribute('defer','');
        script.src = 'js/AIT-BPD-Common-core.js';

    // DOCUMENTO
    document.head.appendChild(script);

    /**
     * IMPORTO EL COMMON CORE
     */
    let c = require('ait-bpd-common-core');
    
    /**
     * CARGO LA INTERFAZ DEL STORYBOOK
     */
    const Main = xtag.create('x-index-container', class extends XTagElement {
        name() { return 'Estas en el index'; }
        '::template(true)'() {
            let ctrl = new Controller();
            let container = document.createElement('div');

            let doc = ctrl.renderTemplate(container);

            return doc;
        }
    });

    const List = xtag.create('x-list-container', class extends XTagElement {
        '::template(true)'() {
            let list = new CenterBlock().BList();
            return list.innerHTML;
        }
    });


    const Text = xtag.create('x-text-container', class extends XTagElement {
        '::template(true)'() {

            let parent = document.createElement('div');
            let div = document.createElement('div');
                div.className = 'flex flex-col px-[15%]';
            let id = 'Texto';

            // TITULO
            let title = new CenterBlock().shadeText(id);

            // CONTENIDO
            let code = `
new TextElement("Hola a todos",{ 
    class: ["color-texto"] 
});
        `;
            let textElm = new c.TextElement("Hola a todos", { class: ["ml-[1em]","border","p-2","rounded"] });

            let block = exampleBlockContent(lorem,code,undefined,this.centerContainer,true,id);
            let output = block.querySelector('.output');
                output.className = "flex space-between items-center";
            
            let letter = document.createElement('b');
                letter.innerText = "Output:";
            

            output.appendChild(letter);
            output.appendChild(textElm);
            div.appendChild(title);
            div.appendChild(block);
            parent.appendChild(div);

            return parent.innerHTML;
        }
    });



    /**
     * IMPLEMENTACION DE LOS COMPONENETES EN 
     * SUS RESPECTIVAS PARTES
     */
    [
        { obj: new Main(), location: null },
        { obj: new List(), location: 'left' },
        { obj: new Text(), location: 'center' },
    ].map((_,i) => {
        appendIntoBody(_.obj, _.location);
    });
    
});

/**
 * @description apendiza el elemento en el cuerpo del documento
 * @param {*} elm 
 */
const appendIntoBody = async (elm,location=null) => {

    switch(location)
    {
        case null:
            let body = document.body;
                body.appendChild(elm);
            break
        case 'left':
            setTimeout(() => {
                let left = document.getElementById(location);
                    left.appendChild(elm);
            }, 50)
        case 'center':
            setTimeout(() => {
                let center = document.getElementById(location);
                    center.appendChild(elm);
            }, 50)
    } 
}