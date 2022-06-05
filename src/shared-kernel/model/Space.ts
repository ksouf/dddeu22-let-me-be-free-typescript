import Recruiter from "./Recruiter";

export default class Space {
  public readonly _id: string;
  public readonly _name: string;
  public readonly _location: string;
  public readonly _capacity: number;
  public readonly _address: string;
  public readonly _equipments: string[];
  public readonly _participants: string;
  public readonly _availabilities: Date[];
  public readonly _owner: Recruiter;
  public readonly _info: Map<string, object>;

  constructor(id: string, name: string, location: string, capacity: number, address: string, equipments: string[], participants: string, availabilities: Date[], owner: Recruiter, info: Map<string, object>) {
    this._id = id;
    this._name = name;
    this._location = location;
    this._capacity = capacity;
    this._address = address;
    this._equipments = equipments;
    this._participants = participants;
    this._availabilities = availabilities;
    this._owner = owner;
    this._info = info;
  }
}
