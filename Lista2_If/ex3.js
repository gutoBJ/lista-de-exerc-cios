const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function iniciarMenu() {
    console.log()
    console.log()
    console.log("===Verificar se um número é===")
    console.log("Multiplo de 3")
    console.log("Multiplo de 5")
    console.log("Multiplo de ambos")
    console.log("e - Encerrar")
    console.log("==============================")
    rl.question("Entre com um número ou com uma opção: ", executarOpcao)
}

function executarOpcao(res) {
    console.log()

    if (res % 3 === 0 && res !== "e") {
        console.log(res, " É múltiplo de 3")
    }

    if (res % 5 === 0 && res !== "e") {
        console.log(res, " É múltiplo de 5")
    }

    if (res % 3 === 0 && res % 5 === 0 && res !== "e") {
        console.log(res, " É múltiplo de 3 e de 5")
    }

    if (res % 3 != 0 && res !== "e") {
        console.log(res, " Não é múltiplo de 3")
    }

    if (res % 5 != 0 && res !== "e") {
        console.log(res, " Não é múltiplo de 5")
    }

    if (res === "e") {
        console.log("Encerrando...")
        process.exit()
    }

    if (res != "e" && res < 0) {
        console.log("Valor inválido!")
        rl.close()
    }

    iniciarMenu()

}

iniciarMenu()