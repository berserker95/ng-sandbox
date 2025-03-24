import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { environment } from 'src/environments/environment';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render the title "NG-SANDBOX"', () => {
    const titleElement = fixture.nativeElement.querySelector('h1');
    expect(titleElement.textContent).toBe('NG-SANDBOX');
  });

  it('should have correct GitHub URL', () => {
    const githubLink = fixture.debugElement.query(By.css('a[aria-label="GitHub Profile"]'));
    expect(githubLink.nativeElement.href).toBe(environment.githubUrl);
  });

  it('should have correct LinkedIn URL', () => {
    const linkedinLink = fixture.debugElement.query(By.css('a[aria-label="LinkedIn Profile"]'));
    expect(linkedinLink.nativeElement.href).toBe(environment.linkedinUrl);
  });
});
