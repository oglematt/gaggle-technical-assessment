import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaggleIconMenuButton } from './gaggle-icon-menu-button.component';

describe('IconMenuButtonComponent', () => {
  let component: GaggleIconMenuButton;
  let fixture: ComponentFixture<GaggleIconMenuButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaggleIconMenuButton ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaggleIconMenuButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
