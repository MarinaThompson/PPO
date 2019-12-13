import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-things',
  templateUrl: './things.page.html',
  styleUrls: ['./things.page.scss'],
})
export class ThingsPage implements OnInit {
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
        img: '/assets/img/things/book.jpg',
        titulo: 'A book',
      },
      {
        id: 2,
        img: '/assets/img/things/coin.jpg',
        titulo: 'A coin',

      },
      {
        id: 3,
        img: '/assets/img/things/creditCard.jpg',
        titulo: 'A credit card',

      },
      {
        id: 4,
        img: '/assets/img/things/diactionary.jpg',
        titulo: 'A dictionary',

      },
      {
        id: 5,
        img: '/assets/img/things/diary.jpg',
        titulo: 'A diary',

      },
      {
        id: 6,
        img: '/assets/img/things/glasses.jpg',
        titulo: 'Glasses',

      },
      {
        id: 7,
        img: '/assets/img/things/headphones.png',
        titulo: 'Headphones',
      },
      {
        id: 8,
        img: '/assets/img/things/identity.jpg',
        titulo: 'An identity card',
      },
      {
        id: 9,
        img: '/assets/img/things/iPod.jpg',
        titulo: 'An iPod',
      },
      {
        id: 10,
        img: '/assets/img/things/key.jpg',
        titulo: 'A key',
      },
      {
        id: 11,
        img: '/assets/img/things/laptop.jpg',
        titulo: 'A laptop',
      },
      {
        id: 12,
        img: '/assets/img/things/magazine.jpg',
        titulo: 'A magazine',
      },
      {
        id: 13,
        img: '/assets/img/things/mobile.jpg',
        titulo: 'A mobile (phone)',
      },
      {
        id: 14,
        img: '/assets/img/things/newspaper.jpg',
        titulo: 'A newspaper',
      },
      {
        id: 15,
        img: '/assets/img/things/photp.jpg',
        titulo: 'A photo',
      },
      {
        id: 16,
        img: '/assets/img/things/piecePaper.jpg',
        titulo: 'A piece of paper',
      },
      {
        id: 17,
        img: '/assets/img/things/purse.jpg',
        titulo: 'A purse',
      },
      {
        id: 18,
        img: '/assets/img/things/scissors.jpg',
        titulo: 'Scissors',
      },
      {
        id: 19,
        img: '/assets/img/things/stamp.jpg',
        titulo: 'A stamp',
      },
      {
        id: 20,
        img: '/assets/img/things/sunglasses.jpg',
        titulo: 'Sunglasses',
      },
      {
        id: 21,
        img: '/assets/img/things/umbrella.jpg',
        titulo: 'An umbrella',
      },
      {
        id: 22,
        img: '/assets/img/things/wallet1.jpg',
        titulo: 'A wallet',
      },
      {
        id: 23,
        img: '/assets/img/things/pen.jpg',
        titulo: 'A pen',
      },
      {
        id: 24,
        img: '/assets/img/things/pencil.jpg',
        titulo: 'A pencil',
      },
      {
        id: 25,
        img: '/assets/img/things/watch.jpg',
        titulo: 'A watch',
      },
      {
        id: 26,
        img: '/assets/img/things/ticket.jpg',
        titulo: 'A ticket',
      }

    ]
  }

  ngOnInit() {
  }

}
