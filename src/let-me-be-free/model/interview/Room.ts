import Space from "../../../shared-kernel/model/Space";

export default class Room {
  private readonly _room: Space;

  constructor(room: Space) {
    this._room = room;
  }

  public  getCapacity() {
    return this._room._capacity;
  }

  public getEquipments() {
    return this._room._equipments;
  }

  public getAddress() {
    return this._room._address;
  }

  public checkRoom() {
    if (!(this.getCapacity() >= 2)
        || !this.getEquipments().every(equipment => ["PC", "Monitor"].indexOf(equipment) != -1)) {
      // it's too complicated ...
      // cancel the _room and find another _room ? What if the new _room is not appropriate again ?
      // cancel the _room and raise an exception ?
      // cancel the _room and generate an online interview link ?
      // many questions to ask and all depends on a system on which we don't have a control
    }
  }
}
