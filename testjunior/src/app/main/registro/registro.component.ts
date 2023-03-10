import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Response } from 'src/app/interfaces/response';
import { User } from 'src/app/interfaces/user';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ageValidator } from 'src/app/utils/custom-validations/age.validators';
import { expeditionValidator } from 'src/app/utils/custom-validations/expedition.validators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  formRegistro: FormGroup

  constructor(private fb: FormBuilder,
    private usersServive: UsuariosService,
    private router: Router) {

    this.formRegistro= this.fb.group(
      {
        firstname:['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(2)]],
        lastname:['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(2)]],
        email: ['', [Validators.email, Validators.minLength(6)]],
        phoneNumber: ['', [Validators.pattern('[0-9]*'), Validators.maxLength(10)]],
        documentType:[''],
        documentNumber:['', [Validators.required,Validators.pattern('[0-9]*')]],
        birthdate:['', [Validators.required,ageValidator]],
        expeditionDate:['', [Validators.required,expeditionValidator]]
      }
    )
   }

  get f() { return this.formRegistro.controls; }


  ngOnInit(): void {

  }

  register(): void {
    if(this.formRegistro.invalid){
      this.formRegistro.markAllAsTouched();
      return
    }
    this.usersServive.addUser(this.formRegistro.value as User)
      .subscribe({
        next:(value:Response)=>{
          if(value.status === 201){
            Swal.fire({
              icon: 'success',
              text: 'Usuario registrado exitosamente',
              }).then((result) => {
              if(result.isConfirmed){
                this.router.navigate(['registro',value.user.id])
              }
            })
          }else{
            Swal.fire({
              icon:'error',
              text:value.message
            })
          }
        },
        error: (error) => {
          Swal.fire({
            icon:'warning',
            text:error
          })
        }
      });
  }

}
