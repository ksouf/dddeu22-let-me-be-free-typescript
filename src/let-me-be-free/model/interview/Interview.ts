import Consultant from "./Consultant";
import Profile from "./Profile";
import InterviewDate from "./InterviewDate";
import Room from "./Room";

export default class Interview {
  private readonly _consultant: Consultant;
  private readonly _profile: Profile;
  private readonly _interviewDate: InterviewDate;
  private readonly _room: Room;

  constructor(recruiter: Consultant, candidate: Profile, interviewDate: InterviewDate, room: Room) {
    this._consultant = recruiter;
    this._profile = candidate;
    this._interviewDate = interviewDate;
    this._room = room;
  }

  public getConsultant() {
    return this._consultant;
  }

  public getProfile() {
    return this._profile;
  }

  public getInterviewDate() {
    return this._interviewDate;
  }

  public getRoom() {
    return this._room;
  }
}
