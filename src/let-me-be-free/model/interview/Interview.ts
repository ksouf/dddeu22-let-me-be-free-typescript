import Recruiter from "../../../shared-kernel/model/Recruiter";
import Candidate from "../../../shared-kernel/model/Candidate";
import Space from "../../../shared-kernel/model/Space";

export default class Interview {
  public readonly _recruiter: Recruiter;
  public readonly _candidate: Candidate;
  public readonly _interviewDate: Date;
  public readonly _room: Space;

  constructor(recruiter: Recruiter, candidate: Candidate, interviewDate: Date, room: Space) {
    this._recruiter = recruiter;
    this._candidate = candidate;
    this._interviewDate = interviewDate;
    this._room = room;
  }
}
