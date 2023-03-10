import { Component, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-validation-errors',
  templateUrl: './validation-errors.component.html',
  styleUrls: [],
})
export class ValidationErrorsComponent implements OnInit {
  @Input() errorPrefix: string='';
  @Input() errors: ValidationErrors | null;

  constructor() { 
  }

  ngOnInit() {
   
  }

  getErrorMessage() {
    let message = ""
    if (this.errors && this.errors['required']) {
      message= `${this.errorPrefix} es requerido`
    }else if (this.errors && this.errors['email']) {
      message= `El formato del correo es invalido`
    } else if (this.errors && this.errors['pattern']) {
      message=  "Debe ingresar un valor válido"
    } else if (this.errors && this.errors['minlength']) {
      message= `Debe ingresar al menos ${this.errors['minlength'].requiredLength} caracteres`
    } else if (this.errors && this.errors['maxlength']) {
      message= `Debe ingresar máximo ${this.errors['maxlength'].requiredLength} caracteres`
    } else if (this.errors && this.errors['ageValid']) {
      message= `Debe tener más de 18 años`
    } else if (this.errors && this.errors['expeValid']) {
      message= `La fecha debe ser menor a la actual`
    }
    return message
  }

}
