import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() operation = new EventEmitter< number >();
  counting: number = 1 // pode ser 0 ou 1, depende da minha escolha
  ref

  constructor() { }

  ngOnInit(): void {
  }

  onStart() {

    this.ref = (setInterval(()=> {
      this.operation.emit(this.counting); this.counting++ },
      500))
  }

  onStop() {
    return(
      clearInterval(this.ref)
        // this.counting = 0
      // setTimeout(()=>this.counting = 0,500)

    )

  }
}
