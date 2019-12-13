import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-housework',
  templateUrl: './housework.page.html',
  styleUrls: ['./housework.page.scss'],
})
export class HouseworkPage implements OnInit {

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
        img: '/assets/img/housework/cleanFloor.jfif',
        titulo: 'Clean the floor',
      },
      {
        id: 2,
        img: '/assets/img/housework/doIroning.jfif',
        titulo: 'Do the ironing',
      },
      {
        id: 3,
        img: '/assets/img/housework/doShopping.jfif',
        titulo: 'Do the shopping',
      },
      {
        id: 4,
        img: '/assets/img/housework/doWashing.jfif',
        titulo: 'Do the washing',
      },
      {
        id: 5,
        img: '/assets/img/housework/doWashingup.png',
        titulo: 'Do the washing up',
      },
      {
        id: 6,
        img: '/assets/img/housework/layTable.jfif',
        titulo: 'Lay the table <br> (opposite clear)',
      },
      {
        id: 7,
        img: '/assets/img/housework/makeBeds.jfif',
        titulo: 'Make the beds',
      },
      {
        id: 8,
        img: '/assets/img/housework/makeLunch.jfif',
        titulo: 'Make lunch',
      },
      {
        id: 9,
        img: '/assets/img/housework/pickupClothes.jfif',
        titulo: 'Pick up dirty clothes <br> (from the floor)',
      },
      {
        id: 10,
        img: '/assets/img/housework/putawayClothes.png',
        titulo: 'Put away your clothes',
      },
      {
        id: 11,
        img: '/assets/img/housework/takeoutRubbish.jfif',
        titulo: 'Take out the rubbish',
      },
      {
        id: 12,
        img: '/assets/img/housework/tidyRoom.jpg',
        titulo: 'Tidy your room',
      }
    ]
  }

  ngOnInit() {
  }

}
