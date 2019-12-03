import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text17',
  templateUrl: './text17.page.html',
  styleUrls: ['./text17.page.scss'],
})
export class Text17Page implements OnInit {

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
