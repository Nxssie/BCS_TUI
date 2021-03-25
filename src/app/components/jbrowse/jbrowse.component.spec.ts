import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JbrowseComponent } from './jbrowse.component';

describe('JbrowseComponent', () => {
  let component: JbrowseComponent;
  let fixture: ComponentFixture<JbrowseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JbrowseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JbrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});