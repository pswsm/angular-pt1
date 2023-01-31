import { Directive, forwardRef, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appRepetirContrassenya]',
  providers: [{provide: NG_VALIDATORS,  useExisting: forwardRef(() => RepetirContrassenyaDirective), multi: true}]
})
export class RepetirContrassenyaDirective implements Validator {
	@Input() param: any;
	constructor() {}

	validate(c: AbstractControl): ValidationErrors|null {
		// self value (e.g. retype password)
		let v = c.value;    // control value (e.g. password
		let e = this.param;
		if (c && v !== e) {
			return { "validateEqual": true }
		}
		return null
	}
}
