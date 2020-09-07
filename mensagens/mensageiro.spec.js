describe('TESTE DO MODULO MENSAGEIRO',()=> {

    it('Quando chamar a função criarMensagemPadrao ela deve retornar a mensagem "Esta é uma mensagem padrão"',()=>{
        
        const moduloMensageiro = require('./mensageiro');
        expect(moduloMensageiro.criarMensagemPadrao()).toBe('Esta é uma mensagem padrão');

    })   
    it('Quando eu executo a função escreverBomDia passando como parâmetro o nome "José", então a função precisa retornar a mensagem "Bom dia José"',()=>{
        //colocar a implementação do teste aqui
        const moduloMensageiro = require('./mensageiro');
        expect(moduloMensageiro.escreverBomDia('José')).toBe('Bom dia José');

    })   

    it('Quando eu executo a função "quemSouEu" passando como parâmetro o nome "Ana" e a profissão "Enfermeira" então a função precisa retornar a mensagem "Olá, meu nome é Ana e eu trabalho como Enfermeira"',()=>{
        const moduloMensageiro = require('./mensageiro');
        expect(moduloMensageiro.quemSouEu("Ana","Enfermeira")).toBe("Olá, meu nome é Ana e eu trabalho como Enfermeira");
    })
    
    it('Quando eu executo a função "quemSouEu" passando como parâmetro o nome "Joel" e a profissão "Programador Fullstack" então a função precisa retornar a mensagem "Olá, meu nome é Joel e eu trabalho como Programador Fullstack"',()=>{
        const moduloMensageiro = require('./mensageiro');
        expect(moduloMensageiro.quemSouEu("Joel","Programador Fullstack")).toBe("Olá, meu nome é Joel e eu trabalho como Programador Fullstack");
    })
})