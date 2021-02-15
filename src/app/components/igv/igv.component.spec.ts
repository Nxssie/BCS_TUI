import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IGVComponent } from './igv.component';

describe('IGVComponent', () => {
  let component: IGVComponent;
  let fixture: ComponentFixture<IGVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IGVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IGVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have div with class "igv-div"', () => {
    fixture = TestBed.createComponent(IGVComponent);
    const igvElement: HTMLElement = fixture.nativeElement;
    const igvDiv = igvElement.querySelector('.igv-div');
    expect(igvDiv).toBeDefined();
  })
});
