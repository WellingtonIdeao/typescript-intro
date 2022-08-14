class Produto {
    codigo: string;
    descricao: string;
    preco: number;

    constructor(_codigo: string, _descricao: string, _preco:number){
        this.codigo = _codigo;
        this.descricao = _descricao;
        this.preco = _preco;
    }

    getDados(){
        return `Produto ${this.codigo}: ${this.descricao} - R$ ${this.preco}`;
    }
}

function addNumbers(x:number, y:number): number{
    return x+y;
}

let myAdd: (baseValue: number, increment: number) => number = function(x: number, y: number){
    return x+y;
}

function addNumbersOptionals(x:number, y: number, z?: number):  number{
    let result:number;
    if (isNaN(z)){
        result = x+y;
    }
    else{
        result = x+y+z;
    }
    return result;
}

function addNumbersDefault(x: number, y: number, z:number = 1):number{
    return x+y+z;
}

function addSetOptionalsRest(...setofNumbers: number[]):string{
    let result:string = ""+setofNumbers.join(" ");
    return result;
}    
