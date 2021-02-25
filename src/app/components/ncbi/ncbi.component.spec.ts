import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NcbiComponent } from './ncbi.component';

describe('NcbiComponent', () => {
  let component: NcbiComponent;
  let fixture: ComponentFixture<NcbiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NcbiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NcbiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
