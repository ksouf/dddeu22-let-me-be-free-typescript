import Candidate from "../../shared-kernel/model/Candidate";
import Recruiter from "../../shared-kernel/model/Recruiter";
import PlanInterview from "./PlanInterview";
import {RecruiterRepository} from "../model/interview/RecruiterRepository";
import FakeRecruiterRepository from "../model/interview/FakeRecruiterRepository";
import FakeRoomRepository from "../model/interview/FakeRoomRepository";


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

    let interviewDate = new Date(2022, 12, 19);
    let candidateWithoutId = new Candidate("",
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
        new Map<string, object>());

    expect(() => {
      humanResource.scheduleInterview(interviewDate, candidateWithoutId)
    }).toThrow("candidate id is missing");
  });

  it("not schedule an interview when interview date is missing", () => {

    expect(() => {
      // @ts-ignore
      humanResource.scheduleInterview(null, getJavaCandidate())
    }).toThrow("interview date is missing");
  });

  it("not schedule an interview when interview date is passed", () => {

    expect(() => {
      let passedDate = new Date(2000, 12, 19);

      humanResource.scheduleInterview(passedDate, getJavaCandidate())
    }).toThrow("interview date is missing");
  });

  it("not schedule an interview with no recruiter is available for the interview", () => {

    expect(() => {
      let interviewDate = new Date(2030, 1, 1);

      humanResource.scheduleInterview(interviewDate, getJavaCandidate())
    }).toThrow("no recruiter is available");
  });

  it("plan interview with the first recruiter who is available for the interview and can test the candidate", () => {

      let interviewDate = new Date(2022, 12, 19);

      let interview = humanResource.scheduleInterview(interviewDate, getJavaCandidate());

      expect(interview._recruiter._id).toBe("101");
      expect(interview._recruiter._name).toBe("Steve");
      expect(interview._recruiter._firstName).toBe("Emma");
      expect(interview._candidate._id).toBe(CANDIDATE_ID);
      expect(interview._interviewDate).toBe(interviewDate);
      expect(interview._room._address).toBe("Room 2.1");
      expect(isRecruiterBookedFor(interviewDate)).toBeTruthy();
    });

  function isRecruiterBookedFor(interviewDate: Date): boolean {
    return recruiters.findAll()
    .filter(r => r._id === "101")
    .flatMap(r => r._availabilities)
    .indexOf(interviewDate) == -1;
  }

  function getJavaCandidate(): Candidate {
    return new Candidate(CANDIDATE_ID,
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
  }
});
