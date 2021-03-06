/*
Created on 04.11.2017 by Freshek
*/

class ShipSelectedHandler {
  static get ID() {
    return 20164;
  }

  constructor() {
    this._handler = function(e, a) {
      var parsedJson = JSON.parse(e.detail);

      var ship = a.ships[parsedJson.userId];
      if (ship != null)
        a.lockedShip = ship;
    }
  }

  get handler() {
    return this._handler;
  }
}
