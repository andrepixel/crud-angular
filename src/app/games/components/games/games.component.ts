import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GamesService } from '../../services/games.service';
import { Game } from '../../dtos/game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent {
  games: Observable<Game[]>;

  displayedColumns: string[] = ['id', 'name', 'company'];

  constructor(private service: GamesService) {
    this.games = service.getGames();
  }
}
