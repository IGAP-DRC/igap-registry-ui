import { Observable } from 'rxjs';
import { UseCase } from '../../../base/use-case';
import { UserModel } from '../../models/user.model';
import { UserRepository } from '../../repositories/user.repository';

export class UserRegisterUseCase implements UseCase<UserModel, void> {

    constructor(private userRepository: UserRepository) { }

    execute(
        user:UserModel,
    ): Observable<any> {
        return this.userRepository.register(user);
    }
}