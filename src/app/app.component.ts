import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Subject, interval, scan, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  httpClient = inject(HttpClient);

  trigger$ = new Subject<void>();

  crashingIt$ = this.trigger$.pipe(
    switchMap(() => interval(20)),
    switchMap(() =>
      this.httpClient.get('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41')
    ),
    scan((acc) => ++acc, 0)
  );

  constructor() {
    this.httpClient
      .get('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41')
      .subscribe((res) => {
        console.warn(res);
      });
  }
}
