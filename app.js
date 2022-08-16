var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Produto = /** @class */ (function () {
    function Produto(_codigo, _descricao, _preco) {
        this.codigo = _codigo;
        this.descricao = _descricao;
        this.preco = _preco;
    }
    Produto.prototype.getDados = function () {
        return "Produto ".concat(this.codigo, ": ").concat(this.descricao, " - R$ ").concat(this.preco);
    };
    return Produto;
}());
function addNumbers(x, y) {
    return x + y;
}
var myAdd = function (x, y) {
    return x + y;
};
// function with optional parameter
function addNumbersOptionals(x, y, z) {
    var result;
    if (isNaN(z)) {
        result = x + y;
    }
    else {
        result = x + y + z;
    }
    return result;
}
// function with default parameter
function addNumbersDefault(x, y, z) {
    if (z === void 0) { z = 1; }
    return x + y + z;
}
// function with set of optionals parameters - rest
function addSetOptionalsRest() {
    var setofNumbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        setofNumbers[_i] = arguments[_i];
    }
    var result = "" + setofNumbers.join(" ");
    return result;
}
function calcArea(x, y) {
    var result;
    if (y > 0) {
        result = x * y;
    }
    else {
        result = x * x;
    }
    return result;
}
function calcDescount(price, descount) {
    var descountResult;
    if (descount > 0) {
        descountResult = price * descount;
    }
    else {
        descountResult = price * 0.10;
    }
    return descountResult;
}
// arrow function
// step 1
var result6 = function (x, y, z) {
    return x + y + z;
};
// step 2
var result6 = function (x, y, z) {
    return x + y + z;
};
// step 3
var result6 = function (x, y, z) { return x + y + z; };
function printLabel(labelledObj) {
    alert(labelledObj.label);
}
var myObj = { label: "label" };
printLabel(myObj);
function printLabelInterface(labelledObj) {
    alert(labelledObj.label);
}
var myObj = { label: "label with interface" };
printLabelInterface(myObj);
var myObj2 = {};
myObj2.label = "label with interface object";
printLabelInterface(myObj2);
var mySearch;
mySearch = function (src, sub) {
    var result = src.search(sub);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};
alert("interface function " + mySearch("interface function", "function"));
var array;
array = ['index 1', 'index2'];
alert("interface array " + array[1]);
var Clock = /** @class */ (function () {
    function Clock(h, m) {
        this.h = h;
    }
    Clock.prototype.setTime = function (date) {
        this.currentTime = date;
    };
    return Clock;
}());
var square = {};
square.color = 'Blue';
square.penWidth = 5.0;
square.sideLength = 10;
alert("".concat(square.color, " ").concat(square.penWidth, " ").concat(square.sideLength));
// class
var Hello = /** @class */ (function () {
    function Hello(text) {
        this.text = text;
    }
    Hello.prototype.message = function () {
        return 'Hello ' + this.text;
    };
    return Hello;
}());
var Area = /** @class */ (function () {
    function Area() {
        this.pi = 3.1415;
    }
    Area.prototype.circle = function (radius) {
        return this.pi * radius * radius;
    };
    Area.prototype.rectangle = function (height, width) {
        return height * width;
    };
    Area.prototype.square = function (side) {
        return side * side;
    };
    return Area;
}());
var hello = new Hello('World');
var area = new Area();
alert(hello.message());
alert(area.circle(2));
alert(area.rectangle(5, 4));
alert(area.square(6));
// class inheritance
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    Product.prototype.priceWithDescount = function (descount) {
        var pricefinal = this.price - (this.price * descount);
        alert(this.name + ': $ ' + pricefinal);
    };
    return Product;
}());
var Tv = /** @class */ (function (_super) {
    __extends(Tv, _super);
    function Tv(name, price, size) {
        var _this = _super.call(this, name, price) || this;
        _this.size = size;
        return _this;
    }
    Tv.prototype.priceWithDescount = function (descount) {
        alert('Tv size: ' + this.size + ' pol');
        _super.prototype.priceWithDescount.call(this, descount);
    };
    return Tv;
}(Product));
var product = new Product('Table', 10.00);
var tv = new Tv('Tv samsung', 20.00, 20);
product.priceWithDescount(0.10);
tv.priceWithDescount(0.10);
// Access Modifiers and get/set acessors
var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this.namePerson;
        },
        set: function (value) {
            this.namePerson = value;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var Main = /** @class */ (function () {
    function Main() {
        this.person = new Person();
        this.person.name = 'person name';
        alert(this.person.name);
    }
    return Main;
}());
var main = new Main();
