import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
    static numeroDeContas = 100;
    
    constructor (saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia);
        this.numeroDeContas = "Conta Número: " + ContaPoupanca.numeroDeContas ++;
       
    }

    sacar(valor) {
        let taxa = 1.02;
        return this._sacar(valor, taxa);
        
        // const valorSacado = taxa * valor;
        // if (this._saldo >= valorSacado && valorSacado >= 0) {
        //     this._saldo -= valorSacado;
        //     return valorSacado;

        // } else {
        //     console.log("Saldo insusifiente ou valor inválido")
        //     return 0;

        // }
    }
}



















// constructor(saldoInicial, cliente, agencia){
//         this._saldo = saldoInicial;
//         this._cliente = cliente;
//         this._agencia = agencia;
//         ContaPoupanca.numeroDeContas += 1;
//         this.numeroDaConta = "Conta Número: " + ContaPoupanca.numeroDeContas;
//     }

//     sacar(valor) {
//         if (this._saldo >= valor && valor >= 0) {
//             this._saldo -= valor;
//             return valor;

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

//     transferir(valor, conta) {
//         const valorSacado = this.sacar(valor);
//         conta.depositar(valorSacado);
//         valor = 20;


//     }
//     _saldo = 0;

//     get saldo() {
//         return this._saldo;

//     }
// }

