import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { LoginDTO } from '../../data/repositories/user/dto/login.dto';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
export abstract class UserRepository {
    abstract login(user:LoginDTO): Observable<UserModel>;
    abstract register(user:UserModel): Observable<any>;
    abstract getUserProfile(): Observable<UserModel>;
    abstract isAuthenticated(): boolean;
}