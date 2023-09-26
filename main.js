// Definindo classe Calculadora 
class Calculadora {
    constructor() {
        //inicializando o vizor com o valor 0
        this.valor = '0'
    }

    //Metodo para adicionar um numero ao visor 
    adicionarNumero(numero) {
        //Se o valor atual for igual a 0, substitui pelo numero 
        if (this.valor === '0') {
            this.valor = numero
        } else {
            //Senão, adicionar o numero ao final do valor atual (ex:15)
            this.valor += numero
        }
        this.atualizarVisor();
    }
    //método para adicionar uma operação ao visor 
    adicionarOperacao(operacao) {
        // Se o ultimo caractere do valor for uma operaçãosubtitui pela nova operação
        if (this.valor.slice(-1) === '+' ||
            this.valor.slice(-1) === '-' ||
            this.valor.slice(-1) === '*' ||
            this.valor.slice(-1) === '/') {
            this.valor = this.valor.slice(0, -1) + operacao
        }
        else {
            // Senão adicionar a operação no final
            this.valor += operacao
        }
        this.atualizarVisor()
    }

    resultado() {
        try {
            // Usa a função  eval para calcular o resultado da expressão no visor
            this.valor = eval(this.valor).toString()
        } catch (e) {
            // Se houver um erro na expressão,exibe a mensagem erro
            this.valor = 'Error'
        } this.atualizarVisor()
    }
    limpar() {
        this.valor = 0
        this.atualizarVisor()
    }
    atualizarVisor() {
        document.getElementById('visor').value = this.valor
    }

}
let calculadora = new Csalculadora()

