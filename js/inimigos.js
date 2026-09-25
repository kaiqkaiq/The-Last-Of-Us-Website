const botoes = document.querySelectorAll(".botaoinfos");

botoes.forEach(botao => {

    botao.addEventListener("click", function () {

        const targetId = this.dataset.target;
        const conteudo = document.getElementById(targetId);

        // Sefechado
        if (!conteudo.classList.contains("show")) {
            const spinner = document.createElement("div");
            spinner.className = "text-center mt-3 spinner-container";
            spinner.innerHTML =
                `
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Carregando...</span>
                    </div>
                `;


            this.after(spinner);
            this.disabled = true;

            setTimeout(() => {
                spinner.remove();
                conteudo.classList.add("show");
                this.disabled = false;
            }, 2000);

        } else {
            // Fechar
            conteudo.classList.remove("show");
        }
    });
});