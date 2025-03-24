import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalCounterComponent } from './signal-counter.component';
import { By } from '@angular/platform-browser';

describe('SignalCounterComponent', () => {
  let component: SignalCounterComponent;
  let fixture: ComponentFixture<SignalCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalCounterComponent]
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
    const incrementButton = fixture.debugElement.query(By.css('.increment'));
    incrementButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    const countElement = fixture.nativeElement.querySelector('p');
    expect(countElement.textContent).toContain('Count: 1');
  });

  it('should decrement the count when the "-" button is clicked', () => {
    component.count.set(5); // Set an initial value
    fixture.detectChanges();

    const decrementButton = fixture.debugElement.query(By.css('.decrement'));
    decrementButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    const countElement = fixture.nativeElement.querySelector('p');
    expect(countElement.textContent).toContain('Count: 4');
  });

  it('should increment and decrement multiple times correctly', () => {
    const incrementButton = fixture.debugElement.query(By.css('.increment'));
    const decrementButton = fixture.debugElement.query(By.css('.decrement'));

    incrementButton.triggerEventHandler('click', null);
    incrementButton.triggerEventHandler('click', null);
    decrementButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    const countElement = fixture.nativeElement.querySelector('p');
    expect(countElement.textContent).toContain('Count: 1');
  });
});
