import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
  .online {
    color: white;
  }
  `],
})

export class ServerComponent {
  serverNumber = 34762;
  serverStatus = '';


  constructor() {
    this.serverStatus = (Math.random() > 0.5) ? 'online' : 'offline' ;
  }
  serverStatusFunction() {
    return this.serverStatus
  }

  setColor() {
    return(
      this.serverStatus === 'online' ? 'green' : 'red'
    )


  }

}
