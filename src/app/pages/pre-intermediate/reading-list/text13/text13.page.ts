import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text13',
  templateUrl: './text13.page.html',
  styleUrls: ['./text13.page.scss'],
})
export class Text13Page implements OnInit {

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
