export default class InterviewDate {

  private readonly _interviewDate: Date;

  constructor(interviewDate: Date) {
    this._interviewDate = interviewDate;
  }

  public getInterviewDate() {
    return this._interviewDate;
  }

  public equals(interviewDate: InterviewDate){
    return interviewDate._interviewDate.getTime() == this._interviewDate.getTime()
  }
}
