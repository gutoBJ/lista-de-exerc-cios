const temp = 21

console.log()
console.log("========Temperatura========")
console.log("Menor que 10 - Muito frio")
console.log("Entre 10 e 17 - Frio")
console.log("Entre 18 e 25 - Agradável")
console.log("Maior que 25 - Quente")
console.log("===========================")
console.log()
console.log(`Temperatura: ${temp} graus`)
console.log()
console.log("Resultado:")

if (temp < 10) {
    console.log("Muito frio")
} else if (temp >= 10 && temp <= 17) {
    console.log("Frio")
} else if (temp >= 18 && temp <= 25) {
    console.log("Agradável")
} else {
    console.log("Quente")
}
console.log()