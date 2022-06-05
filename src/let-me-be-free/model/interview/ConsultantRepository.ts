import Consultant from "./Consultant";

export interface ConsultantRepository {
  findAll: () => Consultant[]
}
