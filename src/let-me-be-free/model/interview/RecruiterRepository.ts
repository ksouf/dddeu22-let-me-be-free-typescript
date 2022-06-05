import Recruiter from "../../../shared-kernel/model/Recruiter";

export interface RecruiterRepository {
  findAll: () => Recruiter[]
}
