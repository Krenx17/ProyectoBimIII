import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  public userModel: User;
  public token: any;
  public identidad: any;

  constructor(
    private _userService: UserService,
    private _router: Router) {
    this.userModel = new User('','','','','', '')
  }

  ngOnInit(): void {

  }

  getToken(){
    this._userService.login(this.userModel, 'true').subscribe(
      response =>{
        this.token = response.token
        localStorage.setItem('token', this.token)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Se a verificado tu cuenta',
          showConfirmButton: false,
          timer: 1500
        })

        this._router.navigate(['/principal'])
      }
    )
  }

  login(){
    this._userService.login(this.userModel).subscribe(
      response =>{
        this.identidad = response.obtainedUser;
        localStorage.setItem('identidad', JSON.stringify(this.identidad))
        this.getToken()
      },err =>{
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'La contraseña es incorrecta',
          showConfirmButton: false,
          timer: 1500
        })
      }
    )
  }
}
