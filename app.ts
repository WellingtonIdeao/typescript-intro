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