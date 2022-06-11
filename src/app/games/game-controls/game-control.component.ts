import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  @Output() resetGamevalue = new EventEmitter<number>();
  @Output() startplayingGame = new EventEmitter<number>();
  interval;
  counter = 0;
  constructor() {}

  ngOnInit() {}

  startPlaying() {
    this.interval = setInterval(() => {
      this.startplayingGame.emit(this.counter + 1);
      this.counter++;
    }, 1000);
  }

  pauseplaying() {
    clearInterval(this.interval);
  }

  resetGame() {
    clearInterval(this.interval);
    this.resetGamevalue.emit();
    this.counter = 0;
  }
}
