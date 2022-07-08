// Promise creation

const myPromise = new Promise((resolve, reject) => {

    const nome = "Daniel";

    if(nome === "Daniel") {
        resolve("Usuário Daniel encontrado")
    } else {
        reject("O usuário Daniel não foi encontrado!")
    }
})

