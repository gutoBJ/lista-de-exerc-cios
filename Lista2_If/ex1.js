const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function iniciarMenu() {
    console.log()
    console.log()
    console.log("=Menu de opções=")
    console.log("0 a 10 - Nota")
    console.log("11 - Encerrar")
    console.log("================")
    rl.question("Entre com a nota do aluno ou uma opção: ", executarOpcao)
}

function executarOpcao(res) {
    console.log()
    if (res >= 7 && res < 11) {
        console.log(`Sua nota é: ${res}`)
        console.log("Aprovado!")
    } else if (res >= 4 && res <= 6.9) {
        console.log(`Sua nota é: ${res}`)
        console.log("Recuperação!")
    } else if (res < 4 && res >= 0) {
        console.log(`Sua nota é: ${res}`)
        console.log("Reprovado!")
    } else if (res == 11) {
        console.log("Encerrando...")
        process.exit()
    } else {
        console.log("Resposta inválida")
        rl.close()
    }

    iniciarMenu()

}

iniciarMenu()
