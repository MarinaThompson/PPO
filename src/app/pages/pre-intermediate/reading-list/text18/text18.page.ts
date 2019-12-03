import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text18',
  templateUrl: './text18.page.html',
  styleUrls: ['./text18.page.scss'],
})
export class Text18Page implements OnInit {

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
