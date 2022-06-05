import Candidate from "../model/Candidate";

export function checkCandidate (candidate: Candidate) {
  if(!candidate._id){
    throw 'Candidate is missing';
  }
}

export function checkInterviewDate (interviewDate: Date) {
  if(!interviewDate || interviewDate < new Date()) {
    throw 'interview date os missing'
  }
}
