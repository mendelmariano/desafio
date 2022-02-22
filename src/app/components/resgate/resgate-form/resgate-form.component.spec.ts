import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, convertToParamMap, Router, RouterModule } from '@angular/router';
import { InvestmentService } from '../../investment/shared/investment.service';

import { ResgateFormComponent } from './resgate-form.component';

describe('ResgateFormComponent', () => {
  let component: ResgateFormComponent;
  let fixture: ComponentFixture<ResgateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterModule, MatSnackBarModule, HttpClientModule, MatDialogModule],
      declarations: [ ResgateFormComponent ],
      providers: [{ provide: Router, useValue: "" },
                    FormBuilder, InvestmentService, MatSnackBar, HttpClient, {
                      provide: ActivatedRoute,
                      useValue: {snapshot: {
                        paramMap: convertToParamMap({
                          nome: ""
                        })
                      }}
                    }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResgateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
