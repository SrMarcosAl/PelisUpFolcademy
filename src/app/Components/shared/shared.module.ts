import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { TabComponent } from './tab/tab.component';



@NgModule({
  declarations: [CardComponent, TabComponent],
  imports: [
    CommonModule
  ],
  exports: [CardComponent, TabComponent]
})
export class SharedModule { }
