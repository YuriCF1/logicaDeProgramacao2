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

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

const conta1 = new ContaCorrente(101, cliente1);

//Atribuindo as instâncias de CLIENTE forma direta
//conta2.cliente = null(); (se eu quiser não atribuir nenhum valor ao cliente)
//nulo é diferente de undifined, o NULL é intencional, explícito 

// const conta2 = new ContaCorrente();
// conta2.cliente = new Cliente();
// conta2.cliente.nome = "Alice"

const conta2 = new ContaCorrente(102, cliente2);

conta1.depositar(500);
console.log(conta1);
console.log(conta2);

//let valor = 13
//Se eu atribuir um valor aqui, mesmo que eu atribua outra variáel com esse nome lá no arquivo de operação da conta, não vai alterar. Já que eu mandei a cópia do valor. Já se eu alterar algo na 'conta', vai mudar já que ela é uma referência do OBJETO.
conta1.transferir(100, conta2);

console.log(conta1);
console.log(conta2);

//se eu quiser saber só um dado, como por exemplo o numero de contas
console.log(ContaCorrente.numeroDeContas)


