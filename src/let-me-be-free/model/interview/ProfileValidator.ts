import Validator from "./Validator";
import Profile from "./Profile";

export default class ProfileValidator extends Validator<Profile> {
  // @ts-ignore
  check(profile: Profile): void {
      try {
        this.verifier.checkCandidate(profile.toCandidate());
      }
      catch(e){
        throw "profile id is missing"
      }
  }
}
