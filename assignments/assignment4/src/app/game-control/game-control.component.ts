import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  @Output() intevalFired = new EventEmitter<number>();
  interval;
  currentNumber = 0;
  constructor() {}

  ngOnInit(): void {}

  onStartGame() {
    this.interval = setInterval(() => {
      this.currentNumber++;
      this.intevalFired.emit(this.currentNumber);
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.interval);
  }
}
