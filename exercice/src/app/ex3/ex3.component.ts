import { Component } from '@angular/core';

@Component({
  selector: 'ex3Component',
  templateUrl: 'ex3.component.html',
  styles: [`
  .quinto {
    color: white;
  }
  `]
})

export class Ex3Component {

  showInformation = false;
  clicks = [];
  i = 0

  onPress() {
    this.i += 1
    this.showInformation = !this.showInformation
    this.clicks.push(this.i)

  }

  setColor() {
    return (
    this.i >= 5 ? 'blue' : false
    )
  }
}
