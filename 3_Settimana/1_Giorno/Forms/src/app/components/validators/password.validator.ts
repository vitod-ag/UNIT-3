import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";

export function passwordMatch(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const isPass = new RegExp (
            '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
        ).test(control.value);
        if(isPass === true) {
            return null;
        }else {
            return { invalidPassword: true}
        }
    };
}