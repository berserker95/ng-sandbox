import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal-counter',
  imports: [CommonModule],
  templateUrl: './signal-counter.component.html',
  styleUrl: './signal-counter.component.scss'
})
export class SignalCounterComponent {
   count: WritableSignal<number> = signal(0);


   increment() {
    this.count.set(this.count() +  1);
   }

   decrement() {
    this.count.set(this.count() -  1);
   }
}
