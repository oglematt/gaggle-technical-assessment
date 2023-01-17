import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaggleCheckboxComponent } from './gaggle-checkbox.component';

describe('CustomCheckboxComponent', () => {
  let component: GaggleCheckboxComponent;
  let fixture: ComponentFixture<GaggleCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaggleCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaggleCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
