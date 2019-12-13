import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.page.html',
  styleUrls: ['./activities.page.scss'],
})
export class ActivitiesPage implements OnInit {

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
        img: '/assets/img/activities/wake.jpg',
        titulo: 'Wake up',
        example: 'Stop sleeping',

      },
      {
        id: 2,
        img: '/assets/img/activities/shower.jpg',
        titulo: 'Take a shower',
        example: 'Literally, to clean oneself in a shower.',

      },
      {
        id: 3,
        img: '/assets/img/activities/dressed.png',
        titulo: 'Get dressed',
        example: 'To put your clothes on.',

      },
      {
        id: 4,
        img: '/assets/img/activities/breakfast.png',
        titulo: 'Have breakfast',
        example: 'The first meal of the day especially when taken in the morning.',

      },
      {
        id: 5,
        img: '/assets/img/activities/dog.gif',
        titulo: 'Take a dog for walk',
        example: '',

      },
      {
        id: 6,
        img: '/assets/img/activities/doExercise.jpg',
        titulo: 'Do exercise',
        example: 'A process or activity carried out for a specific purpose, especially one concerned with a specified area or skill.',

      },
      {
        id: 7,
        img: '/assets/img/activities/goShopping.jpg',
        titulo: 'Go shopping',
        example: 'To visit places where goods are sold in order to look at and buy things.',
      },
      {
        id: 8,
        img: '/assets/img/activities/housework.jpg',
        titulo: 'Do the housework',
        example: 'Is work such as cleaning or washing that is done in a house.',
      },
      {
        id: 9,
        img: '/assets/img/activities/lunch.jpg',
        titulo: 'Have lunch',
        example: 'When we talk about eating our midday meal.',
      },
      {
        id: 10,
        img: '/assets/img/activities/watchTV.png',
        titulo: 'Watch TV',
        example: '',
      },
      {
        id: 11,
        img: '/assets/img/activities/coffee.jpg',
        titulo: 'Have a coffee',
        example: '',
      },
      {
        id: 12,
        img: '/assets/img/activities/goBed.jpg',
        titulo: 'Go bed',
        example: 'to lie down in one´s bed to sleep.',
      }
    ]
  }

  ngOnInit() {
  }

}
