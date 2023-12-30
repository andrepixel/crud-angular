import {Component} from '@angular/core';
import {Games} from "./dtos/games";
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent {
  games: Games[] = [
    {id: '1', name: 'Mario', company: 'Nintendo'},
    {id: '2', name: 'TLOU', company: 'Sony'},
    {id: '3', name: 'Halo', company: 'Microsoft Corporation'}
  ]

  displayedColumns: string[] = ['id', 'name', 'company'];

  constructor() {
    new MatTableDataSource(this.games);
  }
}
