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
// function with optional parameter
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
// function with default parameter
function addNumbersDefault(x: number, y: number, z:number = 1):number{
    return x+y+z;
}
// function with set of optionals parameters - rest
function addSetOptionalsRest(...setofNumbers: number[]):string{
    let result:string = ""+setofNumbers.join(" ");
    return result;
}

// function overload example 1
function calcArea(x: number): number;
function calcArea(x: number, y: number): number;
function calcArea(x: number, y?: number):any {
    let result: number;
    if (y > 0 ){
        result = x * y;
    }
    else {
        result = x * x;
    }
   return result; 

}
// function overload example 2

function calcDescount(price: number): number;
function calcDescount(price: number, descount: number): number;
function calcDescount(price: number, descount?: number): any {
    let descountResult: number;

    if (descount > 0){
        descountResult =  price * descount;
    }
    else {
        descountResult =  price * 0.10;
    }
    return descountResult;
}

