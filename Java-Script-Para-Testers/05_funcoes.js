
// Funções

// É preciso chamar
// Pode ou não receber parâmetros
// Pode ou não retornar 'dados'

function gerarNome() {
    const nome = 'Rodrigo'
    const sobrenome = 'Rosseti Tozatti'
    const idade = 46

    console.log('Nome: ', nome + ' ' + sobrenome)
    console.log('Idade: ', idade)
}

gerarNome()

// Passando parâmetros
function nomeParametros(nome, sobrenome, idade) {
    console.log('Nome: ', nome + ' ' + sobrenome)
    console.log('Idade: ', idade)
}

nomeParametros('Marco Antônio', 'Waldehelm Tozatti', 8)

// Retornando dados
function nomeReturn(nome, sobrenome) {
    return 'Nome: ' + nome + ' ' + sobrenome
}

const novoNome = nomeReturn('Pedro', 'Henriqe')
console.log(novoNome)
