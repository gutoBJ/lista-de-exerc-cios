let soma = 0

for (let i = 1; i <= 5; i++) {
    console.log(`Soma de ${soma} + ${i} = ${soma += i}`)
}

console.log()
console.log(`Total: ${soma}`)