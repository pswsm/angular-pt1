import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
	regForm = new FormGroup({
		nom: new FormControl("", [Validators.required, Validators.minLength(6), Validators.pattern('[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$')]),
		correu: new FormControl("", [Validators.required, Validators.pattern("\"?[\w]+[\. ]?[\w]+\"?@[a-z0-9]+\.[a-z]{2,}")]),
		edat: new FormControl("", [Validators.required]),
		contra: new FormControl("", [Validators.required, Validators.minLength(8)]),
		sexe: new FormControl("", [Validators.required]),
		checkConds: new FormControl("", [Validators.required]),
		estat: new FormControl("", [Validators.required])
	});

	submit() {
		let nom: any = this.regForm.get('nom')?.value
		let correu: any = this.regForm.get('correu')?.value
		let contra: any = this.regForm.get('contra')?.value
		let checkConds: any = this.regForm.get('checkConds')?.value
		let estat: any = this.regForm.get('estat')?.value
		let user: User = new User(nom, contra, 'comprador', correu, estat, [], checkConds);
		switch (this.userServ.userExists(user)) {
			case 0:
				this.dades = 'Usuari registrat correctament';
				break;

			case 1 | 2:
				this.dades = "L'usuari ja existeix";
				break;

			default:
				this.dades = "Usuari registrat correctament"
				break;
		}
	}
}
