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
