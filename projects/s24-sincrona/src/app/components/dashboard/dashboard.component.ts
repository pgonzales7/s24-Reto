import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1, img: 'https://www.teahub.io/photos/full/120-1209104_cute-dogs-cartoon-wallpaper-images-shiba-wallpaper-cartoon.jpg' },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1, img: 'https://material.angular.io/assets/img/examples/shiba1.jpg' },
          { title: 'Card 4', cols: 1, rows: 1, img: 'https://material.angular.io/assets/img/examples/shiba2.jpg' }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1, img: '../../../assets/img/dog-shiba-inu.png' },
        { title: 'Card 2', cols: 1, rows: 1, img: '../../../assets/img/dogs-shiba-inu.png' },
        { title: 'Card 3', cols: 1, rows: 2, img: 'https://material.angular.io/assets/img/examples/shiba1.jpg' },
        { title: 'Card 4', cols: 1, rows: 2, img: 'https://material.angular.io/assets/img/examples/shiba2.jpg' }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
