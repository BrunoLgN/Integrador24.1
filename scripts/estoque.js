const submit = document.querySelector(".botao");
let dados = JSON.parse(localStorage.getItem('dados')) || []; 

submit.addEventListener('click', function(event){
    const nome = document.getElementById('nome').value;
    const preco = document.getElementById('preço').value;
    const quantidade = document.getElementById('quantidade').value;
    const codigo = document.getElementById('codigo').value;

    const dadosFormulario = {
        nome: nome,
        preco: preco,
        quantidade: quantidade,
        codigo: codigo
    };

    dados.push(dadosFormulario); 
    localStorage.setItem("dados", JSON.stringify(dados)); 
});


function mostrarBusca(){
    const input = document.querySelector('.input-busca');
    const quadradoBranco = document.querySelector('.quadrado-branco');
    const resultadosAnteriores = quadradoBranco.querySelectorAll('p'); // Seleciona todos os parágrafos com resultados anteriores
    
    
    resultadosAnteriores.forEach(resultado => {
        resultado.remove();
    });
    
    dados.forEach(dado => {
        const nomePeca = dado.nome.toLowerCase();

        if(nomePeca === input.value.toLowerCase()){
            Object.keys(dado).forEach(propriedade => {
                const p = document.createElement('p');
                p.textContent = `${propriedade}: ${dado[propriedade]}`;
                quadradoBranco.appendChild(p);
            });
        }
    });
}