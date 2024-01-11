import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './components/games/games.component';
import { GamesformComponent } from './components/gamesform/gamesform.component';

const routes: Routes = [
  {
    path: '',
    component: GamesComponent,
  },
  { path: 'add', component: GamesformComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesRoutingModule {}
