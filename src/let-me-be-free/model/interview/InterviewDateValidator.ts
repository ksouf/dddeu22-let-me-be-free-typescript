import Validator from "./Validator";
import InterviewDate from "./InterviewDate";

export default class InterviewDateValidator extends Validator<InterviewDate> {

  // @ts-ignore
  check(interviewDate: InterviewDate): void {
    this.verifier.checkInterviewDate(interviewDate.getInterviewDate());
  }
}
