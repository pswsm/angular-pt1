import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieServiceService } from './services/cookie-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pt1-js';
  constructor(private router: Router, private cookieService: CookieServiceService) {}

  userObj: {[key: string]: any} | null = null;

  ngOnInit() {
	  this.userObj = this.cookieService.parseJSONCookie('userData');
  }

  logout() {
	  this.cookieService.deleteCookie('userData');
	  this.router.navigate(['/']).then(() => location.reload());
  }
}
