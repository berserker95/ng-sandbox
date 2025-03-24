import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalCounterComponent } from './signal-counter.component';
import { By } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

describe('SignalCounterComponent', () => {
  let component: SignalCounterComponent;
  let fixture: ComponentFixture<SignalCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalCounterComponent, MatIconModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SignalCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display initial count as 0', () => {
    const countElement = fixture.nativeElement.querySelector('p');
    expect(countElement.textContent).toContain('Count: 0');
  });

  it('should increment the count when the "+" button is clicked', () => {
    const incrementButton = fixture.debugElement.query(By.css('#increment-button'));
    incrementButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    const countElement = fixture.nativeElement.querySelector('p');
    expect(countElement.textContent).toContain('Count: 1');
  });

  it('should decrement the count when the "-" button is clicked', () => {
    component.count.set(5); // Set an initial value
    fixture.detectChanges();

    const decrementButton = fixture.debugElement.query(By.css('#decrement-button'));
    decrementButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    const countElement = fixture.nativeElement.querySelector('p');
    expect(countElement.textContent).toContain('Count: 4');
  });

  it('should increment and decrement multiple times correctly', () => {
    const incrementButton = fixture.debugElement.query(By.css('#increment-button'));
    const decrementButton = fixture.debugElement.query(By.css('#decrement-button'));

    incrementButton.triggerEventHandler('click', null);
    incrementButton.triggerEventHandler('click', null);
    decrementButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    const countElement = fixture.nativeElement.querySelector('p');
    expect(countElement.textContent).toContain('Count: 1');
  });

  it('should trigger navigation when the back button is clicked', () => {
    const backButton = fixture.debugElement.query(By.css('app-back-button'));
    expect(backButton).toBeTruthy();

    backButton.triggerEventHandler('click', null);
    fixture.detectChanges();

  });
  it('should display material icons correctly', () => {
    const incrementIcon = fixture.debugElement.query(By.css('.bg-blue-600 mat-icon'));
    const decrementIcon = fixture.debugElement.query(By.css('.bg-red-600 mat-icon'));

    expect(incrementIcon.nativeElement.textContent).toContain('add');
    expect(decrementIcon.nativeElement.textContent).toContain('remove');
  });
});
