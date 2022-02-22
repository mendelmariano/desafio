import { Overlay } from '@angular/cdk/overlay';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ResgateService } from './resgate.service';

describe('ResgateService', () => {
  let service: ResgateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, MatDialogModule],
      providers: [MatSnackBar, Overlay, HttpClient, MatDialog, {provide : MatDialogRef, useValue : {}}]
    });
    service = TestBed.inject(ResgateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
