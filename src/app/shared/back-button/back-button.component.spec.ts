import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BackButtonComponent } from './back-button.component';
import { Location } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { provideRouter } from '@angular/router';
import { SpyLocation } from '@angular/common/testing';
import { By } from '@angular/platform-browser';

describe('BackButtonComponent', () => {
  let component: BackButtonComponent;
  let fixture: ComponentFixture<BackButtonComponent>;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackButtonComponent, MatIconModule],
      providers: [
        provideRouter([]), // Provide an empty router for navigation
        { provide: Location, useClass: SpyLocation }, // Mock Location for goBack()
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(BackButtonComponent);
    component = fixture.componentInstance;
    location = TestBed.inject(Location);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call goBack() when the button is clicked', () => {
    const goBackSpy = spyOn(component, 'goBack');
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);
    expect(goBackSpy).toHaveBeenCalled();
  });

  it('should navigate back when goBack() is called', () => {
    const backSpy = spyOn(location, 'back');
    component.goBack();
    expect(backSpy).toHaveBeenCalled();
  });

  it('should display a "Back" label and arrow_back icon', () => {
    const button = fixture.debugElement.query(By.css('button'));
    const icon = fixture.debugElement.query(By.css('mat-icon'));
    expect(button.nativeElement.textContent).toContain('Back');
    expect(icon.nativeElement.textContent).toContain('arrow_back');
  });
});
