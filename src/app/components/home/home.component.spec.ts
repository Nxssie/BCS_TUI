import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have iframe with src url "itccanarias.org/web/es/"', () => {
    fixture = TestBed.createComponent(HomeComponent);
    const homeElement: HTMLElement = fixture.nativeElement;
    const homeIframe = homeElement.querySelector('iframe[src="https://www.itccanarias.org/web/es/"]');
    expect(homeIframe).toBeDefined();
  })
});
