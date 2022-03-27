import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemesDetailsComponent } from './themes-details.component';

describe('ThemesDetailsComponent', () => {
  let component: ThemesDetailsComponent;
  let fixture: ComponentFixture<ThemesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
