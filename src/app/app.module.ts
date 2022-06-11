import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GameControlComponent } from './games/game-controls/game-control.component';
import { EvenNumbersComponent } from './games/even-numbers/even-numbers.component';
import { OddNumbersComponent } from './games/odd-numbers/odd-numbers.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    GameControlComponent,
    EvenNumbersComponent,
    OddNumbersComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
