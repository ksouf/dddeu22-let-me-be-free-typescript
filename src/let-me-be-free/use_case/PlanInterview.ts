import {RecruiterRepository} from "../model/interview/RecruiterRepository";
import {RoomRepository} from "../model/interview/RoomRepository";
import Interview from "../model/interview/Interview";
import HRCandidate from "../model/interview/HRCandidate";
import InterviewDate from "../model/interview/InterviewDate";
import Room from "../model/interview/Room";

export default class PlanInterview {
  public readonly _recruiters: RecruiterRepository;
  public readonly _rooms: RoomRepository;

  constructor(recruiters: RecruiterRepository, rooms: RoomRepository) {
    this._recruiters = recruiters;
    this._rooms = rooms;
  }

  public scheduleInterview(interviewDate: InterviewDate, candidate: HRCandidate) {
    candidate.checkCandidate();
    interviewDate.checkInterviewDate();

    let hrRecruiters = this._recruiters.findAll();
    let recruiter = candidate.findRecruiter(interviewDate, hrRecruiters);
    // @ts-ignore
    recruiter.book(interviewDate);
    let bookedRoom = new Room(this._rooms.book(interviewDate));
    bookedRoom.checkRoom();

    // @ts-ignore
    return new Interview(recruiter, candidate, interviewDate, bookedRoom);
  }
}
