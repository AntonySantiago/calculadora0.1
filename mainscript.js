
import { somar,subtracao,multiplicar,dividir,salvarCalculo,escutarCalculos } from "./crud.js";
const ip1 = document.getElementById("ip1");
const ip2 = document.getElementById("ip2");
const resultados = document.getElementById("resultados");
function executarOperacao(funcao,operacao) {
    const n1 = Number(ip1.value);
    const n2 = Number(ip2.value);
    const resultado = funcao(n1,n2);
    resultados.innerText = resultado;
    salvarCalculo(n1,n2,operacao,resultado).catch(console.error);
}
document.getElementById("somar").addEventListener("click",function() {
    executarOperacao(somar,"+");
});
document.getElementById("subtracao").addEventListener("click",function() {
    executarOperacao(subtracao,"-");
});
document.getElementById("multiplicacao").addEventListener("click",function() {
    executarOperacao(multiplicar,"×");
});
document.getElementById("divisao").addEventListener("click",function() {
    executarOperacao(dividir,"÷");
});
document.getElementById("limpar").addEventListener("click",function() {
    ip1.value = "";
    ip2.value = "";
    resultados.innerText = "";
});
escutarCalculos();
