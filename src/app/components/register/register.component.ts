import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
	datos = "";
	estado = ["Casat/da","Solter/a","Divorciat/da"]
	informacio = ["Videojcs","Accesoris","Novetats del mercat"];
	miform = new FormGroup({
		nombre: new FormControl("", [Validators.required, Validators.minLength(6), Validators.pattern('[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$')]),
		correo: new FormControl("", [Validators.required, Validators.pattern("\"?[\w]+[\. ]?[\w]+\"?@[a-z0-9]+\.[a-z]{2,}")
  ]),
  edad: new FormControl("",[
    Validators.required
    //se puede poner un validator con pattern

  ]),
  password: new FormControl("",
  [
    Validators.required,
    Validators.minLength(8)
  ]),
  sexe: new FormControl("",
  [
    Validators.required
  ]),
  checkcondicions: new FormControl("",
  [
    Validators.required
  ]),
  estat: new FormControl("",
  [
    Validators.required
  ])
})
submit(){
//solo si clicas
this.datos=`
nombre: ${this.miform.value.nombre}
correo: ${this.miform.value.correo}
`
}
}
