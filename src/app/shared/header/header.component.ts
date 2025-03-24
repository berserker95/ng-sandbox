import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  imports: [MatIconModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  githubUrl: string = environment.githubUrl;
  linkedinUrl: string = environment.linkedinUrl;
}
