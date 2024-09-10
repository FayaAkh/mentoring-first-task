import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../models/user';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {

  @Input({required:true}) user!:IUser;

  @Output()
  deleted = new EventEmitter<number>();

public deleteUser(id: number){
  this.deleted.emit(id);

}
}
