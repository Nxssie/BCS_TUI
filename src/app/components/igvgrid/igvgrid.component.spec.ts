import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgvgridComponent } from './igvgrid.component';

describe('IgvgridComponent', () => {
  let component: IgvgridComponent;
  let fixture: ComponentFixture<IgvgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IgvgridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IgvgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
