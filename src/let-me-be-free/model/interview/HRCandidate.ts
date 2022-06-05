import Candidate from "../../../shared-kernel/model/Candidate";
import HRRecruiter from "./HRRecruiter";
import InterviewDate from "./InterviewDate";

export default class HRCandidate {
  private readonly _candidate: Candidate;


  constructor(candidate: Candidate) {
    this._candidate = candidate;
  }

  public getId() {
    return this._candidate._id;
  }

  public getSkills() {
    return this._candidate._skills;
  }

  public checkCandidate() {
    let candidateId = this._candidate._id;
    if (!candidateId) {
      throw 'candidate id is missing';
    }
  }

  public findRecruiter(interviewDate: InterviewDate, hrRecruiters: Array<HRRecruiter>) {
    let foundRecruiter = hrRecruiters
    .filter(recruiter => recruiter.isAvailable(interviewDate))
    .filter(recruiter => recruiter.canTest(this));

    if (foundRecruiter.length <= 0) {
      throw "no recruiter is available"
    } else {
      return foundRecruiter.at(0)
    }
  }
}
