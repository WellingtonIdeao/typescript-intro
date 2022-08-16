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

// arrow function

// step 1
var result6 = function (x: number, y: number, z: number): number{
    return x+y+z;
}

// step 2
var result6 = (x: number, y: number, z: number) => {
    return x+y+z;
}

// step 3
var result6 = (x: number, y: number, z: number) => x+y+z;

// interface

interface LabelledValue{
    label: string;
    size?: number;
}
function printLabel(labelledObj: {label: string}){
    alert(labelledObj.label);
}

var myObj = {label: "label"};

printLabel(myObj);
function printLabelInterface(labelledObj: LabelledValue){
    alert(labelledObj.label);
}
var myObj = {label: "label with interface"};
printLabelInterface(myObj);

var myObj2 = <LabelledValue>{};
myObj2.label = "label with interface object";
printLabelInterface(myObj2);

// interface function type

interface SearchConf{
    (source: string, subString: string): boolean;
}

let mySearch: SearchConf;

mySearch = function(src:string, sub: string): boolean {
    let result =  src.search(sub);
    if (result == -1){
        return false;
    }
    else {
        return true;
    }
}

alert("interface function "+mySearch("interface function","function"));

// interface array type
interface StringArray{
    [index: number]: string;
}

let array:StringArray;
array = ['index 1', 'index2'];
alert("interface array "+array[1]);


// interface class type

interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(date: Date){
        this.currentTime = date;
    }
    constructor(public h: number, m: number){

    }
}

// interface inheritance

interface Shape{
    color: string;
}
interface PenStroke{
    penWidth: number;
}

interface Square extends Shape, PenStroke{
    sideLength: number;
}

var square = <Square>{};
square.color ='Blue';
square.penWidth = 5.0;
square.sideLength = 10;

alert(`${square.color} ${square.penWidth} ${square.sideLength}`);

// class
class Hello{
    text: string;

    constructor(text: string){
        this.text = text;
    }

    message(): string{
        return 'Hello '+this.text;
    }
}

class Area{
    pi: number;
    constructor(){
        this.pi = 3.1415;
    }

    circle(radius: number): number{
        return this.pi * radius * radius;
    }

    rectangle(height: number, width: number): number{
        return  height * width;
    }
    square(side: number): number {
        return side * side;
    }

}

let hello = new Hello('World');
let area = new Area();
alert(hello.message());
alert(area.circle(2));
alert(area.rectangle(5, 4));
alert(area.square(6));

// class inheritance

class Product {
    name: string;
    price: number;

    constructor(name: string, price: number){
        this.name = name;
        this.price = price;
    }

    public priceWithDescount(descount: number): void {
        let pricefinal: number = this.price - (this.price * descount); 
        alert(this.name + ': $ ' + pricefinal);
    }
}

class Tv extends Product {
    size: number;

    constructor(name: string, price: number, size: number){
        super(name, price);
        this.size = size;
    }

    priceWithDescount(descount: number): void {
        alert('Tv size: ' + this.size + ' pol')
        super.priceWithDescount(descount);
    }

}

let product = new Product('Table', 10.00);
let tv = new Tv('Tv samsung', 20.00, 20);
product.priceWithDescount(0.10);
tv.priceWithDescount(0.10);

// Access Modifiers and get/set acessors tsc -t es5 file.ts

class Person{
    private namePerson: string;

    public get name(): string{
        return this.namePerson;
    }

    public set name(value: string){
        this.namePerson = value;
    }
}

class Main{
    private person: Person;

    constructor(){
        this.person = new Person();

        this.person.name = 'person name';
        alert(this.person.name);
    }    

}

 let main = new Main();


