import Target from '../models/Target.js'

let tyson = new Target("Mike Tyson", 1000, "//unsplash.it/400x400", 15, 20, 40)

export default class GameService {
  constructor() {

  }
  attack(type) {
    tyson.attack(type)
  }
  get Target() {
    return {
      name: tyson.name,
      health: tyson.health,
      hits: tyson.hits,
      img: tyson.img,
      dead: tyson.dead
    }
  }
}
