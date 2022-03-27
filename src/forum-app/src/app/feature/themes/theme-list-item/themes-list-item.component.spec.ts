import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemesListItemComponent } from './themes-list-item.component';

describe('ThemeListItemComponent', () => {
  let component: ThemesListItemComponent;
  let fixture: ComponentFixture<ThemesListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemesListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
