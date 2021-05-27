function validarcampos() {
    const nomemail = document.getElementById("fname");
    const nomesenha = document.getElementById("fname2");
    if (nomemail.value === "" || nomemail.value === null) {
        alert("Campo obrigatório. Preencha com o valor do email");
        window.setTimeout(function() {
            nomemail.focus();
        }, 0);
    } else if (nomesenha.value === "" || nomesenha.value === null) {
        alert("Campo obrigatório. Preencha com o valor da senha");
        window.setTimeout(function() {
            nomesenha.focus();
        }, 0);
    } else {
        return (window.location.href =
            "C:/Dados/GitHUB/CodandoTalentos/Projeto01/index.html");
    }
}
// function validarcampos() {
//     const nomemail = document.getElementById("fname");
//     const nomesenha = document.getElementById("fname2");
//     if (nomemail.value === "" || nomemail.value === null) {
//         Swal.fire({
//             icon: "error",
//             title: "Oops...",
//             text: "Campo obrigatório. Preencha com o valor do email"
//         });
//     } else if (nomesenha.value === "" || nomesenha.value === null) {
//         Swal.fire({
//             icon: "error",
//             title: "Oops...",
//             text: "Campo obrigatório. Preencha com o valor da senha"
//         });
//     } else {
//         return (window.location.href =
//             "C:/Dados/GitHUB/CodandoTalentos/Projeto01/index.html");
//     }
// }