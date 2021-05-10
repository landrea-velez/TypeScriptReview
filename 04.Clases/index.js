"use strict";
// Clases
var Pizza = /** @class */ (function () {
    function Pizza() {
        this.tomate = false;
        this.queso = "";
        this.bacon = false;
        this.otrosIngredientes = [""];
    }
    Pizza.prototype.setTomate = function () {
        this.tomate = true;
        return this;
    };
    Pizza.prototype.setQueso = function (queso) {
        this.queso = queso;
        return this;
    };
    Pizza.prototype.setBacon = function () {
        this.bacon = true;
        return this;
    };
    Pizza.prototype.setOtrosIngredientes = function (ingredientes) {
        this.otrosIngredientes = ingredientes;
        return this;
    };
    Pizza.prototype.build = function () {
        return this;
    };
    return Pizza;
}());
var pepperoni = new Pizza();
pepperoni
    .setBacon()
    .setQueso("mozarella")
    .setOtrosIngredientes(["pimienta", "albahaca"])
    .build();
console.log(pepperoni);
