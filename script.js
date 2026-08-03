const dicas = [
    "Use sempre capacete certificado.",
    "Faça a troca de óleo no período recomendado.",
    "Calibre os pneus regularmente.",
    "Nunca pilote sem equipamentos de proteção.",
    "Respeite os limites de velocidade.",
    "Revise freios e corrente periodicamente.",
    "Mantenha a documentação da moto em dia."
];

function mostrarDica() {

    const numero = Math.floor(Math.random() * dicas.length);

    document.getElementById("resultado").innerHTML = dicas[numero];

}
