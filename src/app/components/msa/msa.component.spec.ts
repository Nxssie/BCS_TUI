import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsaComponent } from './msa.component';

describe('MsaComponent', () => {
  let component: MsaComponent;
  let fixture: ComponentFixture<MsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
/* 
  it('should create', () => {
    expect(component).toBeTruthy();
  }); */

  /* it('should have div with class "igv-div"', () => {
    fixture = TestBed.createComponent(MsaComponent);
    const msaElement: HTMLElement = fixture.nativeElement;
    const msaDiv = msaElement.querySelector('#msaTable');
    expect(msaDiv).toBeDefined();
  }) */
});
