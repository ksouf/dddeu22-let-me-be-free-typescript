import Recruiter from "./Recruiter";

export default class Candidate {
  public readonly _id: string;
  public readonly _name: string;
  public readonly _firstName: string;
  public readonly _dateOfBirth: Date;
  public readonly _experience: number;
  public readonly _skills: string[];
  public readonly _softSkills: string;
  public readonly _cvPath: string;
  public readonly _inteviewer: Recruiter;
  public readonly _source: string;
  public readonly _cooptation: boolean;
  public readonly _coopter: string;
  public readonly _info: Map<string, object>;


  constructor(id: string, name: string, firstName: string, dateOfBirth: Date, experience: number, skills: string[], softSkills: string, cvPath: string, inteviewer: Recruiter, source: string, cooptation: boolean, coopter: string, info: Map<string, object>) {
    this._id = id;
    this._name = name;
    this._firstName = firstName;
    this._dateOfBirth = dateOfBirth;
    this._experience = experience;
    this._skills = skills;
    this._softSkills = softSkills;
    this._cvPath = cvPath;
    this._inteviewer = inteviewer;
    this._source = source;
    this._cooptation = cooptation;
    this._coopter = coopter;
    this._info = info;
  }
}
