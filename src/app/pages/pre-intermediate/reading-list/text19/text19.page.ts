import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text19',
  templateUrl: './text19.page.html',
  styleUrls: ['./text19.page.scss'],
})
export class Text19Page implements OnInit {

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
