import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { EnumCategoryGame } from 'src/app/shared/enums/category_game.enum';
import { ICategoryGame } from 'src/app/shared/interfaces/category_game.interface';
import { GamesService } from '../../services/games.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { config } from 'rxjs';

@Component({
  selector: 'app-gamesform',
  templateUrl: './gamesform.component.html',
  styleUrls: ['./gamesform.component.scss'],
})
export class GamesformComponent {
  @ViewChild('nome_jogo')
  nome_jogo: ElementRef;

  @ViewChild('nome_empresa')
  nome_empresa: ElementRef;

  form: FormGroup;

  categorys: ICategoryGame[];

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private service: GamesService,
    private snackBar: MatSnackBar
  ) {
    this.nome_jogo = new ElementRef('');
    this.nome_empresa = new ElementRef('');

    this.form = this.formbuilder.group({
      name: new FormControl('', Validators.required),
      company: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
    });

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

  backPage() {
    this.router.navigate(['']);
  }

  cancel() {
    this.router.navigate(['']);
  }

  submit() {
    this.service.saveGame(this.form.value).subscribe({
      complete: () => {
        this.nome_jogo.nativeElement.value = '';
        this.nome_empresa.nativeElement.value = '';

        this.form.reset();
      },
      error: () =>
        this.snackBar.open(
          'Não foi possível salvar o jogo, tente novamente',
          undefined,
          { duration: 3000 }
        ),
    });
  }
}
