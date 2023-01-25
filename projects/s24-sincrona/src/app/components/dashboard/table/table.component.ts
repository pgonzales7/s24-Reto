import { Component, OnInit } from '@angular/core';
import { Users } from '../../../models/users';
import { UserServiceService } from '../../../services/user-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  // // Crear instancia de UserServices
  constructor( private userService: UserServiceService ) { }

  // // Ejecutar el método getAll del servicio al cargar el componente

  usersArray: Users[] = []; // Dentro del array irá la data de la API
  displayedColumns: string[] = ['id', 'name', 'username'];
  dataSource: any;
  clickedRows = new Set<Users>();

  ngOnInit() {
    // Ejecutar el método getAllInterceptor
    this.userService.getAll().subscribe({
      // next dice que hacer cuando se ejecutar el método
      next: (user: Users[]) => { 
        this.usersArray = user; 
        this.dataSource = this.usersArray;
        console.log(user) },
      // error y complete no son necesarios
      error: (e) => console.error(e),
      complete: () => console.info('La API funcionó con éxito')
    })
  }

}
