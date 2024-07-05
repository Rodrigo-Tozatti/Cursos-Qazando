
// repetição por array
    // array.forEach(element => {    
    // });

const cidades = ['Londrina', 'Cambé', 'Maringá', 'Sertanópolis']

cidades.forEach((elemento, index) => {
    console.log('Execução número: ' + index)
    console.log(elemento)
})

// for normal
    // for (let index = 0; index < 10; index++) { 
    // }

for(let index = 0; index < 10; index++){
    console.log(index)
}

for(let index = 0; index < cidades.length; index++){
    console.log(cidades[index])
}