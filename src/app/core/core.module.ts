import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IMapComponent } from './components/i-map/i-map.component';
import { BurgerContainerComponent } from './components/burger-menu/burger-container/burger-container.component';
import { BurgerIconComponent } from './components/burger-menu/burger-icon/burger-icon.component';
import { BurgerTextComponent } from './components/burger-menu/burger-text/burger-text.component';
import { ViewSelectorComponent } from './components/view-selector/view-selector.component';

@NgModule({
  declarations: [
    IMapComponent,
    BurgerContainerComponent,
    BurgerIconComponent,
    BurgerTextComponent,
    ViewSelectorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IMapComponent,
    BurgerContainerComponent,
    ViewSelectorComponent
  ]
})
export class CoreModule { }
