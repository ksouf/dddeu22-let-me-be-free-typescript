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

  public toCandidate() {
    return this._profile;
  }
}
