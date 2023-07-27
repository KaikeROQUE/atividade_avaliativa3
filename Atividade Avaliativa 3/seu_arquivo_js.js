const quotes = [
    {
      quote: "A vida é o que acontece enquanto você está ocupado fazendo outros planos.",
      author: "John Lennon"
    },
    {
      quote: "Não é a força, mas a constância dos bons sentimentos que conduz os homens à felicidade.",
      author: "Friedrich Nietzsche"
    },
    {
      quote: "O insucesso é apenas uma oportunidade para recomeçar com mais inteligência.",
      author: "Henry Ford"
    },
    {
      quote: "O improviso é importante na novela e na vida.",
      author: "Fernanda Montenegro"
    },
    {
      quote: "Amar o que você faz é o segredo de tudo.",
      author: "Julia Roberts"
    },
    {
      quote:"Vencer sem correr riscos, é triunfar sem glórias!",
      author:"Ayrton Senna"
    },
    {
      quote:"Um herói é alguém que caminha voluntariamente para o desconhecido.",
      author:"Tom Hanks"
    }, 
    {
      quote:"Ninguém além de nós mesmos pode libertar nossa mente.",
      author:"Bob Marley "
    },
    {
      quote:"Se eu fizer papel de boba, quem se importa? Não tenho medo da percepção de ninguém sobre mim.",
      author:"Angelina Jolie"
    },
    {
      quote:"A persistência é o caminho do êxito.",
      author:"Charles Chaplin"
    },
    {
      quote:"Sempre há limites. Eu não conheço os meus.",
      author:"Usain Bolt"
    },
    {
      quote:"Expectativa gera responsabilidade, o que leva à necessidade de mais trabalho e a uma atenção ainda maior aos detalhes.",
      author:"Bernardinho"
    },
    {
      quote:"Quando algo é importante o suficiente, você realiza, mesmo que as chances não estejam a seu favor.",
      author:"Elon Musk"
    },
    {
      quote:"O futuro da vida como a conhecemos está sendo determinado por tudo o que estamos fazendo - e não fazendo agora.",
      author:"Oprah Winfrey"
    },
    {
      quote:"O mundo se divide entre os educados e os mal-educados. Nós queremos ficar ao lado dos educados.",
      author:"Luciano Huck "
    },
    {
      quote:"Transforme suas feridas em sabedoria!",
      author:"Oprah Winfrey"
    },
    {
      quote:"Felicidade é conservar energia para coisas que valem a pena.",
      author:"Leandro Karnal "
    },
    {
      quote:"O que me preocupa não é o grito dos maus. É o silêncio dos bons.",
      author:"Martin Luther King"
    },
    // Adicione mais citações à lista
  ];
  
  const quoteDisplay = document.getElementById('quoteDisplay');
  const authorDisplay = document.getElementById('authorDisplay');
  const newQuoteButton = document.getElementById('newQuoteButton');
  
  function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteDisplay.textContent = `"${randomQuote.quote}"`;
    authorDisplay.textContent = `- ${randomQuote.author}`;
  }
  newQuoteButton.addEventListener('click', generateRandomQuote);

// Exibir uma citação aleatória ao carregar a página
generateRandomQuote();