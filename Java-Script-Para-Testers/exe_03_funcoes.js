
// Exercício 03 Funções 

// Crie uma função
// Que soma 2 números e retorna esses números somados
// Deve ser enviado por parâmetros os dois números da soma

// Número 01: 20
// Número 02: 10
// Soma: 30


let numero01 = 300
let numero02 = 540

function somaNumeros(soma01, soma02){
    return soma01 + soma02
}

const numeroSomado = somaNumeros(numero01, numero02)

console.log('Número 01: ', numero01)
console.log('Número 02: ', numero02)
console.log('Soma: ', numeroSomado)

//------------------------------------------

function somaNumeros02(numero1, numero2) {
    const resultado = numero1 + numero2
    console.log('Número 01: ', numero1)
    console.log('Número 02: ', numero2)
    console.log('Soma: ', resultado)
}

somaNumeros02(100, 200)


