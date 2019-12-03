import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text20',
  templateUrl: './text20.page.html',
  styleUrls: ['./text20.page.scss'],
})
export class Text20Page implements OnInit {

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
