import { AbstractControl } from '@angular/forms';
import * as moment from 'moment';

export function expeditionValidator(control: AbstractControl) {
    let currentDate = new Date() 
    if (moment(control.value).format('DD-MM-YYYY') >= moment(currentDate).format('DD-MM-YYYY') ) {
        return { expeValid: true };
    }
  return null;
}