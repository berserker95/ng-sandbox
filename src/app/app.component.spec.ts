import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should contain a router-outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const routerOutlet = fixture.debugElement.query(By.css('router-outlet'));
    expect(routerOutlet).toBeTruthy();
  });
});

