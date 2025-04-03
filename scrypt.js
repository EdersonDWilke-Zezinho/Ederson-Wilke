function enviarzap(event) {
    //event.preventDefaut()

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;
    const meutelefone = '5569992787538'

    const texto =  `Olá, me chamo ${nome}! O meu e-mail é: ${email} O meu telefone: ${telefone}%0A Minha mensagem de contato é: ${mensagem}`;
    const msgformatada = encodeURIComponent(texto)

    const url = `https://api.whatsapp.com/send?phone=${meutelefone}&text=${msgformatada}`
    console.log(texto)
    console.log(msgformatada)
    window.open(url, '_blank')
}


