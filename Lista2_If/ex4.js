const n1 = 4
const n2 = 2
const res = 5

console.log("====Operações====")
console.log("1 - Soma")
console.log("2 - Subtração")
console.log("3 - Multiplicação")
console.log("4 - Divisão")
console.log("5 - Encerrar")
console.log("==============================")
console.log(`Número 1 = ${n1}`)
console.log(`Número 2 = ${n2}`)
console.log(`Opção escolhida = ${res}`)

console.log()

switch (res) {
    case 1:
        console.log(`Soma: ${n1} + ${n2} = ${n1+n2}.`)
        break
    case 2:
        console.log(`Subtração: ${n1} - ${n2} = ${n1-n2}`)
        break
    case 3:
        console.log(`Multiplicação: ${n1} * ${n2} = ${n1*n2}`)
        break
    case 4:
        console.log(`Divisão: ${n1} / ${n2} = ${n1/n2}`)
        break
    case 5:
        console.log("Encerrando...")
        break
    default:
        console.log("Opção inválida")
        break

}