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

	userLoggedAlready: boolean = document.cookie.split('; ').find((row) => row.startsWith('userData=')) != undefined;

	resMsg: string = '';

	loginForm: FormGroup = new FormGroup({
		nom: new FormControl("", [Validators.required, Validators.minLength(6)]),
		contra: new FormControl("", [Validators.required, Validators.minLength(8)])
	})

	ngOnInit() {
		if (this.userLoggedAlready) {
			this.resMsg = 'User already logged in';
		}
	}

	userList: User[] = this.userService.users;

	submit() {
		let username: any = this.loginForm.get('nom')?.value;
		let password: any = this.loginForm.get('contra')?.value;

		let userExists: User | number = this.userService.getUserFromUsername(username, password);

		if (userExists instanceof User) {
			document.cookie = `userData=${JSON.stringify({username: userExists.nom, role: userExists.rol})}`
		} else {
			switch (userExists) {
				case 1:
					this.resMsg = 'Wrong Password';
					break;

				case 0:
					this.resMsg = 'Username not found';
					break;

				default:
					this.resMsg = 'Username not found';
					break;
			}
		}

		this.loginForm.reset();
	}

}
