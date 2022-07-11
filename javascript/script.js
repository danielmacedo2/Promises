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
  const nome = "Daniel";

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

// Catch return

const myPromise3 = new Promise((resolve, reject) => {
  const nome = "Breno";

  if (nome === "Daniel") {
    resolve("Usuário Daniel encontrado");
  } else {
    reject("Usuário Daniel não encontrado!");
  }
});

myPromise3
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Erro: " + error);
  });

// Resolve all promises

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 okay! using Timeout");
  }, 2000);
});
const p2 = new Promise((resolve, reject) => {
  resolve("P2 okay");
});
const p3 = new Promise((resolve, reject) => {
  resolve("P3 okay");
});

const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
  console.log(data);
}); // A promessa é executada de forma assincrona ou seja ela não respeita o fluxo do código

console.log("Depois do all()");

//  Varias promises com race

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P4 okay! using Timeout");
  }, 2000);
});
const p5 = new Promise((resolve, reject) => {
  resolve("P5 okay");
});
const p6 = new Promise((resolve, reject) => {
  resolve("P6 okay");
});

const resolveAllRace = Promise.all([p4, p5, p6]).then((data) => {
  console.log(data);
});

// Fetch request API from GitHub
// Fetch API

const userName = "danielmacedo2";

fetch(`https://api.github.com/users/${userName}`, {
  method: "GET",
  headers: {
    Accept: "application/vnd.github,v3+json",
  },
})
  .then((response) => {
    console.log(response);
    console.log(typeof response);
    return response.json();
  })
  .then((data) => {
    console.log(`O nome do usuário é: ${data.name}`);
  })
  .catch((error) => {
    console.log("Ocorreu o erro: " + error)
  })


