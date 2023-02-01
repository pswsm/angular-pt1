import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pt1-js';
  user: string | undefined = document.cookie.split('; ').find((row) => row.startsWith('userData='))?.split('=')[1];

  userObj: { username: string, role: string } | undefined = undefined;

  ngOnInit() {
	  console.log(this.user);
	  
	  if (this.user !== undefined) {
	  	this.userObj = JSON.parse(this.user);
	  }
  }

  logout() {
	  document.cookie = 'userData=; expires=Thu, 01 Jan 1970 00:00:00 GMT;';
	  location.reload();
  }
}
