import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayGroundComponent } from './plat-ground.component';

describe('PlatGroundComponent', () => {
  let component: PlayGroundComponent;
  let fixture: ComponentFixture<PlayGroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayGroundComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayGroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
