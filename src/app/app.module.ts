import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InfoBarComponent } from './info-bar/info-bar.component';
import { PlayerDataService } from './player-data.service';
import { BuildingListComponent } from './building-list/building-list.component';
import { BuildingsService } from './buildings.service';
import { BuildingDetailsComponent } from './building-details/building-details.component';

/*Define Routes*/
@NgModule({
  imports:      [ BrowserModule,
  FormsModule,
  ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: BuildingListComponent },
      /*{ path: 'buildingList', component: BuildingListComponent },*/
      { path: 'buildings/:buildingId', component: BuildingDetailsComponent },
      /*{ path: 'product-details/', component: InfoBarComponent },
      { path: 'product-details/:id', component: InfoBarComponent }*/
    ]) ],
  declarations: [ AppComponent, HelloComponent, InfoBarComponent, BuildingListComponent, BuildingDetailsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [PlayerDataService, BuildingsService]
  
})
export class AppModule { }
