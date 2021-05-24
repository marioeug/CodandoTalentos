function validar() {
    const nomemail = document.getElementById("fname");
    if (nomemail.value === "" || nomemail.value === null) {
        return alert("Preencha o campo com o e-mail");
    } else {
        return true;
    }
}