import {Component, OnInit} from '@angular/core';
import {Games} from "../dtos/games";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  games: Games[];

  displayedColumns: string[];

  constructor() {
    this.games = [
      {id: '1', name: 'Mario', company: 'Nintendo'},
      {id: '2', name: 'TLOU', company: 'Sony'},
      {id: '3', name: 'Halo', company: 'Microsoft'},
    ];

    this.displayedColumns = ['id', 'name', 'company'];
  }

  ngOnInit(): void {

  }
}
