import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './components/games/games.component';
import { SharedModule } from '../shared/shared.module';
import { GamesformComponent } from './components/gamesform/gamesform.component';

@NgModule({
  declarations: [GamesComponent, GamesformComponent],
  imports: [
    CommonModule,
    GamesRoutingModule,
    SharedModule,
  ],
  exports: [GamesComponent, GamesformComponent],
})
export class GamesModule {}
