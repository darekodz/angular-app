import { AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';

export class CustomValidators {
    static atLeastOne(group: FormGroup): ValidationErrors {

        // for (const el of group.value) {
        //     console.log(el);
        // }

        // for (const key in group) {
        //     if (group.hasOwnProperty(key)) {
        //         console.log(key);
        //         const element = group[key];

        //     }
        // }

        // if(group.)

        if (Object.values(group.value).includes(true)) { return; }

        return { atLeastOneOptionShouldBeSelected: true };
    }

    static pastDateReq(control: AbstractControl): ValidationErrors | null {

        if (Date.parse(control.value) < Date.now()) {
            return null;
        }

        return { pastDateRequired: true };
    }
}
