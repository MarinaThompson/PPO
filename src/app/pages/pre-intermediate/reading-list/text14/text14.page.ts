import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text14',
  templateUrl: './text14.page.html',
  styleUrls: ['./text14.page.scss'],
})
export class Text14Page implements OnInit {

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
