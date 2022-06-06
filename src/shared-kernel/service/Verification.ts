import Candidate from "../model/Candidate";

export default interface Verification {
  checkCandidate: (candidate: Candidate) => void;
  checkInterviewDate: (interviewDate: Date) => void;
}
