const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function iniciarMenu() {
    console.log()
    console.log("=========Menu de opções==========")
    console.log("0 a 17 anos - Menor de idade")
    console.log("16 anos ou mais - Pode votar")
    console.log("18 anos ou mais - Pode tirar CNH")
    console.log("e - Encerrar")
    console.log("=================================")
    rl.question("Entre com sua idade ou uma opção: ", executarOpcao)
}

function executarOpcao(res) {
    console.log()
    if (res >= 0) {
        console.log(`Sua idade é: ${res}`)
        if (res < 18) {
            console.log("Menor de idade")
        }

        if (res >= 16) {
            console.log("Pode votar")
        
            if (res >= 18) {
                console.log("Pode tirar a carteira")
            }
        }
    } else if (res === "e") {
        console.log("Encerrando...")
        process.exit()
    } else {
        console.log("Resposta inválida")
        rl.close()
    }

    iniciarMenu()

}

iniciarMenu()