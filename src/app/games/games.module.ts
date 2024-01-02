import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './components/games/games.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [GamesComponent],
  imports: [
    CommonModule,
    GamesRoutingModule,
    SharedModule,
  ],
  exports: [GamesComponent],
})
export class GamesModule {}
