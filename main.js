import GameController from "./app/components/GameController.js"

export default class App {
  constructor() {
    this.controllers = {
      gameController: new GameController()
    }
  }
}

//@ts-ignore
window.app = new App()