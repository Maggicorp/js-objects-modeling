'use strict'

const television2 = {
  screenType: 'LCD',
  resolution: '200x300',
  wattage: '400 watts',
  power: 'on',
  volume: 5,
  channel: 39,
  app: 'none',
  broken: true,
  togglePower: function () {
    if (this.power === 'on') {
      this.power = 'off'
    } else { this.power = 'on' }
  },
  upVol: function () {
    this.volume++
  },
  downVol: function () {
    this.volume--
  },
  upChannel: function () {
    this.channel++
  },
  downChannel: function () {
    this.channel--
  },
  changeApp: function (newApp) {
    this.app = newApp
  },
  fixIt: function () {
    if (this.broken === true) {
      this.broken = false
    } else { this.broken = true }
  }
}

console.log(television2)
television2.changeApp('netflix')
television2.fixIt()
console.log(television2)
