export class Cliente {
    //fazendo isso, o nome e CPF só vão poder ser alterados no constructor. Construtores servem para inciar atributos
    constructor(nome, cpf, senha){
        this.nome = nome;
        this._cpf = cpf;
        
    }
    
    get cpf() {
        return this._cpf

    }

    autenticar() {
        return true;

    }
}