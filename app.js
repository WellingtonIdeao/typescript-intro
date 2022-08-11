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
