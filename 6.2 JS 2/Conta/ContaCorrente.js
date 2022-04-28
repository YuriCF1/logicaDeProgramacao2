import { Cliente } from "../Cliente.js";
import { Conta } from "./Conta.js";

//Herdar/Herança: extends Conta = Faz com que tudo oq foi escrito na Conta, seja interpretado aqui também
export class ContaCorrente extends Conta {
    //se eu quiser contar todas contas juntas, é só apagar isso, pois ja declarei o static na Conta.js
    static numeroDeContas = 200;

   
    constructor (saldoInicial, cliente, agencia){
        //O super, serve para eu chamar o método da conta Pai. Se eu usar em um Sacar, ele vai chamar o Sacar da Conta e não da ContaCorrenteS
        super(saldoInicial, cliente, agencia);
        this.numeroDeContas = "Conta Número: " + ContaCorrente.numeroDeContas ++;

    }

    //Sacar aqui esta sobrescrevendo uma parte do método original de Contas, nesse caso a Taxa
    sacar(valor) {
        let taxa = 1.1;
        //Aqui eu também posso usar o super, pois o método não está sendo sobreescrito de forma a ser mudado
        return this._sacar(valor, taxa);
        
    }
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//     // atributos/propriedades(_privados)
//     //Acessores (encapsular, proteger atributos, dados da classe)
//     //Redundância de confiabilidade no cliente (não permitir valores aleatórios como 0)
//     //O SET pode atribuir no outro arquivo, o GET so serve pra ser lido
//     set cliente(novoValor) {
//         if (novoValor instanceof Cliente) {
//             this._cliente = novoValor;

//         }

//     }

//     get cliente() {
//         return this._cliente;

//     }

//     //Construtor, que é um MÉTODO da classe(facilita a leitura, economiza linha, traz praticidade)
//     //No construtor também dá pra usar o acessor(cliente do get cliente) que tem dentro das classe (Cliente)
//     constructor(saldoInicial, cliente, agencia) {
//         this._saldo = saldoInicial;
//         this._cliente = cliente;
//         this._agencia = agencia;
//         ContaCorrente.numeroDeContas += 1;
//         this.numeroDaConta = "Conta Número: " + ContaCorrente.numeroDeContas;
//     }


//     //Redundância de confiabilidade no saldo, para eu não atribuir ela no outro arquivo
//     //O nome disso é ACESSORES (set e get)
//     //O nome da ideia é ENCAPSULAMENTO
//     _saldo = 0;

//     get saldo() {
//         return this._saldo;

//     }

// }

//-----------------------------------------------------------------------------------


//Metodos (funções?)
//Composição de classe(trazer uma linguagem mais do contexto(financeiro))
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

