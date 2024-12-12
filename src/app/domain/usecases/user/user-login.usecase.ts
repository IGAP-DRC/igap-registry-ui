import { Observable } from 'rxjs';
import { UseCase } from '../../../base/use-case';
import { UserModel } from '../../models/user.model';
import { UserRepository } from '../../repositories/user.repository';
import { LoginDTO } from '../../../data/repositories/user/dto/login.dto';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserLoginUseCase implements UseCase<LoginDTO, void> {

    constructor(private userRepository: UserRepository) { }

    execute(
      user:LoginDTO,
    ): Observable<any> {
        return this.userRepository.login(user);
    }

    
}