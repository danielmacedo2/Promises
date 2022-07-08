// Promise creation

const myPromise = new Promise((resolve, reject) => {
  const nome = "Daniel";

  if (nome === "Daniel") {
    resolve("Usuário Daniel encontrado");
  } else {
    reject("O usuário Daniel não foi encontrado!");
  }
});

myPromise.then((data) => {
  console.log(data);
});


const myPromise2 = new Promise((resolve, reject) => {
    const nome = "Breno";
    
    if (nome === "Daniel") {
        resolve("Usuário Daniel encontrado");
    } else {
        reject("Usuário Daniel não encontrado!");
    }
});

// Encadeamento de Then's
myPromise2
  .then((data) => {
    return data.toLowerCase();
  })
  .then((stringModified) => {
    console.log(stringModified);
  });
