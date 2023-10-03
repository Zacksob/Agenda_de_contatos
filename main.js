document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");
    const formTabela = document.getElementById("formTabela");
    const tbody = formTabela.querySelector("tbody");

    const contatos = {};

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.getElementById("nome").value;
        const telefone = document.getElementById("telefone").value;

        if (contatos[nome]) {
            alert("Este contato já existe.");
            document.getElementById("nome").value = "";
            document.getElementById("telefone").value = "";
        } else {
            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td>${nome}</td>
                <td>${telefone}</td>
            `;

            tbody.appendChild(newRow);

            contatos[nome] = telefone;
            document.getElementById("nome").value = "";
            document.getElementById("telefone").value = "";
        }
    });
});