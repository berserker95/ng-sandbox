import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { provideRouter, Router } from '@angular/router';
import { Location } from '@angular/common';
import { SpyLocation } from '@angular/common/testing';
import { By } from '@angular/platform-browser';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardComponent],
      providers: [
        provideRouter([]), // Provides a mock router for navigation
        { provide: Location, useClass: SpyLocation },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct number of example cards', () => {
    const cards = fixture.debugElement.queryAll(By.css('#example-card'));
    expect(cards.length).toBe(component.examples().length);
  });

  it('should display the correct title and description for each example', () => {
    const example = component.examples()[0];
    const card = fixture.debugElement.query(By.css('#example-card'));

    expect(card.nativeElement.textContent).toContain(example.title);
    expect(card.nativeElement.textContent).toContain(example.description);
  });

  it('should navigate to the correct route when a card is clicked', () => {
    const navigateSpy = spyOn(router, 'navigate');
    const card = fixture.debugElement.query(By.css('#example-card'));
    card.triggerEventHandler('click', null);

    expect(navigateSpy).toHaveBeenCalledWith([component.examples()[0].id]);
  });
});
