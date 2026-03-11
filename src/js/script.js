// FORM

const form = document.getElementById('contato_container');
const numero = "84900000000";

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = form.querySelector('#nome').value.trim();
    const telefone = form.querySelector('#telefone').value.replace(/\D/g, "");
    const descricao = form.querySelector('#descricao').value.trim();

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    else if (telefone.length < 10 || telefone.length > 11) {
        const input = form.querySelector('#telefone');

        input.classList.add('erro');

        return;
    };

    const mensagem = `Olá, gostaria de um orçamento.
    
    Nome: ${nome}
    Telefone: ${telefone}
    Problema: ${descricao}
    `;

    const mensagemFormatada = encodeURIComponent(mensagem);
    const url = `https://wa.me/${numero}?text=${mensagemFormatada}`;

    window.open(url, "_blank");
});