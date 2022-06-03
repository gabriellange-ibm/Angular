import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  odd: number[] = []
  even: number[] = []

  onReceiveCounting(number: number){
    if (number % 2 == 0) {
      this.even.push(number)
    }else{
      this.odd.push(number)
    }
  }
}
