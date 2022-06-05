import HRRecruiter from "./HRRecruiter";
import HRCandidate from "./HRCandidate";
import InterviewDate from "./InterviewDate";
import Room from "./Room";

export default class Interview {
  public readonly _recruiter: HRRecruiter;
  public readonly _candidate: HRCandidate;
  public readonly _interviewDate: InterviewDate;
  public readonly _room: Room;

  constructor(recruiter: HRRecruiter, candidate: HRCandidate, interviewDate: InterviewDate, room: Room) {
    this._recruiter = recruiter;
    this._candidate = candidate;
    this._interviewDate = interviewDate;
    this._room = room;
  }

  public getRecruiter() {
    return this._recruiter;
  }

  public getCandidate() {
    return this._candidate;
  }

  public getInterviewDate() {
    return this._interviewDate;
  }

  public getRoom() {
    return this._room;
  }
}
