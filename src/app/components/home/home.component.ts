import { Component } from '@angular/core';
import { CAROUSEL_DATA_ITEMS } from 'src/app/data/constants/carousel.const';
import { ICarouselItem } from '../shared/carousel/Icarousel-item.metadata';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS;

  constructor() {

  }

  ngOnInit(): void {
  }

}
