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
