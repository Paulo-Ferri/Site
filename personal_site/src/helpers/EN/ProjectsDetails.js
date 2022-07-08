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
      projectDescription: "The Recipes App project was carried out in a group of three people in order to close the Front End module of the Trybe's course. In the app it is possible to see, search, filter, favorite and follow the progress of preparation of recipes and drinks. The application consumes two different APIs, MealDB and CocktailsDB. The App was developed from the concept of mobile first and has unit tests to test code behavior and reliability with 90% full coverage. The technologies used were HTML, CSS, JS, React, React Hooks and the global state manager context API.",
      video: recipesapp,
      repo: "https://github.com/Paulo-Ferri/Recipes-App",
      icon: recipe_book_icon,
      hasExhibition: true,
  },
  {
    projectName: "Store Manager",
    projectDescription: "The Store Manager project made it possible to create an API using the MSC (model-service-controller) architecture. Its operation is based on the sales management of a fictitious store, with the possibility of creating, viewing, deleting and updating products and sales. the database used was MySQL for data management and the API follows the REST parameters, making it RESTful",
    video: TrybeTunes,
    repo: "https://github.com/Paulo-Ferri/Store-Manager",
    icon: store_manager_icon,
    hasExhibition: true,
  },
  {
    projectName: "Zoo Functions",
    projectDescription: "The Zoo Functions project was one of the most challenging projects in the Trybe's course because it was the first big project that the class had and that ended the fundamentals module. The project consists of creating functions using JavaScript's High Order Functions (HOFs) in order to manipulate a database of a fictional zoo. With it, it was possible to manipulate and create arrays, exercising the correct use of a very strong JavaScript functionality.",
    video: TrybeTunes,
    repo: "https://github.com/Paulo-Ferri/Zoo-Functions",
    icon: zoo_functions_icon,
    hasExhibition: false,
  },
  {
      projectName: "Trivia Game",
      projectDescription: "The Trivia Game project was carried out in a group of three people, exercising group work and soft skills. It consumes the Open Trivia API and shows the player a question with several answers, being able to answer only within the given time. When answering it is possible to check if the answer was correct or not. At the end the player is redirected to a feedback screen and its game is saved on the ranking page. It also consumes Gravatar API to show player photo. The project used as technologies HTML, CSS, JS, React and Redux",
      video: triviavideo,
      repo: "https://github.com/Paulo-Ferri/Trivia-Game",
      icon: quiz_icon,
      hasExhibition: true,
  },
  {
    projectName: "Talker Manager",
    projectDescription: "The Talker Manager project consists of a CRUD API (Create, Read, Update and Delete) of fictitious talkers. It does not use a database itself, being the focus of the project the manipulation and query of data locally in addition to serving as an introduction to Node.js within the Back End module of the Trybe's course. The project was carried out using Node.js and the Express framework.",
    video: TrybeTunes,
    repo: "https://github.com/Paulo-Ferri/Talker-Manager",
    icon: talker_manager_icon,
    hasExhibition: true,
  },
  {
    projectName: "Trybetunes",
    projectDescription: "Trybetunes is a project that a music searcher were implemented and with it it's possible to listen to all the musics in the searched album results. It consumes the iTunes API and return all the musics samples by album. With this project a lot of abilities were trained, included HTML, CSS, JS and React. This project focus on classes components on React, the life cycle of components, asyncronous operations and more.",
    video: TrybeTunes,
    repo: "https://github.com/Paulo-Ferri/TrybeTunes",
    icon: trybetunes_icon,
    hasExhibition: true,
  },
  {
    projectName: "Star Wars Planet Search",
    projectDescription: "The objective of the Star Wars Planets Search project is the implementation of a filter with several filtering options to display a table within the established parameters. In addition to the JavaScript HOFs exercise, the project requires the use of React Hooks and Context API for distributing data across the React component tree.",
    video: TrybeTunes,
    repo: "https://github.com/Paulo-Ferri/StarWars-Planet-Search",
    icon: star_wars_search_icon,
    hasExhibition: true,
  },
]

export default projectsDetails;