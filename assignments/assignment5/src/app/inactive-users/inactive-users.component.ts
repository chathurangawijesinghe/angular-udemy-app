import { CounterService } from './../counter.service';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent implements OnInit {
  users: string[];
  count = 0;

  constructor(
    private usersService: UsersService,
    private counterService: CounterService
  ) {}

  ngOnInit(): void {
    this.users = this.usersService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.usersService.onSetToActive(id);
    this.counterService.onInactiveToActive();
    this.count = this.counterService.inactiveToActiveCount;
  }
}
