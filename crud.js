
import { collection, addDoc, getDocs, onSnapshot, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
import { db } from "./firebase.js";
export function somar(n1,n2) {
    return n1 + n2;
}
export function subtracao(n1,n2) {
    return n1 - n2;
}
export function multiplicar(n1,n2) {
    return n1 * n2;
}
export function dividir(n1,n2) {
    return n1 / n2;
}
export function pegarColecao() {
    return collection(db,"calculos");
}
export async function salvarCalculo(n1,n2,operacao,resultado) {
    await addDoc(pegarColecao(),{n1:n1,n2:n2,operacao:operacao,resultado:resultado});
}
export async function buscarCalculos() {
    const consulta = await getDocs(pegarColecao());
    const ul = document.getElementById("listaderesultados");
    ul.innerHTML = "";
    consulta.forEach((documento) => {
        const dados = documento.data();
        const linha = document.createElement("li");
        linha.innerText = `${dados.n1} ${dados.operacao} ${dados.n2} = ${dados.resultado}`;
        ul.appendChild(linha);
    });
}
export function escutarCalculos() {
    onSnapshot(pegarColecao(),(consulta) => {
        const ul = document.getElementById("listaderesultados");
        ul.innerHTML = "";
        consulta.forEach((documento) => {
            const dados = documento.data();
            const linha = document.createElement("li");
            linha.innerText = `${dados.n1} ${dados.operacao} ${dados.n2} = ${dados.resultado} `;
            const botao = document.createElement("button");
            botao.innerText = "Excluir";
            botao.addEventListener("click",async function() {
                await excluirCalculo(documento.id);
            });
            linha.appendChild(botao);
            ul.appendChild(linha);
        });
    });
}
export async function excluirCalculo(id) {
    await deleteDoc(doc(db,"calculos",id));
}
