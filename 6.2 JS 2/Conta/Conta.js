//Class Abstrata: Só serve para ser herdada, e nunca abstanciada
import { Cliente } from "../Cliente.js";

export class Conta {
    // static numeroDeContas = 0;
    // agencia;
    // _cliente;
    // numeroDaConta;
    
//Parece que o uso de # para tornar atributos privados já foi aprovado
//se eu quiser contar todas contas juntas, é só apagar isso, pois ja declarei o static na Conta.js
//static numeroDeContas = 0;

    constructor (saldoInicial, cliente, agencia) {
        if (this.constructor == Conta) {
            throw new Error("Você não deve instanciar diretamente um objeto do tipo Conta. Pois esta, é uma classe abstrada.")

        }
        
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        //Avisa que classe ta sendo criada
        //console.log(this.constructor); 
        //this.numeroDeContas = "Conta Número: " + Conta.numeroDeContas ++;
        //Se eu não especificar, ele irá exexibir a mesnagem abaixo em todos as Classes, e não só na constructor do Conta
                    
    } 
    
    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;

        }

    }
 
    //O get é só leitura
    get cliente() {
        return this._cliente;

    }

    get saldo() {
        return this._saldo;

    }

    depositar(valor) {
        if (valor <= 0) {
            return
        };

        this._saldo += valor;
    }
    
    //Método abstrato
    sacar() { 
        // let taxa = 1;
        // return this._sacar(valor, taxa)
        
        //Cada conta vai ter um método para sacar, se esquecerem de especificar as taxas e etc. O Sacar padrão não será usado. Ele tá aí só pra avisar do erro.
        //No JS, o código só é interpretado. Se fosse no Java ou C#, que tem compilador. Ele não deixaria nem executar. Por isso o erro precisa ser tido no JS, na hora da execucão.
        throw new Error("O método Sacar do objeto Conta, é abstrato.")
        
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado && valorSacado >= 0) {
            this._saldo -= valorSacado;
            return valorSacado;

        } else {
        console.log("Saldo insusifiente ou valor inválido")
        return 0;

        }

    }     

    transferir(valor, conta){ 
        if (this._tipo == "salario") {
            return;
        }
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
       
    }

}


//MÉTODO DIDÁTICO 1

// import { Cliente } from "./Cliente.js";

// export class Conta {
//     static numeroDeContas = 0;
//     // agencia;
//     // _cliente;
//     numeroDaConta;
    
// //Parece que o uso de # para tornar atributos privados já foi aprovado
     
//     constructor (tipo, saldoInicial, cliente, agencia) {
//         this._saldo = saldoInicial;
//         this._cliente = cliente;
//         this._agencia = agencia;
//         this._tipo = tipo;
//         Conta.numeroDeContas += 1;
//         this.numeroDaConta = "Conta Número: " + Conta.numeroDeContas;
    
//     } 
    
//     set cliente(novoValor) {
//         if (novoValor instanceof Cliente) {
//             this._cliente = novoValor;

//         }

//     }
 
//     get cliente() {
//         return this._cliente;

//     }

//     get saldo() {
//         return this._saldo;

//     }

//     sacar(valor) {
//         taxa = 1;
//         if (this._tipo == "poupanca") {
//             taxa = 1;
//         }

//         if (this._tipo == "corrente") {
//             taxa = 1.1
//         }
//         if (this._tipo == "salario") {
//             taxa = 1.05;
//         }
//         if (this._tipo == "empresarial") {
//             taxa = 1.15;
//         }

//         const valorSacado = taxa * valor;
//         if (this._saldo >= valorSacado && valorSacado >= 0) {
//             this._saldo -= valorSacado;
//             return valorSacado;

//         } else {
//             console.log("Saldo insusifiente ou valor inválido")

//         }
//     }

//     depositar(valor) {
//         if (valor <= 0) {
//             return
//         };

//         this._saldo += valor;
//     }

//     transferir(valor, conta){ 
//         if (this._tipo == "salario") {
//             return;
//         }
//         const valorSacado = this.sacar(valor);
//         conta.depositar(valorSacado);
       
//     }

// }

