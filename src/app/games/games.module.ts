import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GamesRoutingModule} from './games-routing.module';
import {GamesComponent} from './games/games.component';
import {MatTableModule} from '@angular/material/table';

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
