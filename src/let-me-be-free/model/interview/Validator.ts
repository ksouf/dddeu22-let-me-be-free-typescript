import Verifier from "../../../shared-kernel/service/Verifier";

export default abstract class Validator<T>{

  abstract check: (t: T) => void;

  protected verifier = new Verifier();
}
