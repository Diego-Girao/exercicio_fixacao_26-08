function criarMensagemPadrao(){
    return "Esta é uma mensagem padrão";
}

function escreverBomDia(nome){
    return "Bom dia " + nome;

}

function quemSouEu(nome,profissao){
    return "Olá, meu nome é " + nome + " e eu trabalho como " + profissao;
}

module.exports = {
    criarMensagemPadrao,
    escreverBomDia,
    quemSouEu
}