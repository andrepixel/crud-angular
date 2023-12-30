import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../dtos/game';
import { ApiSpringDatasourceService } from '../datasources/api-spring-datasource.service';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private datasource: ApiSpringDatasourceService) { }

  getGames(): Observable<Game[]> {
    return this.datasource.getGames();
  }
}
