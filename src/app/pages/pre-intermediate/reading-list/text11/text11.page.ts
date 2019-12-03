import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text11',
  templateUrl: './text11.page.html',
  styleUrls: ['./text11.page.scss'],
})
export class Text11Page implements OnInit {

  constructor() { }

  slides: any;

  slideText = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: false,
    pagination: {
      el: '.swiper-pagination',
    }
  };

  ngOnInit() {
  }

}
