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
import {ContaCorrente} from "./Conta/ContaCorrente.js";
import {ContaPoupanca} from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import {Conta} from "./Conta/Conta.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { sistemaDeAutentificacao } from "./SitemaDeAutentificacao.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

const contaCorrente1 = new ContaCorrente(1000, cliente1, 101);

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

const contaPoupanca1 = new ContaPoupanca(1000, cliente1, 101);
// const conta = new Conta (0, cliente1, 101);

const contaSalario = new ContaSalario(cliente1)
contaCorrente1.sacar(100);
//contaPoupanca1.depositar(100);
//contaPoupanca1.transferir(50,contaCorrente1);
contaPoupanca1.sacar(100);

contaSalario.depositar(100);
contaSalario.sacar(10);

//console.log(contaCorrente1);
//console.log(contaPoupanca1);
//console.log(contaSalario);


const diretor = new Diretor("Yuri", 13241324123, 10000);
diretor.cadastrarSenha(1234);

const gerente = new Gerente("Ricardo",31242321421, 5000);
gerente.cadastrarSenha(4321);

const cliente = new Cliente("Laís", 12231242132, "1212")


const diretorEstaLogado = sistemaDeAutentificacao.login(diretor, "1234");
const gerenteEstaLogado = sistemaDeAutentificacao.login(gerente, "4321");
const clienteEstaLogado = sistemaDeAutentificacao.login(cliente, "1212");

console.log(diretorEstaLogado,gerenteEstaLogado);

console.log(clienteEstaLogado);



