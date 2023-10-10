import { Component } from '@angular/core';

/* 
  @component es un decorador que marca una clase como componente angular y proporciona metadatos de configuracion que
  determinan como se debe procesar, crear intancias y utilizar el componente en tiempo de ejecucion

  Mas informacion: https://angular.io/api/core/Component#styleurls
*/
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

}
