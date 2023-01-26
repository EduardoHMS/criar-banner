function fazerbanner() {
    // PEGANDO VALUE DE GIRA
    var select = document.getElementById("sessao");
    var gira = select.options[select.selectedIndex].text;
    var giraD = select.options[select.selectedIndex].value;
    // PEGANDO VALUE DA DATA
    var date = document.getElementById("data").value;
    // PEGANDO VALUE DA HORARIO
    var horario = document.getElementById("horario").value;
    localStorage.setItem("Image", giraD);
    localStorage.setItem("nomeGira", gira);
    localStorage.setItem("data", date);
    localStorage.setItem("horas", horario);
    abrirPag(1);
}

function abrirPag(numero) {
    if (numero == 1) {
        return window.location.href = "../src/pages/page.html";
    }
}
