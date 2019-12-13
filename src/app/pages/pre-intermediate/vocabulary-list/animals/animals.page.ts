import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.page.html',
  styleUrls: ['./animals.page.scss'],
})
export class AnimalsPage implements OnInit {


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
        img: '/assets/img/animal/bat.jfif',
        titulo: 'Bat',
      },
      {
        id: 2,
        img: '/assets/img/animal/bear.jfif',
        titulo: 'Bear',
      },
      {
        id: 3,
        img: '/assets/img/animal/bee.jfif',
        titulo: 'Bee',
      },
      {
        id: 4,
        img: '/assets/img/animal/bird.jfif',
        titulo: 'Bird',
      },
      {
        id: 5,
        img: '/assets/img/animal/bull.jfif',
        titulo: 'Bull',
      },
      {
        id: 6,
        img: '/assets/img/animal/butterfly.jpg',
        titulo: 'Butterfly',
      },
      {
        id: 7,
        img: '/assets/img/animal/camel.jfif',
        titulo: 'Camel',
      },
      {
        id: 8,
        img: '/assets/img/animal/chicken.jfif',
        titulo: 'Chicken',
      },
      {
        id: 9,
        img: '/assets/img/animal/cow.jfif',
        titulo: 'Cow',
      },
      {
        id: 10,
        img: '/assets/img/animal/crocodile.jfif',
        titulo: 'Crocodile',
      },
      {
        id: 11,
        img: '/assets/img/animal/dolphin.jfif',
        titulo: 'Dolphin',
      },
      {
        id: 12,
        img: '/assets/img/animal/elephant.jfif',
        titulo: 'Elephant',
      },
      {
        id: 13,
        img: '/assets/img/animal/fly.jfif',
        titulo: 'Fly',
      },
      {
        id: 14,
        img: '/assets/img/animal/giraffe.jfif',
        titulo: 'Giraffe',
      },
      {
        id: 15,
        img: '/assets/img/animal/goat.jfif',
        titulo: 'Goat',
      },
      {
        id: 16,
        img: '/assets/img/animal/horse.jfif',
        titulo: 'Horse',
      },
      {
        id: 17,
        img: '/assets/img/animal/jellyfish.jfif',
        titulo: 'Jellyfish',
      },
      {
        id: 18,
        img: '/assets/img/animal/kangaroo.jfif',
        titulo: 'Kangaroo',
      },
      {
        id: 19,
        img: '/assets/img/animal/lion.jfif',
        titulo: 'Lion',
      },
      {
        id: 20,
        img: '/assets/img/animal/monkeu.jfif',
        titulo: 'Monkey',
      },
      {
        id: 12,
        img: '/assets/img/animal/mosquito.jfif',
        titulo: 'Mosquito',
      },
      {
        id: 12,
        img: '/assets/img/animal/mouse.jfif',
        titulo: 'Mouse <br> (plural mice)',
      },
      {
        id: 12,
        img: '/assets/img/animal/pig.jfif',
        titulo: 'Pig',
      },
      {
        id: 12,
        img: '/assets/img/animal/rabbit.jfif',
        titulo: 'Rabbit',
      },
      {
        id: 12,
        img: '/assets/img/animal/shark.jfif',
        titulo: 'Shark',
      },
      {
        id: 12,
        img: '/assets/img/animal/sheep.jfif',
        titulo: 'Sheep',
      },
      {
        id: 12,
        img: '/assets/img/animal/snake.jfif',
        titulo: 'Snake',
      },
      {
        id: 12,
        img: '/assets/img/animal/spider.jfif',
        titulo: 'Spider',
      },
      {
        id: 12,
        img: '/assets/img/animal/tiger.jfif',
        titulo: 'Tiger',
      },
      {
        id: 12,
        img: '/assets/img/animal/whale.jfif',
        titulo: 'Whale',
      },
    ]
  }

  ngOnInit() {
  }

}
