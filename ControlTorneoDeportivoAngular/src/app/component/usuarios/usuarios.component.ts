import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  providers: [UserService]
})
export class UsuariosComponent implements OnInit {
  public usuarios: any;
  public token: any;
  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.users();
  }

  users(){
    this._userService.allusuarios().subscribe(
      response =>{
        this.usuarios = response.obtainedUsers;
        console.log(this.usuarios)
      },error =>{
        console.log(<any>error);
      }
    )
  }
}
