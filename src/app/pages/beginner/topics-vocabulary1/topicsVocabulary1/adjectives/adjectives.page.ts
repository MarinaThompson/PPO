import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adjectives',
  templateUrl: './adjectives.page.html',
  styleUrls: ['./adjectives.page.scss'],
})
export class AdjectivesPage implements OnInit {
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
        img: '/assets/img/adjectives/bad.jpg',
        titulo: 'A book',
      },
      {
        id: 2,
        img: '/assets/img/adjectives/big.jpg',
        titulo: 'A coin',

      },
      {
        id: 3,
        img: '/assets/img/adjectives/dangerous.jpg',
        titulo: 'A credit card',

      },
      {
        id: 4,
        img: '/assets/img/adjectives/dirty.jpg',
        titulo: 'A dictionary',

      },
      {
        id: 5,
        img: '/assets/img/adjectives/empty.jpg',
        titulo: 'A diary',

      },
      {
        id: 6,
        img: '/assets/img/adjectives/expensive.jpg',
        titulo: 'Glasses',

      },
      {
        id: 7,
        img: '/assets/img/adjectives/far.png',
        titulo: 'Headphones',
      },
      {
        id: 8,
        img: '/assets/img/adjectives/fast.jpg',
        titulo: 'An identity card',
      },
      {
        id: 9,
        img: '/assets/img/adjectives/high.jpg',
        titulo: 'An iPod',
      },
      {
        id: 10,
        img: '/assets/img/adjectives/hot.jpg',
        titulo: 'A key',
      },
      {
        id: 11,
        img: '/assets/img/adjectives/old.jpg',
        titulo: 'A laptop',
      },
      {
        id: 12,
        img: '/assets/img/adjectives/rich.jpg',
        titulo: 'A magazine',
      },
      {
        id: 13,
        img: '/assets/img/adjectives/strong.jpg',
        titulo: 'A mobile (phone)',
      },
      {
        id: 14,
        img: '/assets/img/adjectives/wrong.jpg',
        titulo: 'A newspaper',
      },
      {
        id: 15,
        img: '/assets/img/adjectives/blonde.jpg',
        titulo: 'A photo',
      },
      {
        id: 16,
        img: '/assets/img/adjectives/beautiful.jpg',
        titulo: 'A piece of paper',
      },
      {
        id: 17,
        img: '/assets/img/adjectives/fat.jpg',
        titulo: 'A purse',
      },
      {
        id: 18,
        img: '/assets/img/adjectives/old.jpg',
        titulo: 'Scissors',
      },
      {
        id: 19,
        img: '/assets/img/adjectives/tall.jpg',
        titulo: 'A stamp',
      }

    ]
  }

  ngOnInit() {
  }

}
