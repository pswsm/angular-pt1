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
	regForm = new FormGroup({
		nom: new FormControl("", [Validators.required, Validators.minLength(4), Validators.pattern('[A-Za-zñÑáéíóúÁÉÍÓÚ ]+')]),
		correu: new FormControl("", [Validators.required, Validators.pattern("[A-Za-z\-_0-9]+@[a-z0-9]+\.[a-z]{2,}")]),
		contra: new FormControl("", [Validators.required, Validators.minLength(8)]),
		repetirContra: new FormControl("", [Validators.required]),
		sexe: new FormControl("", [Validators.required]),
		checkConds: new FormControl("", [Validators.required]),
		estat: new FormControl("", [Validators.required]),
		interests: new FormArray([])
	});

	submit() {
		console.log(this.userServ.users);
		
		let nom: any = this.regForm.get('nom')?.value
		let correu: any = this.regForm.get('correu')?.value
		let contra: any = this.regForm.get('contra')?.value
		let checkConds: any = this.regForm.get('checkConds')?.value
		let interessos: any = ;
		let estat: any = this.regForm.get('estat')?.value
		let user: User = new User(nom, contra, 'comprador', correu, estat, interessos, checkConds);
		switch (this.userServ.userExists(user)) {
			case 0:
				this.userServ.appendUser(user);
				this.dades = 'Usuari registrat correctament';
				this.regForm.reset();
				console.log(this.userServ.users);
				
				break;

			case 1 | 2:
				this.dades = "L'usuari ja existeix";
				break;

			default:
				this.dades = "L'usuari no s'ha pogut registrar"
				break;
		}
	}

	onCheckChange(event: any) {
		const formArray: FormArray = this.regForm.get('interests') as FormArray;

	  /* Selected */
	  if(event.target.checked){
		// Add a new control in the arrayForm
		formArray.push(new FormControl(event.target.value));
	  }
	  /* unselected */
	  else{
		// find the unselected element
		let i: number = 0;

		formArray.controls.forEach((ctrl: FormControl) => {
		  if(ctrl.value == event.target.value) {
			// Remove the unselected element from the arrayForm
			formArray.removeAt(i);
			return;
		  }

		  i++;
		});
	  }
	}
}
