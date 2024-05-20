function cadastroCliente(){
    
    document.querySelector('.tomarAcao' ).parentNode.removeChild(document.querySelector('.tomarAcao' ));
    document.querySelector('.consulta' ).parentNode.removeChild(document.querySelector('.consulta' ));
    document.querySelector('.cadastro' ).parentNode.removeChild(document.querySelector('.cadastro' ));
    

    const container = document.querySelector('.quadradoCadastro')

   // Manipulação to titulo: Cadastro Cliente
    const divTitulo = document.createElement('div')
    container.appendChild(divTitulo)
    const titulo = document.createElement('h2')
    divTitulo.appendChild(titulo)
    titulo.innerHTML = "Cadastro de cliente"

    const divForm1 = document.createElement('div')
    divForm1.classList.add('item', 'containerForm')
    container.appendChild(divForm1)

    const divNome = document.createElement('div')
    divForm1.appendChild(divNome)
    
    const nome = document.createElement('p')
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
    divcpf.appendChild(cpf)
    cpf.innerHTML = 'CPF:'

    const divInput2 = document.createElement('div')
    divForm1.appendChild(divInput2)

    const input2 = document.createElement('input')
    divInput2.appendChild(input2)
    input2.classList.add('margin2')


    const divForm2 = document.createElement('div')
    divForm2.classList.add('item', 'containerForm')
    container.appendChild(divForm2)

    const divEndereco = document.createElement('div')
    divForm2.appendChild(divEndereco)
    
    const endereco = document.createElement('p')
    divEndereco.appendChild(endereco)
    endereco.innerHTML = 'Endereço:'

    const divInput3 = document.createElement('div')
    divForm2.appendChild(divInput3)

    const input3 = document.createElement('input')
    divInput3.appendChild(input3)

    const divTelefone = document.createElement('div')
    divForm2.appendChild(divTelefone)

    const telefone = document.createElement('p')
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
    divForm3.classList.add('item', 'containerForm')
    container.appendChild(divForm3)

    const divMarca = document.createElement('div')
    divForm3.appendChild(divMarca)
    
    const marca = document.createElement('p')
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
    divPlaca.appendChild(placa)
    placa.innerHTML = 'Placa:'

    const divInput6= document.createElement('div')
    divForm3.appendChild(divInput6)

    const input6 = document.createElement('input')
    divInput6.appendChild(input6)
    input6.classList.add('margin4')

    const divForm4 = document.createElement('div')
    divForm4.classList.add('item', 'containerForm')
    container.appendChild(divForm4)

    const divAno = document.createElement('div')
    divForm4.appendChild(divAno)
    
    const ano= document.createElement('p')
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
    divCor.appendChild(cor)
    cor.innerHTML = 'Cor:'

    const divInput8 = document.createElement('div')
    divForm4.appendChild(divInput8)

    const input8 = document.createElement('input')
    divInput8.appendChild(input8)
    input8.classList.add('margin6')

    const divForm5 = document.createElement('div')
    divForm5.classList.add('item', 'containerForm', 'divDano')
    container.appendChild(divForm5)

    const dano = document.createElement('h3')
    divForm5.appendChild(dano)
    dano.innerHTML = 'Dano do veiculo'
    
    const divInput9= document.createElement('div')
    divForm5.appendChild(divInput9)

    const input9 = document.createElement('input')
    divInput9.appendChild(input9)
    input9.classList.add('inputDano')

    const divForm6 = document.createElement('div')
    createDivForm(divForm6)

    const enviar = document.createElement('button')
    divForm6.appendChild(enviar)
    enviar.innerHTML = 'Enviar'
}

function createDivForm(nome){
    
    nome.classList.add('item', 'containerForm')
    container.appendChild(nome)
}

function consulta(){

    document.querySelector('.tomarAcao' ).parentNode.removeChild(document.querySelector('.tomarAcao' ));
    document.querySelector('.consulta' ).parentNode.removeChild(document.querySelector('.consulta' ));
    document.querySelector('.cadastro' ).parentNode.removeChild(document.querySelector('.cadastro' ));
    


}