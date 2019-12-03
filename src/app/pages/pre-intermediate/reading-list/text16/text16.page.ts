import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text16',
  templateUrl: './text16.page.html',
  styleUrls: ['./text16.page.scss'],
})
export class Text16Page implements OnInit {

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
