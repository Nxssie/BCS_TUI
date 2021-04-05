import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsagridComponent } from './msagrid.component';

describe('MsagridComponent', () => {
  let component: MsagridComponent;
  let fixture: ComponentFixture<MsagridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsagridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsagridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
