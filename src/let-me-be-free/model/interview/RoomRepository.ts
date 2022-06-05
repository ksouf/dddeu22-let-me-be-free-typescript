import Space from "../../../shared-kernel/model/Space";
import InterviewDate from "./InterviewDate";

export interface RoomRepository {
  book: (interviewDate: InterviewDate) => Space;
  cancel: (spaceId: String) => void;
}
