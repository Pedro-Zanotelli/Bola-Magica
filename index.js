function perguntar() {
    var resposta = document.querySelector(".resposta");
    resposta.innerHTML = "Carregando resposta...";
  
    const pergunta = document.querySelector(".pergunta").value;
    
    const novaPergunta = {
        pergunta: pergunta,
    }
    
    const promessa = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/yesno", novaPergunta);
  
    promessa.then(quandoSucesso);
   
    promessa.catch(quandoErro);
  }
  
  function quandoSucesso(response) {
    const simOuNao = response.data.resposta;
    console.log(response)
    const imagem = response.data.imagem;
  
    criarSimOuNao(simOuNao, imagem);
  }
  
  function quandoErro(erro) {
    const elementoResposta = document.querySelector(".resposta");
    elementoResposta.innerHTML = "A pergunta está vazia!";
  }
  
 
  function criarSimOuNao(simOuNao, imagem) {
    const elementoResposta = document.querySelector(".resposta");
  
    elementoResposta.innerHTML = `
      <img src="${imagem}">
      <div>${simOuNao}</div>
    `;
  }