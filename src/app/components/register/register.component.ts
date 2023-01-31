import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/classes/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
	constructor(private userServ: UserServiceService) {}

	dades: string = "";
	estat: string[] = ["Casat", "Solter", "Divorciat"]
	info: string[] = ["Videojcs", "Accesoris", "Novetats del mercat"];

	checkedInfo: string[] = [];

	regForm = new FormGroup({
		nom: new FormControl("", [Validators.required, Validators.minLength(4), Validators.pattern('[A-Za-zñÑáéíóúÁÉÍÓÚ ]+')]),
		correu: new FormControl("", [Validators.required, Validators.pattern("[A-Za-z\-_0-9]+@[a-z0-9]+\.[a-z]{2,}")]),
		contra: new FormControl("", [Validators.required, Validators.minLength(8)]),
		repetirContra: new FormControl("", [Validators.required]),
		sexe: new FormControl("", [Validators.required]),
		checkConds: new FormControl("", [Validators.required]),
		estat: new FormControl("", [Validators.required]),
		interests: new FormControl("", [])
	});

	submit() {
		console.log('Before add: ', this.userServ.users);
		
		let nom: any = this.regForm.get('nom')?.value;
		let correu: any = this.regForm.get('correu')?.value;
		let contra: any = this.regForm.get('contra')?.value;
		let checkConds: any = this.regForm.get('checkConds')?.value;
		let interessos: any = this.checkedInfo;
		let estat: any = this.regForm.get('estat')?.value;
		let genere: any = this.regForm.get('sexe')?.value;
		let user: User = new User(nom, contra, 'comprador', correu, estat, interessos, checkConds, genere);
		switch (this.userServ.userExists(user)) {
			case 0:
				this.userServ.appendUser(user);
				this.dades = 'Usuari registrat correctament';
				this.regForm.reset();
				console.log('After add: ', this.userServ.users);
				
				break;

			case 1 | 2:
				this.dades = "L'usuari ja existeix";
				break;

			default:
				this.dades = "L'usuari no s'ha pogut registrar"
				break;
		}
	}

	onChange(value: string): void {
		console.log('Fn start: ', this.checkedInfo);
		if (this.checkedInfo.includes(value)) {
			this.checkedInfo = this.checkedInfo.filter((item) => item !== value);
		} else {
			this.checkedInfo.push(value);
		}
		console.log('Fn end: ', this.checkedInfo);
		
	}
}
