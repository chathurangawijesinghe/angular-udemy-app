import { CounterService } from './../counter.service';
import { UsersService } from './../users.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent implements OnInit {
  users: string[];
  count = 0;

  constructor(
    private usersUservice: UsersService,
    private counterService: CounterService
  ) {}

  ngOnInit(): void {
    this.users = this.usersUservice.activeUsers;
  }

  onSetToInactive(id: number) {
    this.usersUservice.onSetToInactive(id);
    this.counterService.onActiveToInactive();
    this.count = this.counterService.activeToInactiveCount;
  }
}
