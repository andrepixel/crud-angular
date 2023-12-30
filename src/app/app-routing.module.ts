import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GamesComponent} from "./games/games/games.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'games'
  },
  {
    path: 'games',
    pathMatch: 'full',
    loadChildren: () => import('./games/games.module').then(m => m.GamesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
