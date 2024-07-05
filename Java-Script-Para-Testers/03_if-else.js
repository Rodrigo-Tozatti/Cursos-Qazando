

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

var preco = 400

if(preco < 100) {
    console.log('Sem frete grátis')
}else if(preco < 200){
    console.log('Frete grátis')
}else if(preco < 400){
    console.log('Frete grátis e desconto de 10%')
}else {
    console.log('Frete grátis e desconto de 15%')
}


/*  *** Chat GPT ***
Os operadores da condição `if / else` em JavaScript são usados para tomar decisões no código.
Eles permitem que você execute diferentes blocos de código com base em condições diferentes. Aqui está um resumo dos operadores e como eles são usados:

### Operador `if`
O operador `if` verifica uma condição. Se a condição for verdadeira, o bloco de código dentro do `if` será executado.

```javascript
if (condição) {
  // bloco de código a ser executado se a condição for verdadeira
}
```

### Operador `else`
O operador `else` pode ser usado após um `if` para especificar um bloco de código que será executado se a condição do `if` for falsa.

```javascript
if (condição) {
  // bloco de código a ser executado se a condição for verdadeira
} else {
  // bloco de código a ser executado se a condição for falsa
}
```

### Operador `else if`
O operador `else if` permite testar várias condições. Se a condição do `if` for falsa, você pode verificar outra condição com `else if`.

```javascript
if (condição1) {
  // bloco de código a ser executado se condição1 for verdadeira
} else if (condição2) {
  // bloco de código a ser executado se condição2 for verdadeira
} else {
  // bloco de código a ser executado se todas as condições anteriores forem falsas
}
```

### Exemplos

#### Exemplo 1: Verificar se um número é positivo

```javascript
let numero = 5;

if (numero > 0) {
  console.log("O número é positivo.");
} else {
  console.log("O número não é positivo.");
}
```

#### Exemplo 2: Verificar a faixa etária

```javascript
let idade = 20;

if (idade < 13) {
  console.log("Criança");
} else if (idade < 20) {
  console.log("Adolescente");
} else if (idade < 60) {
  console.log("Adulto");
} else {
  console.log("Idoso");
}
```

### Operadores de Comparação

Para usar o `if / else`, você precisa de operadores de comparação para definir suas condições. Aqui estão alguns operadores comuns:

- `==`: igual a
- `!=`: diferente de
- `>`: maior que
- `<`: menor que
- `>=`: maior ou igual a
- `<=`: menor ou igual a

### Operadores Lógicos

Você também pode combinar condições usando operadores lógicos:

- `&&`: E lógico (ambas as condições devem ser verdadeiras)
- `||`: OU lógico (pelo menos uma das condições deve ser verdadeira)
- `!`: NÃO lógico (inverte o valor lógico da condição)

#### Exemplo com operadores lógicos

```javascript
let idade = 25;
let possuiCarteira = true;

if (idade >= 18 && possuiCarteira) {
  console.log("Pode dirigir.");
} else {
  console.log("Não pode dirigir.");
}
```
*/
