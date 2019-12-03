import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text12',
  templateUrl: './text12.page.html',
  styleUrls: ['./text12.page.scss'],
})
export class Text12Page implements OnInit {

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
