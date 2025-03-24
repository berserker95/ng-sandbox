import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-back-button',
  imports: [MatIconModule],
  templateUrl: './back-button.component.html',
})
export class BackButtonComponent {

  constructor(private location: Location) {

  }

  goBack(): void {
    this.location.back();
  }
}
