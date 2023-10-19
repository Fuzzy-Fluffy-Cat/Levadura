import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestcComponent } from './testc/testc.component';
import { InteractiveMapComponent } from './interactive-map/interactive-map.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BurgerMenuIconComponent } from './burger-menu-icon/burger-menu-icon.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeedComponent } from './feed/feed.component';
import { EngagementViewComponent } from './engagement-view/engagement-view.component';
import { EngagementNavComponent } from './engagement-nav/engagement-nav.component';
import { EngagementContentComponent } from './engagement-content/engagement-content.component';

@NgModule({
  declarations: [
    AppComponent,
    TestcComponent,
    InteractiveMapComponent,
    NavBarComponent,
    BurgerMenuIconComponent,
    DashboardComponent,
    FeedComponent,
    EngagementViewComponent,
    EngagementNavComponent,
    EngagementContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
