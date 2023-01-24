import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/classes/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
	constructor(private userService: UserServiceService) {}

	loginForm: FormGroup = new FormGroup({
		nom: new FormControl("", [Validators.required, Validators.minLength(6)]),
		contra: new FormControl("", [Validators.required])
	})

	userList: User[] = this.userService.users;

	submit() {
		let username: any = this.loginForm.get('nom')?.value;
		let password: any = this.loginForm.get('contra')?.value;
	}

}
