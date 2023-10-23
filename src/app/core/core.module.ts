import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IMapComponent } from './components/i-map/i-map.component';
import { BurgerContainerComponent } from './components/burger-menu/burger-container/burger-container.component';
import { BurgerIconComponent } from './components/burger-menu/burger-icon/burger-icon.component';
import { BurgerTextComponent } from './components/burger-menu/burger-text/burger-text.component';
import { ViewSelectorComponent } from './components/view-selector/view-selector.component';
import { FilterSectionComponent } from './components/filter-section/filter-section.component';
import { EngagementViewsComponent } from './components/engagement-views/engagement-views.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';

@NgModule({
  declarations: [
    IMapComponent,
    BurgerContainerComponent,
    BurgerIconComponent,
    BurgerTextComponent,
    ViewSelectorComponent,
    FilterSectionComponent,
    EngagementViewsComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IMapComponent,
    BurgerContainerComponent,
    ViewSelectorComponent,
    EngagementViewsComponent,
    SideNavComponent
  ]
})
export class CoreModule { }
