import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesformComponent } from './gamesform.component';

describe('GamesformComponent', () => {
  let component: GamesformComponent;
  let fixture: ComponentFixture<GamesformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamesformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
