import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaggleOverlayComponent } from './gaggle-overlay.component';

describe('OverlayComponent', () => {
  let component: GaggleOverlayComponent;
  let fixture: ComponentFixture<GaggleOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaggleOverlayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaggleOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
