const botoes = document.querySelectorAll(".botaoinfos");

botoes.forEach(botao => {

    botao.addEventListener("click", function () {

        const targetId = this.dataset.target;
        const conteudo = document.getElementById(targetId);

        // Se fechado
        if (!conteudo.classList.contains("show")) {
            const progress = document.createElement("div");
            progress.className = "text-center mt-3";
            progress.innerHTML =
                `
                    <div class="progress" role="progressbar" aria-label="Carregando...">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 100%"></div>
                    </div>
                `;

            this.after(progress);
            this.disabled = true;

            setTimeout(() => {
                progress.remove();
                conteudo.classList.add("show");
                this.disabled = false;
            }, 2000);

        } else {
            // Fechar
            conteudo.classList.remove("show");
        }
    });
});