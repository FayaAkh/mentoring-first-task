import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../models/user';
import { UsersApiService } from './users-api.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersSubject$ = new BehaviorSubject<IUser[]>([])
  public readonly users$ = this.usersSubject$.asObservable()

  constructor(private userApiService: UsersApiService) { }

  public loadUsers(): void {
    this.userApiService.getUsers().subscribe(
      (users: IUser[]) => {
        this.usersSubject$.next(users)
      }
    )
  }

  deleteUser(id: number){
    this.usersSubject$.next(this.usersSubject$.value.filter(user => user.id!==id))
  }


}
