import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, first, tap } from 'rxjs';
import { Game } from '../dtos/game';

@Injectable({
  providedIn: 'root',
})
export class ApiSpringDatasourceService {
  private ApiPath: string = '/assets/api.json';

  constructor(private httpclient: HttpClient) {}

  getGames(): Observable<Game[]> {
    return this.httpclient.get<Game[]>(this.ApiPath).pipe(
      first(),
      delay(1000),
      tap((games) => console.log(games))
    );
  }
}
