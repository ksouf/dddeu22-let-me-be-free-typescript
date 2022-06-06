import {ConsultantRepository} from "../model/interview/ConsultantRepository";
import {RoomRepository} from "../model/interview/RoomRepository";
import Interview from "../model/interview/Interview";
import Profile from "../model/interview/Profile";
import InterviewDate from "../model/interview/InterviewDate";
import ProfileValidator from "../model/interview/ProfileValidator";
import InterviewDateValidator from "../model/interview/InterviewDateValidator";

export default class PlanInterview {
  public readonly _consultants: ConsultantRepository;
  public readonly _rooms: RoomRepository;

  constructor(recruiters: ConsultantRepository, rooms: RoomRepository) {
    this._consultants = recruiters;
    this._rooms = rooms;
  }

  public scheduleInterview(interviewDate: InterviewDate, profile: Profile) {
    let profileValidator = new ProfileValidator();
    profileValidator.check(profile);
    let interviewDateValidator = new InterviewDateValidator();
    interviewDateValidator.check(interviewDate);

    let consultants = this._consultants.findAll();
    let consultant = profile.findConsultant(interviewDate, consultants);
    // @ts-ignore
    consultant.book(interviewDate);
    let bookedRoom = this._rooms.book(interviewDate);

    bookedRoom.checkRoom();

    // @ts-ignore
    return new Interview(consultant, profile, interviewDate, bookedRoom);
  }
}
