import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expressing-movement',
  templateUrl: './expressing-movement.page.html',
  styleUrls: ['./expressing-movement.page.scss'],
})
export class ExpressingMovementPage implements OnInit {

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
        img: '/assets/img/expressingMovement/across.jpg',
        titulo: 'Across (the road)',
      },
      {
        id: 2,
        img: '/assets/img/expressingMovement/along.jpg',
        titulo: 'Along (the street)',
      },
      {
        id: 3,
        img: '/assets/img/expressingMovement/down.jpg',
        titulo: 'Down (the steps)',
      },
      {
        id: 4,
        img: '/assets/img/expressingMovement/into.jfif',
        titulo: 'Into (the shop)',
      },
      {
        id: 5,
        img: '/assets/img/expressingMovement/outOF.jpg',
        titulo: 'Out of (the shop)',
      },
      {
        id: 6,
        img: '/assets/img/expressingMovement/over.jpg',
        titulo: 'Over (the bridge)',
      },
      {
        id: 7,
        img: '/assets/img/expressingMovement/past.jpg',
        titulo: 'Past (the church)',
      },
      {
        id: 8,
        img: '/assets/img/expressingMovement/round.png',
        titulo: 'Round / Around',
      },
      {
        id: 9,
        img: '/assets/img/expressingMovement/through.jpg',
        titulo: 'Through (the tunnel)',
      },
      {
        id: 10,
        img: '/assets/img/expressingMovement/towards.jpg',
        titulo: 'Towards (the lake)',
      },
      {
        id: 11,
        img: '/assets/img/expressingMovement/under.jpg',
        titulo: 'Under (the bridge)',
      },
      {
        id: 12,
        img: '/assets/img/expressingMovement/up.jfif',
        titulo: 'Up (the steps)',
      }
    ]
  }

  ngOnInit() {
  }

}
