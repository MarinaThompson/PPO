import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.page.html',
  styleUrls: ['./numbers.page.scss'],
})
export class NumbersPage implements OnInit {

  slides: any;

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: false,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    }
  };


  constructor() {

    this.slides = [
      {
        id: 1,
        img: '/assets/img/numbers/0.jpg',
        titulo: 'Number zero',
        example: '<b>Usage tips:</b><br> fjsdlsdlkfsdlk',

      },
      {
        id: 2,
        img: '/assets/img/numbers/1.jpg',
        titulo: 'Number one',
        example: '<b>Usage tips:</b><br> You are in room one',

      },
      {
        id: 3,
        img: '/assets/img/numbers/2.jpg',
        titulo: 'Number two',
        example: '<b>Usage tips:</b><br> fjsdlsdlkfsdlk',

      },
      {
        id: 4,
        img: '/assets/img/numbers/3.jpg',
        titulo: 'Number three',
        example: '<b>Usage tips:</b><br> I am in level three',

      },
      {
        id: 5,
        img: '/assets/img/numbers/4.jpg',
        titulo: 'Number four',
        example: '<b>Usage tips:</b><br> fjsdlsdlkfsdlk',

      },
      {
        id: 6,
        img: '/assets/img/numbers/5.jpg',
        titulo: 'Number five',
        example: '<b>Usage tips:</b><br> I always wake up at five',

      },
      {
        id: 7,
        img: '/assets/img/numbers/6.jpg',
        titulo: 'Number six',
        example: '<b>Usage tips:</b><br> I always wake up at five',
      },
      {
        id: 8,
        img: '/assets/img/numbers/7.jpg',
        titulo: 'Number seven',
        example: '<b>Usage tips:</b><br> There are seven women living here',
      },
      {
        id: 9,
        img: '/assets/img/numbers/8.jpg',
        titulo: 'Number eight',
        example: '<b>Usage tips:</b><br> On the eight day',
      },
      {
        id: 10,
        img: '/assets/img/numbers/9.jpg',
        titulo: 'Number nine',
        example: '<b>Usage tips:</b><br> I always wake up at five',
      },
      {
        id: 11,
        img: '/assets/img/numbers/10.png',
        titulo: 'Number ten',
        example: '<b>Usage tips:</b><br> She is ten years old',
      }
    ]
  }



  ngOnInit() {
  }

}
