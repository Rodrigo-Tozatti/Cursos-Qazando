

// Tipos de variáveis: string - numbers - boolean (true/false)

// Variável tipo VAR
    // Pode ser alterado
var nome = 'Rodrigo'
nome = 'Maria'

// Variável tipo LET
    // Pode ser alterado
let idade = 46
idade = 40

// Variável tipo CONST
    // Não pode ser alterado
const cidade = 'Sertanópolis'
    //cidade = 'Londrina' --> não posso trocar o nome da cidade no desenvolvimento do código

// Variável tipo ARRAY
    // Lista de dados
const paises = ['Brasil', 'Argentina', 'Alemanha']

// Variável tipo OBJETO
    // Valores obs: as chaves é o que está antes dos ':' ex: nome e preco (abaixo)
let devices = {
    nome: 'iPhone 15',
    preco: 6000,
    cores: {
        cor01: 'vermelho',
        cor02: 'azul',
        cor03: 'amarelo'
    }
}

// Imprimir no promp
console.log(nome)