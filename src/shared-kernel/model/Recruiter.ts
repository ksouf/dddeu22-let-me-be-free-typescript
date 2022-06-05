import Candidate from "./Candidate";

export default class Recruiter {
  public readonly _id: string;
  public readonly _name: string;
  public readonly _firstName: string;
  public readonly _dateOfBirth: Date;
  public readonly _experience: number;
  public readonly _skills: string[];
  public readonly _softSkills: string;
  public readonly _availabilities: Date[];
  public readonly _candidates: Candidate[];
  public readonly _iban: string;
  public readonly _salary: number;
  public readonly _address: string;
  public readonly _seniority: Date;
  public readonly _idCart: string;
  public readonly _interviews: number;
  public readonly _info: Map<string, object>;


  constructor(id: string, name: string, firstName: string, dateOfBirth: Date, experience: number, skills: string[], softSkills: string, availabilities: Date[], candidates: Candidate[], iban: string, salary: number, address: string, seniority: Date, idCart: string, interviews: number, info: Map<string, object>) {
    this._id = id;
    this._name = name;
    this._firstName = firstName;
    this._dateOfBirth = dateOfBirth;
    this._experience = experience;
    this._skills = skills;
    this._softSkills = softSkills;
    this._availabilities = availabilities;
    this._candidates = candidates;
    this._iban = iban;
    this._salary = salary;
    this._address = address;
    this._seniority = seniority;
    this._idCart = idCart;
    this._interviews = interviews;
    this._info = info;
  }


}
