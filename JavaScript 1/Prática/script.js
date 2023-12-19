// Criando Título

// Criando varíavel para armazenar o corpo da página
let corpo = document.querySelector(".corpo");

// Criando variável para criar título na página
const titulo = document.createElement("h1");

// Colocando o conteúdo dentro do título criado
titulo.innerText = "Dogueria de Meiki!"

// Adicionando o elemento criado no corpo
corpo.appendChild(titulo);


// Criando card

// Criando uma div para os cards e adicionando na página principal
let cards = document.createElement("div");
cards.classList.add("cards");
corpo.appendChild(cards);
console.log(cards);

// Criando o card e adicionando na div cards
let card = document.createElement("div");
card.classList.add("card");
card.innerHTML = `
<h2> Nome do produto </h2>
<img src="https://media.istockphoto.com/id/691726064/pt/foto/mixed-chocolate-truffles-brigadeiros.webp?b=1&s=170667a&w=0&k=20&c=AUuoAobzh6XKwQ9yxXJBWHMthLocvyAQrTUwlWehrdY=" alt="foto de brigadeiros" />
<p> Descrição do produto </p>
<p> R$ 2,00 </p>

`;
cards.appendChild(card);
