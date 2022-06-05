import HRRecruiter from "./HRRecruiter";

export interface RecruiterRepository {
  findAll: () => HRRecruiter[]
}
