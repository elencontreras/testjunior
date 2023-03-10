import { AbstractControl } from '@angular/forms';
import * as moment from 'moment';

export function expeditionValidator(control: AbstractControl) {
    let currentDate = new Date() 
    let val = new Date(control.value)
    if (control.value >= currentDate ) {
        return { expeValid: true };
    }
  return null;
}