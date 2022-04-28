//Ser autenticávél significa ter o método "autentificar"
export class sistemaDeAutentificacao {
    static login(autenticavel, senha) {
        //A expressão de igualdade (==) está como expressão booleana. Irá retornar se a Senha do Funcionaario é verdadeira ou falsa.
        //Agora está como Autenticável e não Funcionário, pq o cliente tbm quer entrar no sistema, n apenas funcionário        
        //Troquei o _senha e o get senha das classes para Auteticar pois cada um pode querer autenticar de um modo diferente. Alguns com tokes por exemplo. 
        //E segundo a aula nesse link https://cursos.alura.com.br/course/javascript-polimorfismo/task/74136 também fica mais seguro porque o autentificar de cada clase tem uma chance maior de vazar para o sistema 
        //"Quando estamos falando de funções, vamos tomar um erro, se não tiver essa funação na classe chamada (autenticável e autenticar), quando estamos falando de propriedades (get senha), ele vai vir para o padrão undefined. Comportamentos dentro do JavaScript aos quais temos que estar atentos."
        //Quando tava Senha, o registro do Cliente deu false, então n era claro o erro de pq não estava entrando
        //Eu também posso fazer com que qualquer classe entre direto no sistema, como o administrador não precisa se autenticar. É só colocar True no autenticar dele
        
        //Esse sistema de autentificação é chamado de Duck Type. É usado em linguagem fracamente "tipadas".
        //Nesse tipo de linguagem, ela precisa de um tipo específico de classe para rodar. Seria assim
        //static login(Diretor/Funcionario/Gerente, senha)
        //Mas o próprio compilador estaria verificando isso antes de executar. O JS não é compilada, é interpretada e fracamente "tipada"
        //OBS1: Duck TypING/Tipo de Pato é tipo = Se anda como pato e faz quack como um pato, deve ser um pato. 
        //OBS2: N interessa se não for (não me interessa o tipo dele, e sim o que ele consegue fazer.. Se tem a presença de certos métodos ou propriedades para eu utilizar. Se tem propriedade que eu quero usar, vou tratá-lo dessa maneira)

        //1- Executar ehAntenticavel do autenticavel|| retornar True ou False se Tem "autenticar" dentro do autenticavel E se ele é uma instancia(método) da função (Cliente/Diretor/Gerente).
        //2- Caso seja true, ele manda o retorno True ou False do autenticar(senha) dentro do autenticavel. Se for true, tudo certo.
        
        if (sistemaDeAutentificacao.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha)
        }
        return false;
    }

    //Static chama ele direto, não precisa criar uma instância 
    static ehAutenticavel(autenticavel) {
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function
    }

}












/*Acho que entendi o que você quis dizer. Mesmo assim, a mudança faz sentido pra mim.

Por que alguém deveria poder dar um get senha? Uma senha é algo secreto que não deve ser nem ao menos vista, concorda?

O método autenticar vai retornar apenas um booleano, informando se a senha fornecida é a mesma que está guardada na sua classe. Sem correr o risco de alguém conseguir extrair a senha que está la dentro.

Entendo isso como um aperfeiçoamento da segurança.

Essa é minha opinião, espero ter ajudado!

Bons estudos

*/