import Verification from "./Verification";
import Candidate from "../model/Candidate";

export default class Verifier implements Verification {
  checkCandidate(candidate: Candidate): void {
    let id = candidate._id;
    if (!id) {
      throw "candidate id is missing";
    }
  }

  checkInterviewDate(interviewDate: Date): void {
    if (!interviewDate || interviewDate <= new Date()) {
      throw  'interview date is missing';
    }
  }
}
