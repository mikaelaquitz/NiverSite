/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function cadastro() {
    /* remove elemento filho da main*/
    let apagar= document.getElementById("principal");
    apagar.innerText = "";

    let temp = ['Nome', 'Data de Nascimento', 'Grupo', 'Telefone', 'Email'];
    let type = ['text', 'date', 'text', 'tel', 'email']; /*tipos de input */
    /* Cria formulario */
    criarElementos('form', ['id', 'cadastro'], '', 'main');

    /* criando inputs*/
    for (let i = 0; i < temp.length; i++)
    {
        criarElementos('input', ['id', temp[i], 'type', type[i], 'class', 'info','placeholder',temp[i]],'', '#cadastro');
    }
    /* adiciona botão salvar*/
    criarElementos('button', ['id', 'botao_salvar'], 'Salvar', '#cadastro');

}

function criarElementos(tag, atributos, texto, elementoPai) {
    let el = document.createElement(tag);
    for (let i = 0; i < atributos.length; i++) {
        el.setAttribute(atributos[i], atributos[++i]);
    }
    if (texto)
        el.innerHTML = texto;
    document.querySelector(elementoPai).appendChild(el);
}