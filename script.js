const readline = require("readline")

const batatinha = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function mostrarMenu() {
    console.log("======Menu de produtos======")
    console.log("1 - Cadastrar produto")
    console.log("2 - Deletar produto")
    console.log("3 - Editar produto")
    console.log("4 - Listar todos os produtos")
    console.log("5 - Listar um produto")
    console.log("6 - Encerrar")
    console.log("============================")
}

function executarOpcao(opcao) {
    switch (opcao) {
        case "1":
            console.log("Cadastro")
            break
        case "2":
            console.log("Deletar")
            break
        case "3":
            console.log("Editar")
            break
        case "4": 
            console.log("Listar todos")
            break
        case "5":
            console.log("Listar um")
            break
        case "6":
            console.log("Encerrar")
            process.exit()
        default:
            console.log("Opção inválida")
            batatinha.close()
    }

    iniciarMenu()
}

function iniciarMenu() {
    mostrarMenu()
    batatinha.question("Escolha uma opção: ", executarOpcao)
}

iniciarMenu()