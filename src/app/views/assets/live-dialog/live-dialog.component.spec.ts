import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { LiveDialogComponent } from './live-dialog.component';

describe('LiveDialogComponent', () => {
  let component: LiveDialogComponent;
  let fixture: ComponentFixture<LiveDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveDialogComponent ],
      imports: [ MatDialogModule],
      providers: [{ provide: Router, useValue: "" },
                  {provide : MatDialogRef, useValue : {}},
                  { provide: MAT_DIALOG_DATA, useValue: { Data: {} } }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
