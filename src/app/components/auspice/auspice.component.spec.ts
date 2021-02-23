import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuspiceComponent } from './auspice.component';

describe('AuspiceComponent', () => {
  let component: AuspiceComponent;
  let fixture: ComponentFixture<AuspiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuspiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuspiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
