import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, first } from 'rxjs';
import { GameDTO } from '../dtos/game.dto';

@Injectable({
  providedIn: 'root',
})
export class ApiSpringDatasourceService {
  private ApiPath: string = '/api/games';

  constructor(private httpclient: HttpClient) {}

  getGames(): Observable<GameDTO[]> {
    return this.httpclient
      .get<GameDTO[]>(this.ApiPath)
      .pipe(first(), delay(1000));
  }

  saveGame(gameSaved: GameDTO): Observable<GameDTO> {
    return this.httpclient
      .post<GameDTO>(this.ApiPath, gameSaved)
      .pipe(first());
  }
}
