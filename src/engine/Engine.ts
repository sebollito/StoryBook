import { collection,stylesClass } from "./Objects";

const setTextFormat = function(str:string) {
    let match = str.match(new RegExp('Element','i'));
    let puzzle = '';

    if(match) {
        let input = match.input.replace(/\n\\/g,'');

        let keys = Object.keys(collection);
        let values = Object.values(collection);

        keys.map(key => {
           if(puzzle.trim().length == 0 && input.search(new RegExp(collection.get(key),'i')) > 0)
           {
                puzzle = putStyleAndElement(collection.get(key),key,input,stylesClass[key]);        
           }
           else
           {
                if(puzzle.search(new RegExp(collection.get(key),'i')) > 0)
                {
                    puzzle = putStyleAndElement(collection.get(key),key,puzzle,stylesClass[key]);
                }     
           }
        })

        
        return puzzle;
    }
}

const putStyleAndElement = function(str:string, prefix:string, input:string, style:string) {

    let regExp = new RegExp(str,"gi");
    let result = null;
    let indices = [];
    let puzzle = '';

    // PRIMERA COINCIDENCIA
    while(result = regExp.exec(input))
    {
        if(puzzle.trim().length == 0)
        {
            puzzle = eachWordChains(result.index,input,prefix,style);
        }
    }

    // SEGUNDA COINCIDENCIA
    let i = 0;
    while(result = regExp.exec(puzzle))
    {
        i != 0 && indices.push(result.index);
        i++;
    }

    i = 0
    indices.map(index => {
        if(i == 0)
        {
            puzzle = eachWordChains(index,puzzle,prefix,style);
        }
        i++
    })

    // TERCERA COINCIDENCIA
    i = 0;
    indices = [];
    while(result = regExp.exec(puzzle))
    {
        i != 0 && indices.push(result.index);
        i++;
    }

    i = 0
    indices.map(index => {
        if(i == 1)
        {
            puzzle = eachWordChains(index,puzzle,prefix,style);
        }
        i++
    })

    // CUARTA COINCIDENCIA
    i = 0;
    indices = [];
    while(result = regExp.exec(puzzle))
    {
        i != 0 && indices.push(result.index);
        i++;
    }

    i = 0
    indices.map(index => {
        if(i == 2)
        {
            puzzle = eachWordChains(index,puzzle,prefix,style);
        }
        i++
    })

    return puzzle
}

const eachWordChains = function(initial:number,str:string,key:string,style:string) {
    let puzzle = '';

    for(var i = 0; i <= str.length; i++)
    {
        if(i == initial)
        {
            puzzle += `<i class='${style}'>` + str.charAt(i);
        }
        else if(i == ((initial - 1) + collection.get(key).length))
        {
            puzzle += str.charAt(i) + '</i>';
        }
        else
        {
            puzzle += str.charAt(i);
        }
    }

    return puzzle;
}


export {
    setTextFormat,
    eachWordChains,
    putStyleAndElement,
}