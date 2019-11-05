function verificar() {
    var n1 = document.getElementById("n1").innerHTML; //pq é uma div
    var n2 = document.getElementById("n2").value; //pq é um campo

    if (n1 == n2) {
        alert("VOCÊ ACERTOU");
    } else {
        alert("VOCÊ ERROU O NÚMERO");
    }
}