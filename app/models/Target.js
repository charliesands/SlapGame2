export default class Target {
  constructor(name, health, img, headDmg, bodyDmg, upperCutDmg) {
    this.name = name || ''
    this.health = health || 1000
    this.img = img || ''
    this.damages = {
      head: headDmg,
      body: bodyDmg,
      upperCut: upperCutDmg
    }
    this.dead = false
    this.hits = 0
  }
}