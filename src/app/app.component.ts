import { Component } from '@angular/core';
import { infoCard } from './app-infoCard.model';

@Component({ //decorador 
  selector: 'app-root', //nombre del componente 
  templateUrl: './app.component.html', // Ruta de la vista
  styleUrls: ['./app.component.css']  // Ruta de estilo de la Vista
})
export class AppComponent {
  title = 'desafio_1';
  card:infoCard = new infoCard(1, "", "", "", 2, "");
}

