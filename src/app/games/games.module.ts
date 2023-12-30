import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GamesRoutingModule} from './games-routing.module';
import {MatTableModule} from '@angular/material/table';
import { GamesComponent } from './components/games/games.component';

@NgModule({
  declarations: [
    GamesComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    MatTableModule
  ],
  exports: [
    GamesComponent
  ]
})
export class GamesModule {
}
