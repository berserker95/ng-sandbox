import { NgFor } from '@angular/common';
import { Component, signal, Signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [NgFor],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  examples: Signal<{ id: string; title: string; description: string }[]> = signal([
    { id: 'signal-counter', title: 'Example 1: Counter', description: 'Signal-based counter example' },
  ]);

  constructor(private router: Router) { }

  navigateToExample(id: string) {
    this.router.navigate([id]);
  }

  trackById(index: number, item: { id: string }) {
    return item.id;
  }
}
