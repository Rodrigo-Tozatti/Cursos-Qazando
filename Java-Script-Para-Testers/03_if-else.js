

// if - else
/*  if(condicao) {
} else {
 }

 Obs: Sinais de igualdade
    == ---> igual
    != ---> diferente
*/

    const nome = 'Rodrigo'

    // if(nome == 'Rodrigo') {
    //     console.log('Condição atendida!!!')
    // } else {
    //     console.log('Condição NÃO atendida!!!')
    // }

let idade = 60

if (idade != 30) {
    console.log('Condição atendida!!!')
} else {
    console.log('Condição NÃO atendida!!!')
}

if (idade == 10) {
    console.log('Idade igual a 10')
} else if (idade > 40) {
    console.log('Idade maior que 40')
} else {
    console.log('Condições NÃO atendidas!!!')
}

// Com valores booleanos
const e_maior_de_idade = false

if(e_maior_de_idade == true) {
    console.log('Maior de idade')
} else {
    console.log('Menor de idade')
}