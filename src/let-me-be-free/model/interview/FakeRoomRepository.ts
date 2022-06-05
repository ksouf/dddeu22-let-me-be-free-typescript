import {RoomRepository} from "./RoomRepository";
import Space from "../../../shared-kernel/model/Space";
import Recruiter from "../../../shared-kernel/model/Recruiter";

export default class FakeRoomRepository implements RoomRepository {

  book(interviewDate: Date): Space {
    return new Space("",
        "",
        "Paris",
        5,
        "Room 2.1",
        ["PC", "Monitor"],
        "John Doe & HR",
        [
          new Date(2022, 12, 22),
          new Date(2022, 12, 20)
        ],
        <Recruiter>{},
        new Map<string, object>([
          ["Recruiter",
            new Map<Date, string>([
              [new Date(2022, 12, 22), "Steve Jones"]
            ])
          ]
        ])
    );
  }

  cancel(spaceId: String): void {
  }
}
