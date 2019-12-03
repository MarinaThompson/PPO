import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text15',
  templateUrl: './text15.page.html',
  styleUrls: ['./text15.page.scss'],
})
export class Text15Page implements OnInit {

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
