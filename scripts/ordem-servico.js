document.addEventListener('DOMContentLoaded', () => {
    

    const pesquisarOrdemButton = document.getElementById('pesquisarOrdem');
    pesquisarOrdemButton.addEventListener('click', () => {
        const inputOrdem = document.querySelector('.input-ordem').value;
        mostrarOrdem(inputOrdem);
    });
});

function criarForm(cad) {
    const quadrado = document.querySelector('.quadrado-branco');

    if (quadrado.querySelector('.form-container')) {
        return;
    }

    const div = document.createElement('div');
    div.classList.add('form-container');
    quadrado.appendChild(div);

    const novaOrdem = document.createElement('p');
    div.appendChild(novaOrdem);
    novaOrdem.innerText = "Nova Ordem de Serviço";

    Object.keys(cad).forEach(propriedade => {
        const elemento = document.createElement('p');
        elemento.innerHTML = `${propriedade.charAt(0).toUpperCase() + propriedade.slice(1)}: ${cad[propriedade]}`;
        elemento.classList.add('texto');
        div.appendChild(elemento);
    });

    const input1 = document.createElement('input');
    div.appendChild(input1);
    input1.placeholder = "Custo das peças utilizadas: ";
    input1.classList.add('inputs-servico');

    const input2 = document.createElement('input');
    div.appendChild(input2);
    input2.placeholder = "Custo da mão de obra";
    input2.classList.add('inputs-servico');

    const total = document.createElement("button");
    total.innerHTML = "CLIQUE PARA GERAR VALOR FINAL";
    div.appendChild(total);
    total.addEventListener("click", function () {
        const valor = document.createElement("p");
        div.appendChild(valor);
        valor.innerHTML = `R$  ${parseInt(input1.value) + parseInt(input2.value)}`;
    });

    const saveButton = document.createElement("button");
    saveButton.innerHTML = "Salvar Ordem de Serviço";
    div.appendChild(saveButton);
    saveButton.addEventListener("click", function () {
        const ordemServico = {
            ...cad,
            custoPecas: input1.value,
            custoMaoDeObra: input2.value,
            valorTotal: parseInt(input1.value) + parseInt(input2.value),
            inspeccionado: false,
            liberado: false
        };
        localStorage.setItem('ordemServico', JSON.stringify(ordemServico));
        alert('Ordem de Serviço salva com sucesso!');
    });

    const liberarButton = document.createElement("button");
    liberarButton.innerHTML = "Liberar Veículo";
    div.appendChild(liberarButton);
    liberarButton.addEventListener("click", function () {
        liberarVeiculo(cad.nome);
    });
}

function mostrarOrdem(nome) {
    const ordemServico = JSON.parse(localStorage.getItem('ordemServico'));
    const resultadoDiv = document.getElementById('resultadoOrdem');
    resultadoDiv.innerHTML = '';

    if (ordemServico && ordemServico.nome === nome) {
        const detalhesOrdem = `
            <p>Nome: ${ordemServico.nome}</p>
            <p>Serviço: ${ordemServico.dano}</p>
            
            <p>Custo das peças: R$ ${ordemServico.custoPecas}</p>
            <p>Custo da mão de obra: R$ ${ordemServico.custoMaoDeObra}</p>
            <p>Valor Total: R$ ${ordemServico.valorTotal}</p>
            <p>Inspecionado: ${ordemServico.inspeccionado ? 'Sim' : 'Não'}</p>
            <p>Liberado: ${ordemServico.liberado ? 'Sim' : 'Não'}</p>
        `;
        resultadoDiv.innerHTML = detalhesOrdem;
    } else {
        resultadoDiv.innerHTML = '<p>Ordem de serviço não encontrada.</p>';
    }
}

function liberarVeiculo(nome) {
    const ordemServico = JSON.parse(localStorage.getItem('ordemServico'));

    if (ordemServico && ordemServico.nome === nome) {
        ordemServico.inspeccionado = true;
        ordemServico.liberado = true;
        localStorage.setItem('ordemServico', JSON.stringify(ordemServico));
        alert('Veículo inspecionado e liberado com sucesso!');
        mostrarOrdem(nome);
    } else {
        alert('Ordem de serviço não encontrada.');
    }
}
