import { AbstractControl } from '@angular/forms';
import * as moment from 'moment';

export function ageValidator(control: AbstractControl) {
    let age = moment().diff(control.value, 'years')
    if (age < 18 ) {
        return { ageValid: true };
    }
  return null;
}