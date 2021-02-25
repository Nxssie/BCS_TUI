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

  it('should have iframe with src url "localhost:4000"', () => {
    fixture = TestBed.createComponent(AuspiceComponent);
    const ausElement: HTMLElement = fixture.nativeElement;
    const ausIframe = ausElement.querySelector('iframe[src="http://localhost:4000/"]');
    expect(ausIframe).toBeDefined();
  })
});
