import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformatiomSectionComponent } from './informatiom-section.component';

describe('InformatiomSectionComponent', () => {
  let component: InformatiomSectionComponent;
  let fixture: ComponentFixture<InformatiomSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformatiomSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformatiomSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
