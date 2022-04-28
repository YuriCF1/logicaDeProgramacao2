export class Funcionario {
    constructor(nome, cpf, salario) {
        this._nome = nome;
        this._salario = salario;
        this._cpf = cpf;

        this._bonificacao = 1;

    }

    //Com o acessor Get. Só vai ser possível mudar a senha através do método abaixo cadastrarSenha, onde pode ser portegido também posteriormente
    autenticar(senha) {
        return this._senha == senha;

    }

    cadastrarSenha(senha){
        this._senha = senha;

    }

}