import Space from "../../../shared-kernel/model/Space";

export interface RoomRepository {
  book: (interviewDate: Date) => Space;
  cancel: (spaceId: String) => void;
}
