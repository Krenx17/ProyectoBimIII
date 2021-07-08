import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  public user: User;
  constructor(private _usuarioService: UserService, private _router: Router) {
    this.user = new User('','','','','', '')
  }

  ngOnInit(): void {

  }

  registrar(){
    this._usuarioService.registro(this.user).subscribe(
      response=>{
        console.log(response)
        this._router.navigate(['/login'])
      },err=>{
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'No se pudo guardar el usuario',
          showConfirmButton: false,
          timer: 1500
        })
      }
    )
  }
}
