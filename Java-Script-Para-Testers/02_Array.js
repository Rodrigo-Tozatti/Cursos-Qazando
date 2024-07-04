
// Array - lista de valores
const paises = ['Brasil', 'Argentina', 'Alemanha']

console.log('Todo o array: ' + paises) // todo o array
console.log('Posição 2 do array: ' + paises[2]) // acessando uma posição do array
console.log('Tamanho do array: ' + paises.length) // tamanho do array

// Operações com Array
paises.push('Itália', 'Portugal') // adicionando elemwntos no array 'paises'
console.log('Adicionando elemntos no array: ' + paises)

// Remover o último elemento do array
paises.pop()
console.log('Eliminando o último elemento do array: ' + paises)

// Adicionar um elemento no início do array
paises.unshift('Portugal')
console.log('Adicionar um elemento no início do array: ' + paises)

// Remover o primeiro elemento de um array
paises.shift()
console.log('Remover o primeiro elemento de um array: ' + paises)
