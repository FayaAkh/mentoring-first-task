import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from "../user-card/user-card.component";
import { UsersService } from '../../services/users.service';



@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserCardComponent, CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})

export class UserListComponent implements OnInit{
  
  public readonly users$ = this.usersService.users$

  constructor(private usersService: UsersService){}
  
  ngOnInit(): void {
    this.usersService.loadUsers()
  }

  onDeletUser(id: number): void{
    this.usersService.deleteUser(id);

  }



}