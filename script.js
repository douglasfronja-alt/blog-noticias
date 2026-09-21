function curtir(botao) {
    const contador = botao.querySelector("b");
    let numero = Number(contador.textContent);

    numero++;
    contador.textContent = numero;

    botao.classList.add("clicado");

    setTimeout(() => {
        botao.classList.remove("clicado");
    }, 180);
}
