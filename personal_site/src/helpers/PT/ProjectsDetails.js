import TrybeTunes from '../../videos/TrybeTunes.mp4';
import recipesapp from '../../videos/recipesappvideo.mp4';
import trybetunes_icon from '../../images/trybetunes_icon.png';
import recipe_book_icon from '../../images/recipe-book-icon.png';
import quiz_icon from '../../images/quiz-icon.png';
import talker_manager_icon from '../../images/talker-manager-icon.png';
import store_manager_icon from '../../images/store-manager-icon.png';
import star_wars_search_icon from '../../images/star-wars-search.png';
import zoo_functions_icon from '../../images/zoo-functions-icon.png';
import triviavideo from '../../videos/trivia.mp4';

const projectsDetails = [
  {
      projectName: "Recipes App",
      projectDescription: "O projeto Recipes App foi realizado em um grupo de três pessoas com o intuito de finalizar o módulo de Front End do curso da Trybe. No app é possível ver, pesquisar, filtrar, favoritar e acompanhar o andamento do preparo de receitas e bebidas. O aplicativo consome duas APIs diferentes, MealDB e CocktailsDB. O App foi desenvolvido a partir do conceito mobile first e possui testes unitários para testar o comportamento e a confiabilidade do código com 90% de cobertura total. As tecnologias utilizadas foram HTML, CSS, JS, React, React Hooks e Context API como gerenciador de estado global.",
      video: recipesapp,
      repo: "https://github.com/Paulo-Ferri/Recipes-App",
      icon: recipe_book_icon,
  },
  {
    projectName: "Store Manager",
    projectDescription: "O projeto Store Manager possibilitou a criação de uma API utilizando a arquitetura MSC (model-service-controller). A aplicação funciona como a gestão de vendas de uma loja fictícia, com possibilidade de criação, visualização, eliminação e atualização de produtos e vendas. O banco de dados utilizado foi o MySQL para gerenciamento de dados e a API segue os parâmetros REST, tornando-a RESTful",
    video: TrybeTunes,
    repo: "https://github.com/Paulo-Ferri/Store-Manager",
    icon: store_manager_icon 
  },
  {
    projectName: "Zoo Functions",
    projectDescription: "O projeto Zoo Functions foi um dos projetos mais desafiadores do curso da Trybe visto que foi o primeiro grande projeto que a turma executou e também que encerrou o módulo de fundamentos do curso. O projeto consiste em criar funções usando as High Order Functions (HOFs) do JavaScript para manipular um banco de dados de um zoológico fictício. Com ele, foi possível manipular e criar arrays, exercitando o uso correto de uma funcionalidade do JavaScript muito poderosa.",
    video: TrybeTunes,
    repo: "https://github.com/Paulo-Ferri/Zoo-Functions",
    icon: zoo_functions_icon,
  },
  {
      projectName: "Trivia Game",
      projectDescription: "O projeto Trivia Game foi realizado em um grupo de três pessoas, e foca além no desenvolvimento das habilidades técnicas, também o exercício do trabalho em grupo e as Soft Skills. Ele consome a API Open Trivia e mostra ao jogador uma pergunta com várias respostas, podendo ser respondida apenas dentro do tempo determinado. Ao responder é possível verificar se a resposta estava correta ou não. Ao final o jogador é redirecionado para uma tela de feedback e seu jogo é salvo na página de classificação. Ele também consome a API do Gravatar para atribuir foto ao jogador automaticamente caso esteja cadastrado no banco de dados da API. O projeto utilizou como tecnologias HTML, CSS, JS, React e Redux.",
      video: triviavideo,
      repo: "https://github.com/Paulo-Ferri/Trivia-Game",
      icon: quiz_icon
  },
  {
    projectName: "Talker Manager",
    projectDescription: "O projeto Talker Manager consiste em uma API CRUD (Create, Read, Update and Delete) de locutores fictícios. A aplicação não utiliza um sistema de gerenciamento de banco de dados próprio, sendo o foco do projeto a manipulação e consulta de dados localmente além de servir como introdução ao Node.js dentro do módulo Back End do curso Trybe. O projeto foi realizado utilizando Node.js e o framework Express.",
    video: TrybeTunes,
    repo: "https://github.com/Paulo-Ferri/Talker-Manager",
    icon: talker_manager_icon
  },
  {
    projectName: "Trybetunes",
    projectDescription: "O projeto Trybetunes é um serviço de música que consome a API do iTunes, possibilitando com que o usuário procure por artistas ou bandas e tenha a sua disposição todos os albums relacionados, podendo ouvir amostras de todas as músicas referentes ao album. Com este projeto muitas habilidades foram treinadas, incluindo HTML, CSS, JS e React. Este projeto foca em componentes de classes no React, o ciclo de vida dos componentes, operações assíncronas e mais.",
    video: TrybeTunes,
    repo: "https://github.com/Paulo-Ferri/TrybeTunes",
    icon: trybetunes_icon
  },
  {
    projectName: "Star Wars Planet Search",
    projectDescription: "O objetivo do projeto Star Wars Planets Search é a implementação de um filtro com várias opções de filtragem para exibir uma tabela contendo planetas do universo Star Wars com as suas especificações que estejam dentro dos parâmetros estabelecidos pelos filtros. Além do exercício de HOFs do JavaScript, o projeto requer o uso de React Hooks e Context API para distribuir dados pela árvore de componentes do React.",
    video: TrybeTunes,
    repo: "https://github.com/Paulo-Ferri/StarWars-Planet-Search",
    icon: star_wars_search_icon 
  },
]

export default projectsDetails;