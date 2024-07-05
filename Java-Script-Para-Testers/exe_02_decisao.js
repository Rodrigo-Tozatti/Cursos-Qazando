

const cidades = ['São Paulo', 'Rio de Janeiro', 'Florianópolis', 'Recife']

for (let index = 0; index < cidades.length; index++) {
    console.log('Execução: ', index + 1)
    console.log('Cidade: ', cidades[index])

    if (cidades[index] == cidades[2]) {
        console.log('Encontrado!!!')
    }else {
        console.log('Não encontrado!!!')
    }
    console.log('-----------------------')
    
}