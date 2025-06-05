//ARRAY
let frutas = ["banana", "maça"]
//PUSH - adicionar um item ao array na ultima posição
frutas.push("laranja")
frutas.push("melão", "melancia")
console.log(frutas)

//POP - remover o último item do array
const removido = frutas.pop()
console.log("O item removido foi: ",removido)
console.log(frutas)

//SHIFT - remove o primeiro elemento do array
let primeiro = frutas.shift()
console.log("Removendo o primeiro item do array: ", primeiro)
console.log(frutas)

//UNSHIFT - adicionar um ou mais elementos no inicio do array
frutas.unshift("kiwi", "bergamota")
console.log(frutas)

//CONCAT - unir dois ou mais arrays
const frutas1 = ["maça", "banana"]
const frutas2 = ["kiwi", "laranja"]

const todasFrutas = frutas2.concat(frutas1)
console.log("Juntando os arrays", todasFrutas)

//SLICE - retorna uma cópia menor de uma parte do array... sem modificar o array original
console.log("Atual - testando slice... array completo", frutas)
const copiaFrutasSlice = frutas.slice(1,4) // não inclui o ítem de índice 4.
console.log(copiaFrutasSlice)

//SPLICE - modifica o conteudo de um array removendo OU SUBSTITUINDO ELEMENTOS
console.log("método splice", frutas)
const removidos = frutas.splice(1, 3, "uva", "melancia")
//comece a remover no indice 1,
//remova 3 itens
//coloque no lugar: "uva" e "melancia"
console.log(removidos)
console.log("depois do splice ficou como o array:",frutas)


//INDEXOF - retorna o índice da primeira ocorrencia no array... 
// se não encontrar retorna -1
let frutasIndexOf = ["banana", "maça", "uva"]

const posicao = frutasIndexOf.indexOf("kiwi")
console.log("Posição 1 - ",posicao)

const posicao2 = frutasIndexOf.indexOf("uva")
console.log("Posição 2 - ",posicao2)

//INCLUDES - verifica se o valor está presente no array
console.log("includes: ", frutas)

console.log(frutas.includes("abacaxi"))
console.log(frutas.includes("melão"))

//forEach - Executa uma função para cada elemento do array (não retorna nada em específico)
const frutasTeste = ["maça", "banana", "kiwi", "abacaxi", "mamão", "melão"]

for(let i = 1; i<=3; i++){
    console.log(frutasTeste[i])
}

//pegar cada elemento do array e inserir dentro da minha frase....
frutasTeste.forEach(function (fruta, indice){
    console.log("-----------------------------")
    console.log(`Fruta:  ${indice + 1}: ${fruta}`)
})

frutasTeste.forEach((fruta, indice)=>{
    if(indice >=1 && indice <=3){
        console.log(fruta)
    }
})

const nome = "Lucas"
const idade = 18

console.log(`O ${nome} tinha ${idade} anos em 2009`)

//MAP - cria um novo array com resultados da aplicação de uma função em cada elemento
const timesGrandes = ["Corinthians", "Real Valladolid", "Mirassol", "Barcelona"]

const frases = timesGrandes.map(function(times, indice){
    return `Esses são os maiores times do mundo em ordem: ${indice + 1} -  ${times}`
})

console.log(frases)

//EXEMPLO MAP2
const respostaAPI = [
    {nome: "Produto A", preco: 30},
    {nome: "Produto B", preco: 40},
    {nome: "Produto C", preco: 50},
]

//MAP TRANSFORMAR OS DADOS PARA EXIBIR FORMATADO
//map serve para criar um novo array aplicando uma função a cada elemento
//do array original
const listaFormatada = respostaAPI.map(produto =>{
    return (`${produto.nome} - R$ ${produto.preco},00`)
})

console.log(listaFormatada)

//FILTER - cria um novo array com os elementos que passam na condição
const numeros = [10, 20, 8, 7, 30, 40, 50, 60, 2, 150]
const maioresQue50 = numeros.filter(num => num > 50)
console.log(maioresQue50)

const dados = [10, 20, "Lucas", true, "José", null, {fruta: "abacaxi"}]
const dadosFiltrados = dados.filter((item) => typeof item ==="string")
console.log(dadosFiltrados)

//FIND - retorna o primeiro elemento que satisfaz a condição
const carros = ["Creta", "Chevette", "Opala", "Ferrari", "Fusca"]
const resultadoCarros = carros.find(carros => carros.length > 6)
console.log(resultadoCarros)

//FINDINDEX - retorna o indice do primeiro elemento que satisfaz a condição
const indiceCarro = carros.findIndex(carro => carro.startsWith("X"))
console.log(indiceCarro)

//SOME - retorna TRUE  se qualquer elemento atender a condição
const temCarroComLetraF = carros.some(carro => carro.startsWith("X"))
const temCarroComMaisDe6Letras = carros.some(carro => carro.length >6)
console.log(temCarroComLetraF)
console.log(temCarroComMaisDe6Letras)

//EVERY - retorna true SE TODOS OS ELEMENTOS DO ARRAY atenderem a condição
const todosCarrosCom2LetrasOuMais = carros.every(carro => carro.length > 5)
console.log("método every",todosCarrosCom2LetrasOuMais)

//SORT - ordena o array
carros.sort()
console.log(carros)

//ordenando de Z a A
const ordenandoDesc = carros.sort((a,b) => b.localeCompare(a))
console.log(ordenandoDesc)
const numeros1 = [1,20,2,70,100,3]

numeros1.sort((a,b) => b-a)
console.log(numeros1)

//REVERSE - inverte a posição do array
const frutasReverse = ["maça", "banana", "kiwi", "melão"]
frutasReverse.reverse()
console.log(frutasReverse)

//REDUCE - aplica uma função a cada elemento do array para obter um unico valor

const numerosReduce = [10,20,30]

const somaReduce = numerosReduce.reduce((acumulador, valorAtual)=>{
    return acumulador + valorAtual
}, 10) //o zero é o valor inicial do acumulador

console.log( "Reduce",somaReduce)

//reduce com string
const palavrasReduce = ["ola", "turma", 10]

const fraseTurma10 = palavrasReduce.reduce((acumulador, palavra)=>{
    return acumulador + " " + palavra
})

console.log(fraseTurma10)

//JOIN - junta os elementos de uma string (ex: separar por virgula)
const chamada = ["Lucas", "Leonardo", "Alan", "Marcelo", "Vinicius", "Nadine"]

//juntar os elementos em uma string separando por virgula
const chamadaJoin = chamada.join(", ")
console.log(chamadaJoin)

//SPLIT - divide a string em partes e retorna um array com base no separador
const fraseString = "A Turma 10 todos estão amando os métodos JS"
const palavrasExemploSplit = fraseString.split(" ")
console.log(palavrasExemploSplit)

//FLAT - achatar arrays aninhados
const frutasFlat = ["maça", "banana", ["kiwi", "morango"], "laranja"]
const FrutasAchatandoArray = frutasFlat.flat()

console.log(FrutasAchatandoArray)