import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItolComponent } from './itol.component';

describe('ItolComponent', () => {
  let component: ItolComponent;
  let fixture: ComponentFixture<ItolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
