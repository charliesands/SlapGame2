import GameService from './GameService.js'

let gameService = new GameService();

function draw() {
  let target = gameService.Target
  let template = `
  <div>
      <div><img src="${target.img}" alt="target image" /></div>
      <h2>${target.name}</h2>
      <h3>Health: ${target.health}</h3>
      <h3>Hits: ${target.hits}</h3>    
    </div>
    <div>
      <button onclick="app.controllers.mySlapController.attack('head')">Head</button>
      <button onclick="app.controllers.mySlapController.attack('body')">Body</button>
      <button onclick="app.controllers.mySlapController.attack('uppercut')">Upper Cut</button>
   `
  document.getElementById("target").innerHTML = template;
}

export default class GameController {
  constructor() {
    draw()
  }
}