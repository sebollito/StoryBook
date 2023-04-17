
const implementScrollUp = async function(parent?:HTMLElement) {
    let btnUp = document.getElementById('btn-browser-up');

    parent.addEventListener('scroll',(w) => {
        console.log(w)
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

const buildUiList = async function(items:any,parent?:HTMLElement) {

    let container = document.createElement('div');
    let list = document.createElement('ul');
        list.className = "w-full text-white font-medium text-gray-900";

    items.map((elm: any, index:number) => {

        let item = document.createElement('li');
            item.className = 'transition cursor-pointer text-[12px] w-full px-[3em] py-4 hover:bg-teal-700 flex flex-row items-center';
        let icon = document.createElement('i');
            icon.className = elm.icon;
        let a = document.createElement('a')
            a.className = 'decoration-none block ml-[1em] w-full';
            a.innerText = elm.name
            a.href = "#" + elm.href

        item.appendChild(icon);
        item.appendChild(a);
        list.appendChild(item);
        
        if((index + 1) == items.length)
        {
            container.appendChild(list);
            parent && parent.appendChild(container);
        }

    });

    return await list;
}

const textDarkBlock = async function(str:string,parent: HTMLElement) {

    let div = document.createElement('div');
        div.className = "my-[5em] font-bold text-2xl p-4 rounded-lg bg-gray-700 shadow-lg";
        div.innerText = str;
    
    parent && parent.appendChild(div);

    return await div;
}

const shadeTextBlock = async function(str:string,parent:HTMLElement,icon?:string) {
    let div = document.createElement('div');
        div.className = "font-bold text-lg mb-2 p-2 bg-teal-700 rounded-lg";
        div.style.paddingLeft = '1.5em';
        div.innerHTML = (icon != null ? icon : '<i class="fa fa-star text-yellow-400"></i>') + ' ' + str;
        div.id = str.toLowerCase()

        parent && parent.appendChild(div);

    return await div
}   

const exampleBlockContent = async function(str:string,code:string,output?:string,parent?:HTMLElement,html:boolean=true,id?:string) {

    let container = document.createElement('div');
        container.className = "p-4 rounded-lg shadow-lg bg-white text-gray-500";
        container.style.marginBottom = "4em";
        id != null ? container.id = id : null;
    let content = document.createElement('div');
        content.className = "divided flex space-between items-start";
    let left = document.createElement('div');
        left.className = "w-[50%] text-gray-500 p-4";
        left.innerHTML = str;
    let right = document.createElement('div');
        right.className = "w-[50%] bg-gray-800 text-white rounded-lg p-3 h-[10em] flex items-center";
    let codeContent = document.createElement('code');
        codeContent.className = "w-full h-full p-4 text-[12px]";
        html != false ? codeContent.innerHTML = code : codeContent.innerText = code;
        html != false ? null : codeContent.style.color = "deepskyblue";
    let hr = document.createElement('hr');
        hr.className = "text-gray-400";
        hr.style.marginTop = "1em";
        hr.style.marginBottom = "1em";
    let outputContent = document.createElement('div')
        outputContent.className = "output";
        outputContent.style.paddingTop = "1em";
        outputContent.style.paddingBottom = "1em";
        outputContent.innerHTML = output;

    right.appendChild(codeContent);
    content.appendChild(left);
    content.appendChild(right);
    container.appendChild(content);
    container.appendChild(hr);
    container.appendChild(outputContent);

    parent && parent.appendChild(container);

    return await container;
}

export {
    buildUiList,
    textDarkBlock,
    shadeTextBlock,
    exampleBlockContent,
    implementScrollUp
}