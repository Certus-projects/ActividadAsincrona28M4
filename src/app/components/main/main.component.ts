import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  username = '';
  password = '';
  error = '';
  userError = '';
  passError = '';
  validUsers = [
    {
      username: 'admin',
      password: 'admin',
    },
    {
      username: 'user',
      password: 'user',
    },
    {
      username: 'user2',
      password: 'user2',
    },
  ];
  constructor(private router: Router) {}

  redireccion = '';

  login() {
    this.error = '';
    this.userError = '';
    this.passError = '';
    if (this.validacion(this.username, this.password)) {
      if (this.username == '') {
        this.userError = 'El campo usuario no puede estar vacío';
      } else {
        this.userError = '';
      }

      if (this.password == '') {
        this.passError = 'El campo contraseña no puede estar vacío';
      } else {
        this.passError = '';
      }
    } else {
      if (this.userLogin(this.username, this.password)) {
        this.router.navigate(['/principal']);
      } else {
        this.error = 'Usuario o contraseña incorrectos';
      }
    }
  }

  userLogin(username: string, password: string) {
    let user = this.validUsers.find(
      (user) => user.username == username && user.password == password
    );
    if (user) {
      return true;
    } else {
      return false;
    }
  }

  validacion(username: string, password: string) {
    if (username == '' || password == '') {
      return true;
    } else {
      return false;
    }
  }
}
