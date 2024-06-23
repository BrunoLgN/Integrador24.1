function cadastroCliente(){
    
    document.querySelector('.tomar-acao' ).parentNode.removeChild(document.querySelector('.tomar-acao' ));
    document.querySelector('.consulta' ).parentNode.removeChild(document.querySelector('.consulta' ));
    document.querySelector('.cadastro' ).parentNode.removeChild(document.querySelector('.cadastro' ));
    

    const container = document.querySelector('.quadrado-cadastro')

   // Manipulação to titulo: Cadastro Cliente
    const divTitulo = document.createElement('div')
    container.appendChild(divTitulo)
    const titulo = document.createElement('h2')
    divTitulo.appendChild(titulo)
    titulo.innerHTML = "Cadastro de cliente"

    const divForm1 = document.createElement('div')
    divForm1.classList.add('alinhar-cadastro', 'flex-formulario')
    container.appendChild(divForm1)

    const divNome = document.createElement('div')
    divForm1.appendChild(divNome)
    
    const nome = document.createElement('p')
    nome.classList.add('texto-cadastro')
    divNome.appendChild(nome)
    nome.innerHTML = 'Nome:'
    
    const divInput1 = document.createElement('div')
    divForm1.appendChild(divInput1)
   
    const input1 = document.createElement('input')
    divInput1.appendChild(input1)
    input1.classList.add('margin')

    const divcpf = document.createElement('div')
    divForm1.appendChild(divcpf)
    
    const cpf = document.createElement('p')
    cpf.classList.add('texto-cadastro')
    divcpf.appendChild(cpf)
    cpf.innerHTML = 'CPF:'

    const divInput2 = document.createElement('div')
    divForm1.appendChild(divInput2)

    const input2 = document.createElement('input')
    divInput2.appendChild(input2)
    input2.classList.add('margin2')


    const divForm2 = document.createElement('div')
    divForm2.classList.add('alinhar-cadastro', 'flex-formulario')
    container.appendChild(divForm2)

    const divEndereco = document.createElement('div')
    divForm2.appendChild(divEndereco)
    
    const endereco = document.createElement('p')
    endereco.classList.add('texto-cadastro')
    divEndereco.appendChild(endereco)
    endereco.innerHTML = 'Endereço:'

    const divInput3 = document.createElement('div')
    divForm2.appendChild(divInput3)

    const input3 = document.createElement('input')
    divInput3.appendChild(input3)

    const divTelefone = document.createElement('div')
    divForm2.appendChild(divTelefone)

    const telefone = document.createElement('p')
    telefone.classList.add('texto-cadastro')
    divTelefone.appendChild(telefone)
    telefone.innerHTML = 'Telefone: '

    const divInput4 = document.createElement('div')
    divForm2.appendChild(divInput4)

    const input4 = document.createElement('input')
    divInput4.appendChild(input4)

    const divTitulo2 = document.createElement('div')
    container.appendChild(divTitulo2)
    const titulo2 = document.createElement('h2')
    divTitulo2.appendChild(titulo2)
    titulo2.innerHTML = "Registro de Veiculo"

    const divForm3 = document.createElement('div')
    divForm3.classList.add('alinhar-cadastro', 'flex-formulario')
    container.appendChild(divForm3)

    const divMarca = document.createElement('div')
    divForm3.appendChild(divMarca)
    
    const marca = document.createElement('p')
    marca.classList.add('texto-cadastro')
    divMarca.appendChild(marca)
    marca.innerHTML = 'Marca:'
    

    const divInput5 = document.createElement('div')
    divForm3.appendChild(divInput5)

    const input5 = document.createElement('input')
    divInput5.appendChild(input5)
    input5.classList.add('margin')

    const divPlaca = document.createElement('div')
    divForm3.appendChild(divPlaca)
    
    const placa = document.createElement('p')
    placa.classList.add('texto-cadastro')
    divPlaca.appendChild(placa)
    placa.innerHTML = 'Placa:'

    const divInput6= document.createElement('div')
    divForm3.appendChild(divInput6)

    const input6 = document.createElement('input')
    divInput6.appendChild(input6)
    input6.classList.add('margin4')

    const divForm4 = document.createElement('div')
    divForm4.classList.add('alinhar-cadastro', 'flex-formulario')
    container.appendChild(divForm4)

    const divAno = document.createElement('div')
    divForm4.appendChild(divAno)
    
    const ano= document.createElement('p')
    ano.classList.add('texto-cadastro')
    divAno.appendChild(ano)
    ano.innerHTML = 'Ano:'

    const divInput7= document.createElement('div')
    divForm4.appendChild(divInput7)

    const input7 = document.createElement('input')
    divInput7.appendChild(input7)
    input7.classList.add('margin5')

    const divCor= document.createElement('div')
    divForm4.appendChild(divCor)
    
    const cor= document.createElement('p')
    cor.classList.add('texto-cadastro')
    divCor.appendChild(cor)
    cor.innerHTML = 'Cor:'

    const divInput8 = document.createElement('div')
    divForm4.appendChild(divInput8)

    const input8 = document.createElement('input')
    divInput8.appendChild(input8)
    input8.classList.add('margin6')

    const divForm5 = document.createElement('div')
    divForm5.classList.add('alinhar-cadastro', 'flex-formulario', 'div-dano')
    container.appendChild(divForm5)

    const dano = document.createElement('h3')
    divForm5.appendChild(dano)
    dano.innerHTML = 'Dano do veiculo'
    
    const divInput9= document.createElement('div')
    divForm5.appendChild(divInput9)

    const input9 = document.createElement('input')
    divInput9.appendChild(input9)
    input9.classList.add('input-dano')

    const divForm6 = document.createElement('div')
    divForm6.classList.add('alinhar-cadastro', 'flex-formulario')
    container.appendChild(divForm6)

    const enviar = document.createElement('button')
    divForm6.appendChild(enviar)
    enviar.innerHTML = 'Enviar'

    enviar.addEventListener('click', function() {
        setCadastro(input1, input2, input3, input4, input5, input6, input7, input8, input9);
    });

    
}




let cadastros = [];

function setCadastro(input1, input2, input3, input4, input5, input6, input7, input8, input9) {
    
    if (input1.value.trim() !== "" && input2.value.trim() !== "" && input3.value.trim() !== "" && input4.value.trim() !== "" && input5.value.trim() !== "" && input6.value.trim() !== "" && input7.value.trim() !== "" && input8.value.trim() !== "" && input9.value.trim() !== "") {
        
        const anoAtual = new Date().getFullYear();
        const anoVeiculo = parseInt(input7.value);
        if (anoVeiculo > anoAtual || anoVeiculo <= anoAtual - 20) {
            alert("Por favor, insira um ano de fabricação válido.");
            return; 
        }

        let cadastro = {
            nome: input1.value,
            cpf: input2.value,
            endereco: input3.value,
            telefone: input4.value,
            marca: input5.value,
            placa: input6.value,
            ano: input7.value,
            cor: input8.value,
            dano: input9.value
        };
        cadastros.push(cadastro);
        localStorage.setItem('cadastros', JSON.stringify(cadastros));
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}


function consulta() {
    
    const elementosRemover = document.querySelectorAll('.tomar-acao, .consulta, .cadastro');
    elementosRemover.forEach(function(elemento) {
        elemento.parentNode.removeChild(elemento);
    });

    const quadrado = document.querySelector('.quadrado-cadastro');

    
    let conteudoCliente = document.querySelector('.conteudo-cliente');
    if (!conteudoCliente) {
        conteudoCliente = document.createElement('div');
        conteudoCliente.classList.add('conteudo-cliente');
        quadrado.appendChild(conteudoCliente);
    }

    const inputNovo = document.createElement('input');
    quadrado.appendChild(inputNovo);

    inputNovo.addEventListener('input', function () {
        const valorInput = inputNovo.value.trim().toLowerCase();

        
        conteudoCliente.innerHTML = '';
        
        cadastros.forEach(function (cadastro) {
            const nome = cadastro.nome.toLowerCase();
            if (nome === valorInput) {
                const divForm = document.createElement('div');
                divForm.classList.add('item', 'flex-formulario');
                conteudoCliente.appendChild(divForm);

                for (const propriedade in cadastro) {
                    const p = document.createElement('p');
                    p.classList.add("paragrafo-consulta")
                    p.textContent = `${propriedade}: ${cadastro[propriedade]}`;
                    divForm.appendChild(p);
                    divForm.classList.add('container-consulta')
                }
            }
        });
    });
}


cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];

