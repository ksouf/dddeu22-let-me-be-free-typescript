import Recruiter from "../../../shared-kernel/model/Recruiter";
import Profile from "./Profile";
import InterviewDate from "./InterviewDate";

export default class Consultant {
  private readonly _consultant: Recruiter;

  constructor(recruiter: Recruiter) {
    this._consultant = recruiter;
  }

  public isAvailable(interviewDate: InterviewDate) {
    return this._consultant._availabilities.filter(date =>
        new InterviewDate(date).equals(interviewDate)
    ).length > 0
  }

  public canTest(profile: Profile) {
    return profile.getSkills()
    .every(skill => this._consultant._skills.indexOf(skill) != -1)
  }

  public book(interviewDate: InterviewDate) {
    const index = this._consultant._availabilities.indexOf(interviewDate.getInterviewDate(), 0);
    if (index > -1) {
      this._consultant._availabilities.splice(index, 1);
    }
  }

  public getAvailabilities() {
    return this._consultant._availabilities.map(date => new InterviewDate(date));
  }

  public getSkills() {
    return this._consultant._skills;
  }

  public  getId() {
    return this._consultant._id;
  }

  public  getName() {
    return this._consultant._name;
  }

  public getFirstName() {
    return this._consultant._firstName;
  }
}
