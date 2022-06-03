import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '.app-servers',        // footnote 1
  // selector: '[app-servers]',   // footnote 2
  selector: 'app-servers',
  templateUrl: 'servers.component.html',
  // template: `<app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

   work= false;
   newServer = 'Any server was create';
   serverName = '';
   serverCreate= false;
   allServers = ['test1', 'test2'];

  constructor() {
  setTimeout( () => {this.work = true },1500 );
}

  ngOnInit(): void {
  }

  onPress() {
    this.serverCreate = true
    this.allServers.push(this.serverName)
    {(this.serverName !== '') ? this.newServer = 'Server create: ' + this.serverName : false}

  }

  onUpdateName(event: any) {
     this.serverName = event.target.value;
  }

}


// 1) In this form we can use this component using as a parameter for <div> structure as the
//    example <div class="app-servers">

// 2) Now we have "app-server" as an attribute, using this model we need to use a <div> structure
//    to allow use this component, an example is show in the file
