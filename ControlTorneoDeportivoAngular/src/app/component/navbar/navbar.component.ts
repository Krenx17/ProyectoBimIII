import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [UserService]
})
export class NavbarComponent implements OnInit {
  public identidad;
  public token;

  constructor(public _usuarioService: UserService) {
    this.token = this._usuarioService.getToken2()
    this.identidad = this._usuarioService.getIdentidad()
    console.log(this.identidad.usuario)
  }

  ngOnInit(): void {

  }

}
