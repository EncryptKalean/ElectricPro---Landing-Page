// ==========================
// FORMULÁRIO DE CONTATO
// ==========================

const form = document.getElementById('contato_container');

// Número que irá receber a mensagem no WhatsApp (sem +, espaços ou traços)
const numero = "00900000000";

// Dispara ao enviar o formulário
form.addEventListener('submit', (e) => {
    const erro_input = form.querySelector('.erro') ?? false;
    if (erro_input) erro_input.classList.remove('erro');

    // Impede o comportamento padrão do formulário (recarregar a página)
    e.preventDefault();

    // Pega o valor do campo nome e remove espaços extras
    const nome = form.querySelector('#nome').value.trim();

    // Pega o telefone e remove tudo que não for número
    const telefone = form.querySelector('#telefone').value.replace(/\D/g, "");

    // Pega a descrição do problema e remove espaços extras
    const descricao = form.querySelector('#descricao').value.trim();

    // Verifica se o formulário atende às validações HTML (required, pattern, etc.)
    if (!form.checkValidity()) {

        // Mostra as mensagens de erro padrão do navegador
        form.reportValidity();
        return;
    }
    // Validação extra para garantir tamanho correto do telefone
    else if (telefone.length < 10 || telefone.length > 11) {

        // Seleciona o input de telefone
        const input = form.querySelector('#telefone');

        // Adiciona uma classe de erro para estilização visual
        input.classList.add('erro');

        return;
    };

    // Monta a mensagem que será enviada para o WhatsApp
    const mensagem = `Olá, gostaria de um orçamento.
    
    Nome: ${nome}
    Telefone: ${telefone}
    Problema: ${descricao}
    `;

    // Codifica a mensagem para poder ser usada em uma URL
    const mensagemFormatada = encodeURIComponent(mensagem);

    // Monta a URL da API do WhatsApp com número e mensagem
    const url = `https://wa.me/${numero}?text=${mensagemFormatada}`;

    // Abre o WhatsApp em uma nova aba com a mensagem preenchida
    window.open(url, "_blank");
});

// ==========================
// SCROLL-ANIMATION (HIDDEN & SHOW)
// ==========================

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry);
        };
    })
}, { threshold: 0.3 });

const hidden = document.querySelectorAll('.hidden');

hidden.forEach(el => observer.observe(el));