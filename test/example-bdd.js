const expect = require("chai").expect

// describimos el comportamiento del test
describe('Calcular la suma de 2 numeros',function (){
    // definimos el comportamiento

    it("Se suman los valores 3 + 2 y se espera que el valor sea 5", function(){
        var num1 = 2;
        var num2 = 3;
        var resultado = num1 + num2;
        expect(5).to.be.equal(resultado);
    })
})