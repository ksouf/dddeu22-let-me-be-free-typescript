import Candidate from "../../shared-kernel/model/Candidate";
import Recruiter from "../../shared-kernel/model/Recruiter";
import PlanInterview from "./PlanInterview";
import {ConsultantRepository} from "../model/interview/ConsultantRepository";
import FakeConsultantRepository from "../model/interview/FakeConsultantRepository";
import FakeRoomRepository from "../model/interview/FakeRoomRepository";
import Profile from "../model/interview/Profile";
import InterviewDate from "../model/interview/InterviewDate";


describe("PlanInterview Should", () => {

  const PROFILE_ID = "fake_id";
  let humanResource: PlanInterview;
  let consultants: ConsultantRepository;
  beforeEach(() => {
    consultants = new FakeConsultantRepository();
    let rooms = new FakeRoomRepository();
    humanResource = new PlanInterview(consultants, rooms);
  });

  it("not schedule an interview for a candidate without identifier", () => {

    let interviewDate = new InterviewDate(new Date(2022, 12, 19));
    let candidateWithoutId = new Profile(new Candidate("",
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
    }).toThrow("profile id is missing");
  });

  it("not schedule an interview when interview date is passed", () => {

    expect(() => {
      let passedDate = new InterviewDate(new Date(2000, 12, 19));

      humanResource.scheduleInterview(passedDate, getJavaCandidate())
    }).toThrow("interview date is missing");
  });

  it("not schedule an interview with no consultant is available for the interview", () => {

    expect(() => {
      let interviewDate = new InterviewDate(new Date(2030, 1, 1));

      humanResource.scheduleInterview(interviewDate, getJavaCandidate())
    }).toThrow("no consultant is available");
  });

  it("plan interview with the first consultant who is available for the interview and can test the candidate", () => {

      let interviewDate = new InterviewDate(new Date(2022, 12, 19));

      let interview = humanResource.scheduleInterview(interviewDate, getJavaCandidate());

      expect(interview.getConsultant().getId()).toBe("101");
      expect(interview.getConsultant().getName()).toBe("Steve");
      expect(interview.getConsultant().getFirstName()).toBe("Emma");
      expect(interview.getProfile().getId()).toBe(PROFILE_ID);
      expect(interview.getInterviewDate()).toBe(interviewDate);
      expect(interview.getRoom().getAddress()).toBe("Room 2.1");
      expect(isRecruiterBookedFor(interviewDate)).toBeTruthy();
    });

  function isRecruiterBookedFor(interviewDate: InterviewDate): boolean {
    return consultants.findAll()
    .filter(r => r.getId() === "101")
    .flatMap(r => r.getAvailabilities())
    .filter(availableDate => availableDate.equals(interviewDate))
    .length > 0;
  }

  function getJavaCandidate(): Profile {
    let java = new Candidate(PROFILE_ID,
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
    return new Profile(java);
  }
});
