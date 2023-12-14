const titulo = document.querySelector("#titulo");
titulo.innerText = "Título feito com .innerText";

const link = document.querySelector("a");
link.innerText = "Site da Proz Education Cursos"

let lista_ordenada = document.querySelector("#lista-ordenada")
lista_ordenada.innerHTML = `
<li> Apple </li>
<li> Samsung </li>
<li> Motorola </li>
`

let lista_nao_ordenada = document.querySelector("ul")
lista_nao_ordenada.innerHTML = `
<LI> Melancia </li>
<LI> Melão </li>
<LI> Banana </li>
`