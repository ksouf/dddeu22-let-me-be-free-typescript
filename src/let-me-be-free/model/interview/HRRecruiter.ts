import Recruiter from "../../../shared-kernel/model/Recruiter";
import HRCandidate from "./HRCandidate";
import InterviewDate from "./InterviewDate";

export default class HRRecruiter {
  private readonly _recruiter: Recruiter;

  constructor(recruiter: Recruiter) {
    this._recruiter = recruiter;
  }

  public isAvailable(interviewDate: InterviewDate) {
    return this._recruiter._availabilities.filter(date =>
        new InterviewDate(date).equals(interviewDate)
    ).length > 0
  }

  public canTest(candidate: HRCandidate) {
    return candidate.getSkills()
    .every(skill => this._recruiter._skills.indexOf(skill) != -1)
  }

  public book(interviewDate: InterviewDate) {
    const index = this._recruiter._availabilities.indexOf(interviewDate.getInterviewDate(), 0);
    if (index > -1) {
      this._recruiter._availabilities.splice(index, 1);
    }
  }

  public  getAvailabilities() {
    return this._recruiter._availabilities.map(date => new InterviewDate(date));
  }

  public getSkills() {
    return this._recruiter._skills;
  }

  public  getId() {
    return this._recruiter._id;
  }

  public  getName() {
    return this._recruiter._name;
  }

  public getFirstName() {
    return this._recruiter._firstName;
  }
}
