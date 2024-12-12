import { Observable } from "rxjs";
import { UserModel } from "../../models/user.model";
import { UserRepository } from "../../repositories/user.repository";

export class IsAuthenticated {

    constructor(private userRepository: UserRepository) { }

    execute(): boolean {
        return this.userRepository.isAuthenticated();
    }
}