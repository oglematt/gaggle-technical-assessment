import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentQueueComponent } from './incident-queue.component';

describe('IncidentQueueComponent', () => {
  let component: IncidentQueueComponent;
  let fixture: ComponentFixture<IncidentQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentQueueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidentQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
