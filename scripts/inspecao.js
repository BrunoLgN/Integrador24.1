document.addEventListener('DOMContentLoaded', () => {
    const buscarOrdemButton = document.getElementById('buscarOrdem');
    buscarOrdemButton.addEventListener('click', () => {
        const inputOrdem = document.querySelector('.input-ordem').value;
        buscarOrdem(inputOrdem);
    });
});

function buscarOrdem(nome) {
    const ordemServico = JSON.parse(localStorage.getItem('ordemServico'));
    const detalhesDiv = document.getElementById('detalhesOrdem');
    detalhesDiv.innerHTML = '';

    if (ordemServico && ordemServico.nome === nome) {
        const detalhesOrdem = `
            <p>Nome: ${ordemServico.nome}</p>
            <p>Serviço: ${ordemServico.servico}</p>
            <p>Data: ${ordemServico.data}</p>
            <p>Custo das peças: R$ ${ordemServico.custoPecas}</p>
            <p>Custo da mão de obra: R$ ${ordemServico.custoMaoDeObra}</p>
            <p>Valor Total: R$ ${ordemServico.valorTotal}</p>
            <p>Inspecionado: ${ordemServico.inspeccionado ? 'Sim' : 'Não'}</p>
            <p>Liberado: ${ordemServico.liberado ? 'Sim' : 'Não'}</p>
        `;
        detalhesDiv.innerHTML = detalhesOrdem;

        const inspecionarButton = document.createElement("button");
        inspecionarButton.innerHTML = ordemServico.inspeccionado ? "Marcar como Não Inspecionado" : "Marcar como Inspecionado";
        detalhesDiv.appendChild(inspecionarButton);
        inspecionarButton.addEventListener("click", function () {
            ordemServico.inspeccionado = !ordemServico.inspeccionado;
            localStorage.setItem('ordemServico', JSON.stringify(ordemServico));
            alert(`Ordem de Serviço ${ordemServico.inspeccionado ? 'inspecionada' : 'não inspecionada'} com sucesso!`);
            buscarOrdem(nome);
        });

        const liberarButton = document.createElement("button");
        liberarButton.innerHTML = ordemServico.liberado ? "Marcar como Não Liberado" : "Marcar como Liberado";
        detalhesDiv.appendChild(liberarButton);
        liberarButton.addEventListener("click", function () {
            ordemServico.liberado = !ordemServico.liberado;
            localStorage.setItem('ordemServico', JSON.stringify(ordemServico));
            alert(`Veículo ${ordemServico.liberado ? 'liberado' : 'não liberado'} com sucesso!`);
            buscarOrdem(nome);
        });
    } else {
        detalhesDiv.innerHTML = '<p>Ordem de serviço não encontrada.</p>';
    }
}
