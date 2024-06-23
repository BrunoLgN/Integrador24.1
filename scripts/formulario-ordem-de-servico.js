const enviar = document.querySelector('.enviar')


document.getElementById('enviar').addEventListener('click', function() {
   
    const nome = document.getElementById('nome').value;

    
    const cadastros = JSON.parse(localStorage.getItem("cadastros")); // Parse do JSON armazenado no local storage

   
    if (cadastros) {
       
        cadastros.forEach(cadastro => {
            
            if (cadastro.nome === nome) {
               
                
                criarForm(cadastro)

            }
        });
    }
});

function criarForm(cad) {
    const quadrado = document.querySelector('.quadrado-branco');

    // Verifica se o formulário já foi criado
    if (quadrado.querySelector('.form-container')) {
        return; // Se já existe, não faz nada
    }

    // Cria um contêiner para o formulário e define uma classe específica
    const div = document.createElement('div');
    div.classList.add('form-container'); // Adiciona uma classe identificadora
    quadrado.appendChild(div);

    // Cria texto NOVA ORDEM DE SERVIÇO
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

    const total = document.createElement("button")
    total.innerHTML = "CLIQUE PARA GERAR VALOR FINAL"
    div.appendChild(total)
    total.addEventListener("click", function(){
        const valor = document.createElement("p")
        div.appendChild(valor)
        valor.innerHTML = `R$  ${parseInt(input1.value) + parseInt(input2.value)}`
    })
    
    
}
