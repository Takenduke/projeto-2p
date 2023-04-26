let bt;
document.getElementById("btsubmit").onclick = function(){
    bt = document.getElementById("nome 1").value;
    console.log("Nome: " + bt);
    bt = document.getElementById("nome 2").value;
    console.log("Sobrenome: " + bt)
    bt = document.getElementById("inputidade").value;
    console.log("Idade: " + bt)
    bt = document. getElementById("ani").value;
    console.log("Data de Aniversário: " + bt);
    window.alert("Muito Obrigado !!");
}