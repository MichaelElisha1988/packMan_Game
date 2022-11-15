import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoseGameComponent } from './lose-game.component';

describe('LoseGameComponent', () => {
  let component: LoseGameComponent;
  let fixture: ComponentFixture<LoseGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoseGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoseGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
