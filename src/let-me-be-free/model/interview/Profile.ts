import Candidate from "../../../shared-kernel/model/Candidate";
import Consultant from "./Consultant";
import InterviewDate from "./InterviewDate";

export default class Profile {
  private readonly _profile: Candidate;


  constructor(candidate: Candidate) {
    this._profile = candidate;
  }

  public getId() {
    return this._profile._id;
  }

  public getSkills() {
    return this._profile._skills;
  }

  public checkProfile() {
    let profileId = this.getId();
    if (this.isInvalid(profileId)) {
      throw "profile id is missing";
    }
  }

  public isInvalid(profileId: string) {
    return !profileId;
  }

  public findConsultant(interviewDate: InterviewDate, consultants: Array<Consultant>) {
    let foundConsultant = consultants
    .filter(consultant => consultant.isAvailable(interviewDate))
    .filter(consultant => consultant.canTest(this));

    if (foundConsultant.length <= 0) {
      throw "no consultant is available"
    } else {
      return foundConsultant.at(0)
    }
  }
}
