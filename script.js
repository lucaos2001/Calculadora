function AdicionarNumero(numero){
    var conta = document.getElementById("Conta");
    conta.textContent += numero;
}

function Apagar(){
    var conta = document.getElementById("Conta");
    conta.textContent = "";
}

function AdicionarOp(op){
    var conta = document.getElementById("Conta");
    conta.textContent += op;
}

function Calcula(){
    var conta = document.getElementById("Conta");
    var resultado = eval(conta.textContent);

    conta.textContent = resultado;
}
