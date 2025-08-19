const funcoes = require('./funcoes')

test('A soma', function() {

    const resultado = funcoes.somar()

    expect(resultado).toBe(8)
})

test('A multiplição', function(){
    const resultado = funcoes.multiplicar()

    expect(resultado).toBe(8)
})

test('verificando nome', function(){
    const resultado = funcoes.obterNome()

    expect(resultado).toBe('Ana')
})

test('A divisão', function(){
    const resultado = funcoes.dividir()

    expect(resultado).toBe(5)
})

test('A multiplição', function(){
    const resultado = funcoes.obterIdade()

    expect(resultado).toBe(20)
})