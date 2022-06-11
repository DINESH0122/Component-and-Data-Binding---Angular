import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];
  constructor() {}
  ngOnInit() {}
  startplayingGame(enteredNumber: number) {
    if (enteredNumber % 2 === 0) {
      this.evenNumbers.push(enteredNumber);
    } else {
      this.oddNumbers.push(enteredNumber);
    }
  }
  resetGame() {
    this.evenNumbers = [];
    this.oddNumbers = [];
  }
}
