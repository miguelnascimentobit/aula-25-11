// requisição de dados usando o metodo get
async function load() {
    const REQUEST = await fetch("https://www.onepieceapi.com/api/devil-fruits")
    return await REQUEST.json()
}

let dados = await load();

console.log(dados);



let header = document.querySelector("header");
// let divFrutas = document.querySelector(".frutas")

// body.innerHTML = dados[0].type

//Escrevendo todas as informaçoes no html 

dados.forEach(element => {
    header.innerHTML += `
    <div class= "conteiner">
    <h1>${element.name.en}</h1>
    <h2> fruta do tipo ${element.type}</h2>
    <img src="${element.image_url}">
    </div>
    `
});
