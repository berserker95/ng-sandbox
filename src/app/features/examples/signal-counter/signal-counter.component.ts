import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BackButtonComponent } from 'src/app/shared/back-button/back-button.component';

@Component({
  selector: 'app-signal-counter',
  imports: [CommonModule, BackButtonComponent, MatIconModule],
  templateUrl: './signal-counter.component.html',
})
export class SignalCounterComponent {
  count: WritableSignal<number> = signal(0);


  increment() {
    this.count.set(this.count() + 1);
  }

  decrement() {
    this.count.set(this.count() - 1);
  }
}
