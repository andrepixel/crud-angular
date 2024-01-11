import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EnumCategoryGame } from 'src/app/shared/enums/category_game.enum';
import { ICategoryGame } from 'src/app/shared/interfaces/category_game.interface';

@Component({
  selector: 'app-gamesform',
  templateUrl: './gamesform.component.html',
  styleUrls: ['./gamesform.component.scss'],
})
export class GamesformComponent {
backPage() {
throw new Error('Method not implemented.');
}
cancel() {
throw new Error('Method not implemented.');
}
submit() {
throw new Error('Method not implemented.');
}
  form: FormGroup;

  categorys: ICategoryGame[];

  constructor(private formbuilder: FormBuilder) {
    this.form = formbuilder.group({
      name: [null],
      company : [null],
      category: [null],
    },);

    this.categorys = [
      {
        value: EnumCategoryGame.Action.toString(),
        viewValue: EnumCategoryGame.Action.toString(),
      },
      {
        value: EnumCategoryGame.Adventure.toString(),
        viewValue: EnumCategoryGame.Adventure.toString(),
      },
      {
        value: EnumCategoryGame.MMORPG.toString(),
        viewValue: EnumCategoryGame.MMORPG.toString(),
      },
      {
        value: EnumCategoryGame.RPG.toString(),
        viewValue: EnumCategoryGame.RPG.toString(),
      },
      {
        value: EnumCategoryGame.Race.toString(),
        viewValue: EnumCategoryGame.Race.toString(),
      },
      {
        value: EnumCategoryGame.Simulation.toString(),
        viewValue: EnumCategoryGame.Simulation.toString(),
      },
      {
        value: EnumCategoryGame.Sport.toString(),
        viewValue: EnumCategoryGame.Sport.toString(),
      },
      {
        value: EnumCategoryGame.Strategy.toString(),
        viewValue: EnumCategoryGame.Strategy.toString(),
      },
    ];
  }
}
