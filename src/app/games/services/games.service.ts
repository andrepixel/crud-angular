import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GameDTO } from '../dtos/game.dto';
import { ApiSpringDatasourceService } from '../datasources/api-spring-datasource.service';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  constructor(private datasource: ApiSpringDatasourceService) {}

  getGames(): Observable<GameDTO[]> {
    return this.datasource.getGames();
  }

  saveGame(gameSaved: GameDTO): Observable<GameDTO> {
    return this.datasource.saveGame(gameSaved);
  }
}
