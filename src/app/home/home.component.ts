import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  images: string[];

  constructor(config: NgbCarouselConfig) {
    config.interval = 4000;
    config.showNavigationArrows = false;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.showNavigationIndicators = false;
    config.wrap = true;
  }

  ngOnInit() {
    this.images = [1, 2, 3].map(
      () => `https://picsum.photos/${window.innerWidth}/${window.innerHeight}?random&t=${Math.random()}`,
    );
  }
}
