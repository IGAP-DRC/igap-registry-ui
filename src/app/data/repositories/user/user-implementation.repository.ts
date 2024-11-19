import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UserEntity } from './entities/user-entity';
import { UserImplementationRepositoryMapper } from './mappers/user-repository.mapper';
import { Injectable } from '@angular/core';
import { UserModel } from '../../../domain/models/user.model';
import { UserRepository } from '../../../domain/repositories/user.repository';
import { environment } from '../../../../environments/environment.development';
import { LoginDTO } from './dto/login.dto';

@Injectable({
    providedIn: 'root',
})
export class UserImplementationRepository extends UserRepository {
    
    userMapper = new UserImplementationRepositoryMapper();

    constructor(private http: HttpClient) {
        super();
    }

    login(user:LoginDTO): Observable<any> {
        return this.http
            .post<UserEntity>(environment.baseUrl+'/api/auth/login', user)
            .pipe(map(this.userMapper.mapFrom));
    }

    register(user:UserModel): Observable<any> {
       return this.http
            .post<UserEntity>(environment.baseUrl+'/api/auth/register', user)
            .pipe(map(this.userMapper.mapFrom));
    }
    
    getUserProfile(): Observable<UserModel>{
        return this.http.get<UserEntity>(environment.baseUrl+'/api/auth/profil').pipe(
            map(this.userMapper.mapFrom));
    }
}