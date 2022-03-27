import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemesNewComponent } from './themes-new.component';

describe('ThemeNewComponent', () => {
  let component: ThemesNewComponent;
  let fixture: ComponentFixture<ThemesNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemesNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
