import { Routes } from '@angular/router';
import { DashboardComponent } from '@features/dashboard/dashboard.component';
import { SignalCounterComponent } from '@features/examples/signal-counter/signal-counter.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'signal-counter', component: SignalCounterComponent },
];
