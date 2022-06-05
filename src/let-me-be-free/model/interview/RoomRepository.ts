import InterviewDate from "./InterviewDate";
import Room from "./Room";

export interface RoomRepository {
  book: (interviewDate: InterviewDate) => Room;
  cancel: (spaceId: String) => void;
}
