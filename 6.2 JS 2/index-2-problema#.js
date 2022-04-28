// // CTRL ALT = CURSOe EM VÁRIAS LINHAS

// class Cliente {
//     nome;
//     cpf;

// }

// //TODA VEZ QUE TIVER _(UNDERLINE) NA FRENTE DO ATRIBUTO, A COMUNIDADE DIZ Q ELE É PRIVADO = NÃO ACESSE ELE FORA DA CLASSE!
// //A IDEIA É USAR O #NA FRENTE, PARA ASSIM SER PRIVADO DE VERDADE, MAS AÍ ESTÁ EM CONVERSÃO AINDA => https://github.com/tc39/proposal-class-fields#private-fields
// class ContaCorrente {
//     agencia;
//     _saldo = 0;

//     sacar(valor) {
//         if (this._saldo >= valor && valor >= 0) {
//             this._saldo -= valor;
//             return valor;
           
//         }else {
//             console.log("Saldo insusifiente ou valor inválido")

//         }
//     }   

// //Técnica Early Return = primeiro se dá as condições erradas, assim o return não vai devolver NADA, para só assim depois autorizar a fazer alguma coisa
//     depositar(valor){
//         if(valor <= 0) {
//             return
//         };

//         this._saldo += valor;
//     }
// }

import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupança} from "./ContaPoupança.js";
import {Conta} from "./Conta.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

const contaCorrente1 = new Conta(100, cliente1, 101);

//Atribuindo as instâncias de CLIENTE forma direta
//conta2.cliente = null(); (se eu quiser não atribuir nenhum valor ao cliente)
//nulo é diferente de undifined, o NULL é intencional, explícito 

// const conta2 = new ContaCorrente();
// conta2.cliente = new Cliente();
// conta2.cliente.nome = "Alice"

// const contaCorrente2 = new Conta(cliente2, 101);

//let valor = 13
//Se eu atribuir um valor aqui, mesmo que eu atribua outra variáel com esse nome lá no arquivo de operação da conta, não vai alterar. Já que eu mandei a cópia do valor. Já se eu alterar algo na 'conta', vai mudar já que ela é uma referência do OBJETO.


//se eu quiser saber só um dado, como por exemplo o numero de contas
//console.log(ContaCorrente.numeroDeContas)

const ContaPoupança1 = new Conta("corrente", cliente1, 101, 10);

console.log(ContaPoupança1);
console.log(ContaPoupança1.getSaldo());







