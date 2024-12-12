import { Observable } from "rxjs";
import { UserModel } from "../../models/user.model";
import { UserRepository } from "../../repositories/user.repository";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
  })
export class IsAuthenticatedUseCase {

    constructor(private userRepository: UserRepository) { }

    execute(): boolean {
        return this.userRepository.isAuthenticated();
    }
}