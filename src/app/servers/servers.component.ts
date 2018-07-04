import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  //selector: '.app-servers'
  //template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created'
  constructor() { //metodo que se llama al crear este componente
  	setTimeout( () => {
  		this.allowNewServer = true;
  	},2000);
   }

  ngOnInit() {
  }

  onCreateServer(){
  	this.serverCreationStatus = 'Server was created';
  }

  onUdateServerName(event: any){
  	console.log(event)
  }
}
