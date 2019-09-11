import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-days',
  templateUrl: './days.page.html',
  styleUrls: ['./days.page.scss'],
})
export class DaysPage implements OnInit {

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
        img: '/assets/img/days/monday.jpg',
        titulo: 'Monday',
        fonetica: '/ˈmʌnˌdeɪ/',
        example: '<b>Usage tips:</b><br>  Let’s meet for lunch on Monday.',

      },
      {
        id: 2,
        img: '/assets/img/days/tuesday.jpg',
        titulo: 'Tuesday',
        fonetica: '/ˈtuzˌdeɪ/ ou /ˈtjuːzdeɪ/',
        example: '<b>Usage tips:</b><br> I study English on Tuedays.',

      },
      {
        id: 3,
        img: '/assets/img/days/wednesday.jpg',
        titulo: 'Wednesday',
        fonetica: '/ˈwenzˌdeɪ/',
        example: '<b>Usage tips:</b><br> We usually do our homework on Wednesday.',

      },
      {
        id: 4,
        img: '/assets/img/days/thursday.png',
        fonetica: '/ˈθɜrzˌdeɪ/',
        titulo: 'Thursday',
        example: '<b>Usage tips:</b><br> She usually works at home on Thursdays.',

      },
      {
        id: 5,
        img: '/assets/img/days/friday.jpg',
        titulo: 'Friday',
        fonetica: '/ˈfraɪdeɪ/',
        example: '<b>Usage tips:</b><br> They’ll be here on Friday.',

      },
      {
        id: 6,
        img: '/assets/img/days/saturday.jpg',
        titulo: 'Saturday',
        fonetica: '/ˈsætərˌdeɪ/',
        example: '<b>Usage tips:</b><br> She goes to to church on Saturdays.',

      },
      {
        id: 7,
        img: '/assets/img/days/sunday.png',
        titulo: 'Sunday',
        fonetica: '/ˈsʌnˌdeɪ/',
        example: '<b>Usage tips:</b><br> She goes to the gym on Sundays.',
      }
    ]
  }

  ngOnInit() {
  }

}
