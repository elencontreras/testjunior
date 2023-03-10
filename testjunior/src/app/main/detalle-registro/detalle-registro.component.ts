import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from 'src/app/interfaces/response';
import { User } from 'src/app/interfaces/user';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-registro',
  templateUrl: './detalle-registro.component.html',
  styleUrls: ['./detalle-registro.component.css']
})
export class DetalleRegistroComponent implements OnInit {
  user: User | undefined;

  constructor(private route: ActivatedRoute, private usersService:UsuariosService) { }

  ngOnInit(): void {
    this.getUser()
  }

  getUser(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.usersService.getUser(id)
      .subscribe({
        next:(value: Response) => {
          if(value.status===201){
            this.user = value.user;
          }else{
            Swal.fire({
              icon:'error',
              text: value.message
            })
          }
        },
        error: (error) => {
          Swal.fire({
            icon:'warning',
            text:error
          })
        }
      })
  }

}
