import {Component} from "@angular/core";

@Component({
  selector: 'ex2Component',
  templateUrl: './ex2.component.html',

})

export class Ex2Component {
  userName = '';
  nameChosed = '';

  setName() {
    // this.userName = event.target.value
    if (this.userName !== '') {
      this.nameChosed = 'Name : ' + this.userName
    }
  }
}
