import { Component } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { GamesService } from '../../services/games.service';
import { Game } from '../../dtos/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogGenericComponent } from 'src/app/shared/components/dialog-generic/dialog-generic.component';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent {
  games$: Observable<Game[]>;

  displayedColumns: string[] = ['id', 'name', 'company', 'category'];

  constructor(private service: GamesService, private dialog: MatDialog) {
    this.games$ = service.getGames().pipe(
      catchError(() => {
        this.onError("Não foi possível se comunicar com servidor.")

        return of([]);
      })
    );
  }

  onError(message: string){
    this.dialog.open(DialogGenericComponent, {
      data: message
    });
  }
}
