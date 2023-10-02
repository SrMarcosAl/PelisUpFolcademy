import { Component } from '@angular/core';

@Component({ //decorador 
  selector: 'app-root', //nombre del componente 
  templateUrl: './app.component.html', // Ruta de la vista
  styleUrls: ['./app.component.css']  // Ruta de estilo de la Vista
})
export class AppComponent {
  title = 'desafio_1';
}
