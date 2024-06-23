const infoLogin = {
    usuario: 'admin',
    senha: 'admin'
}

verificarSalvarLogin()
    
function logar(){
    const usuarioRecebido = document.querySelector('.input01').value
    const senhaRecebida = document.querySelector('.input02').value


    if(usuarioRecebido === infoLogin.usuario && senhaRecebida === infoLogin.senha){
        salvarLogin()
        let botaoLogin = document.querySelector('.botao-login')
        botaoLogin.href = '/html/menu.html'
       
    } else{
        const mensagemErro = document.querySelector('.mensagem-erro')
        mensagemErro.innerHTML = 'Erro ao efetuar Login, tente novamente !'
    }


}



function verificarSalvarLogin(){
        let usuarioSalvo = localStorage.getItem('usuarioSalvo');
        let senhaSalva = localStorage.getItem('senhaSalva');
        const botao = document.querySelector('.botaoLembrar')

        if (usuarioSalvo && senhaSalva) {
            document.querySelector('.input01').value = usuarioSalvo;
            document.querySelector('.input02').value = senhaSalva;
            botao.checked = true
        }
}


function salvarLogin(){
    const botao = document.querySelector('.botaoLembrar').checked
    if(botao){
        localStorage.setItem('usuarioSalvo', document.querySelector('.input01').value);
        localStorage.setItem('senhaSalva', document.querySelector('.input02').value);
    }else{
        localStorage.removeItem('usuarioSalvo');
        localStorage.removeItem('senhaSalva');
    }
}