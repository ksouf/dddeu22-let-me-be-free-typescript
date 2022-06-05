import Candidate from "../../shared-kernel/model/Candidate";
import Recruiter from "../../shared-kernel/model/Recruiter";
import PlanInterview from "./PlanInterview";
import {RecruiterRepository} from "../model/interview/RecruiterRepository";
import FakeRecruiterRepository from "../model/interview/FakeRecruiterRepository";
import FakeRoomRepository from "../model/interview/FakeRoomRepository";
import HRCandidate from "../model/interview/HRCandidate";
import InterviewDate from "../model/interview/InterviewDate";


describe("PlanInterview Sould", () => {

  const CANDIDATE_ID = "fake_id";
  let humanResource: PlanInterview;
  let recruiters: RecruiterRepository;
  beforeEach(() => {
    recruiters = new FakeRecruiterRepository();
    let rooms = new FakeRoomRepository();
    humanResource = new PlanInterview(recruiters, rooms);
  });

  it("not schedule an interview for a candidate without identifier", () => {

    let interviewDate = new InterviewDate(new Date(2022, 12, 19));
    let candidateWithoutId = new HRCandidate(new Candidate("",
        "",
        "",
        <Date>{},
        <number>{},
        [],
        "",
        "",
        <Recruiter>{},
        "",
        false,
        "",
        new Map<string, object>()));

    expect(() => {
      humanResource.scheduleInterview(interviewDate, candidateWithoutId)
    }).toThrow("candidate id is missing");
  });

  it("not schedule an interview when interview date is passed", () => {

    expect(() => {
      let passedDate = new InterviewDate(new Date(2000, 12, 19));

      humanResource.scheduleInterview(passedDate, getJavaCandidate())
    }).toThrow("interview date is missing");
  });

  it("not schedule an interview with no recruiter is available for the interview", () => {

    expect(() => {
      let interviewDate = new InterviewDate(new Date(2030, 1, 1));

      humanResource.scheduleInterview(interviewDate, getJavaCandidate())
    }).toThrow("no recruiter is available");
  });

  it("plan interview with the first recruiter who is available for the interview and can test the candidate", () => {

      let interviewDate = new InterviewDate(new Date(2022, 12, 19));

      let interview = humanResource.scheduleInterview(interviewDate, getJavaCandidate());

      expect(interview._recruiter.getId()).toBe("101");
      expect(interview._recruiter.getName()).toBe("Steve");
      expect(interview._recruiter.getFirstName()).toBe("Emma");
      expect(interview._candidate.getId()).toBe(CANDIDATE_ID);
      expect(interview._interviewDate).toBe(interviewDate);
      expect(interview._room.getAddress()).toBe("Room 2.1");
      expect(isRecruiterBookedFor(interviewDate)).toBeTruthy();
    });

  function isRecruiterBookedFor(interviewDate: InterviewDate): boolean {
    return recruiters.findAll()
    .filter(r => r.getId() === "101")
    .flatMap(r => r.getAvailabilities())
    .filter(availableDate => availableDate.equals(interviewDate))
    .length > 0;
  }

  function getJavaCandidate(): HRCandidate {
    let java = new Candidate(CANDIDATE_ID,
        "",
        "",
        <Date>{},
        <number>{},
        ["Java"],
        "",
        "",
        <Recruiter>{},
        "",
        false,
        "",
        new Map<string, object>());
    return new HRCandidate(java);
  }
});
