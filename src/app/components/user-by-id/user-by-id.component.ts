import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-by-id',
  templateUrl: './user-by-id.component.html',
  styleUrls: ['./user-by-id.component.scss']
})
export class UserByIdComponent implements OnInit {
@Input() userId!: number
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
get user() {
  return this.userService.users.find((user) => user.id === this.userId)
}
}
