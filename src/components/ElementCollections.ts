import { setTextFormat } from "../engine/Engine";

const activeSearchInput = (parent:HTMLElement) => {
    let input = parent.querySelector('input');
        input.oninput = (ev) => {
            let elm: any = ev.target;
            let list = parent.querySelectorAll('div ul li');


            if(elm.value.trim().length != 0)
            {
                list.forEach((li:HTMLElement,i:number) => {
                    let match = li.innerText.match(new RegExp(elm.value,'i'));

                    if(!match)
                    {
                        li.classList.add('hidden');
                    }
                    else
                    {
                        li.classList.remove('hidden');
                    }
                });
            }
            else
            {
                list.forEach((li:HTMLElement,i:number) => {
                    li.classList.remove('hidden');
                });
            }
        }
}

const implementScrollUp = async function(parent?:HTMLElement) {
    let btnUp = document.getElementById('btn-browser-up');

    parent.addEventListener('scroll',(w:any) => {
        if(parent.scrollTop > 750)
        {
            btnUp.classList.add('active');
        }
        else
        {
            btnUp.classList.remove('active');
        }
    })

    btnUp.onclick = (e) => {
        parent.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }
}

const buildUiList = function(items:any,parent?:HTMLElement) {

    let container = document.createElement('div');
    let list = document.createElement('ul');
        list.className = "w-full text-white font-medium text-gray-900 bg-teal-800";

    items.map((elm: any, index:number) => {

        let item = document.createElement('li');
            item.className = 'transition cursor-pointer text-[12px] w-full p-0 hover:bg-teal-900 flex flex-row items-center';
        let icon = document.createElement('i');
            icon.className = elm.icon + ' mr-[1em]';
        let span = document.createElement('span');
            span.innerText = elm.name;
        let a = document.createElement('a')
            a.className = 'decoration-none block ml-[1em] w-full px-[2em] py-4';
            a.href = "#" + elm.href
            
        a.appendChild(icon);
        a.appendChild(span);
        item.appendChild(a);
        list.appendChild(item);

        if((index + 1) == items.length)
        {
            container.appendChild(list);
            parent && parent.appendChild(container);
        }
        else
        {
            item.classList.add('border-b','border-teal-700')
        }

    });

    return container;
}

const textDarkBlock = async function(str:string,parent: HTMLElement) {

    let div = document.createElement('div');
        div.className = "my-[5em] font-bold text-2xl p-4 rounded-lg bg-gray-700 shadow-lg";
        div.innerText = str;
    
    parent && parent.appendChild(div);

    return await div;
}

const shadeTextBlock = function(str:string,parent:HTMLElement,icon?:string) {
    let div = document.createElement('div');
        div.className = "font-bold text-lg mb-2 bg-teal-700 rounded-lg px-[1em] py-[.4em] w-full flex space-between items-center";
        div.id = str.toLowerCase()

    let left = document.createElement('div');
        left.className = 'w-[50%]';

    let right = document.createElement('div');
        right.className = 'w-[50%] flex justify-end';

    let iconStar = document.createElement('i');
        iconStar.className = 'fa fa-star text-yellow-400 mr-[.5em]';
    let title = document.createElement('span');
        title.innerText = str;

    let btnCopy = document.createElement('button');
        btnCopy.className = 'transition w-[2em] h-[2em] rounded-full bg-teal-800 text-xs p-4 flex justify-center items-center hover:bg-white hover:text-teal-700';
        btnCopy.innerHTML = '<i class="fa fa-clone"></i>';
        btnCopy.onclick = () => {
            let toast = document.getElementById('copy-toast');
            let container = document.getElementById(str.toLocaleLowerCase()+'-container');
            let divided = container.querySelector('.divided');
            let containers = divided.querySelectorAll('div');

            let left = containers[0];
            let right = containers[1];

            navigator.clipboard.writeText(right.innerText);

            if(!toast.classList.contains('active'))
            {
                toast.classList.add('active');
            }

            setTimeout(() => {
                toast.classList.remove('active');
            }, 1500);
        }
        
        left.appendChild(iconStar);
        left.appendChild(title);
        right.appendChild(btnCopy);
        div.appendChild(left);
        div.appendChild(right);
        parent && parent.appendChild(div);

    return div
}

const exampleBlockContent = function(str:string,code:string,output?:HTMLElement,parent?:HTMLElement,html:boolean=true,id?:string) {

    let container = document.createElement('div');
        container.className = "p-4 rounded-lg shadow-lg bg-white text-gray-500";
        container.style.marginBottom = "4em";
        id != null ? container.id = id + '-container' : null;
    let content = document.createElement('div');
        content.className = "divided flex space-between items-start";
    let left = document.createElement('div');
        left.className = "w-[50%] text-gray-500 p-4";
        left.innerHTML = str;
    let right = document.createElement('div');
        right.className = "w-[50%] bg-gray-800 text-white rounded-lg p-3 h-[10em] flex items-center";
    let codeContent = document.createElement('pre');
        codeContent.className = "w-full h-full p-0 text-[12px]";
        html != false ? codeContent.innerHTML = setTextFormat(code) : codeContent.innerText = code;
        html != false ? null : codeContent.style.color = "deepskyblue";
        html != false ? null : codeContent.style.whiteSpace = "break-spaces";
    let hr = document.createElement('hr');
        hr.className = "text-gray-400";
        hr.style.marginTop = "1em";
        hr.style.marginBottom = "1em";
    let outputContent = document.createElement('div')
        outputContent.className = "output";
        //outputContent.style.paddingTop = "1em";
        outputContent.style.paddingBottom = "1em";
        
    output != null && outputContent.appendChild(output);
    right.appendChild(codeContent);
    content.appendChild(left);
    content.appendChild(right);
    container.appendChild(content);
    container.appendChild(hr);
    container.appendChild(outputContent);

    parent && parent.appendChild(container);

    return container;
}

export {
    buildUiList,
    textDarkBlock,
    shadeTextBlock,
    exampleBlockContent,
    implementScrollUp,
    activeSearchInput
}