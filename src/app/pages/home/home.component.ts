import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  elemento=false;

  usuarios:any = [];

  constructor(private traerUsuarios:UsersService){}

  ngOnInit(): void {
    this.traerUsuarios.getMostrar().subscribe(
      res => {
        console.log(res)
        this.usuarios = res;
      }, err => {

      }
    );
  }

  mostrar(){
    this.elemento=!this.elemento;
  }

}
