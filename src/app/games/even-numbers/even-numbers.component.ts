import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even-numbers',
  templateUrl: './even-numbers.component.html',
  styleUrls: ['./even-numbers.component.css'],
})
export class EvenNumbersComponent implements OnInit {
  @Input() evenNumbers: number;

  constructor() {}

  ngOnInit() {}
}
