import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NcbiMsaComponent } from './ncbi-msa.component';

describe('NcbiMsaComponent', () => {
  let component: NcbiMsaComponent;
  let fixture: ComponentFixture<NcbiMsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NcbiMsaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NcbiMsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
