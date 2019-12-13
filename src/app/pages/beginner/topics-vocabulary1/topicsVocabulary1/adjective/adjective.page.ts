import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-adjective',
  templateUrl: './adjective.page.html',
  styleUrls: ['./adjective.page.scss'],
})
export class AdjectivePage implements OnInit {


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
        titulo: 'Bad',
        opposite: 'The opposite: Good',
      },
      {
        id: 2,
        img: '/assets/img/adjectives/big.jpg',
        titulo: 'Big',
        opposite: 'The opposite: Small',


      },
      {
        id: 3,
        img: '/assets/img/adjectives/dangerous.jpg',
        titulo: 'Dangerous',
        opposite: 'The opposite: Safe',


      },
      {
        id: 4,
        img: '/assets/img/adjectives/dirty.jpg',
        titulo: 'Dirty',
        opposite: 'The opposite: Clean',


      },
      {
        id: 5,
        img: '/assets/img/adjectives/empty.jpg',
        titulo: 'Empty',
        opposite: 'The opposite: Full',


      },
      {
        id: 6,
        img: '/assets/img/adjectives/expensive.jpg',
        titulo: 'Expensive',
        opposite: 'The opposite: Cheap',


      },
      {
        id: 7,
        img: '/assets/img/adjectives/far.jpg',
        titulo: 'Far',
        opposite: 'The opposite: Near',

      },
      {
        id: 8,
        img: '/assets/img/adjectives/fast.jpg',
        titulo: 'Fast',
        opposite: 'The opposite: Slow',

      },
      {
        id: 9,
        img: '/assets/img/adjectives/high.jpg',
        titulo: 'High',
        opposite: 'The opposite: Low',

      },
      {
        id: 10,
        img: '/assets/img/adjectives/hot.jpg',
        titulo: 'Hot',
        opposite: 'The opposite: Cold',

      },
      {
        id: 11,
        img: '/assets/img/adjectives/olld.jpg',
        titulo: 'Old',
        opposite: 'The opposite: New',

      },
      {
        id: 12,
        img: '/assets/img/adjectives/rich.jpg',
        titulo: 'Rich',
        opposite: 'The opposite: Poor',

      },
      {
        id: 13,
        img: '/assets/img/adjectives/strong.jpg',
        titulo: 'Strong',
        opposite: 'The opposite: Weak',

      },
      {
        id: 14,
        img: '/assets/img/adjectives/wrong.jpg',
        titulo: 'Wrong',
        opposite: 'The opposite: Right',

      },
      {
        id: 15,
        img: '/assets/img/adjectives/blond.jpg',
        titulo: 'Blond',
        opposite: 'The opposite: Dark',

      },
      {
        id: 16,
        img: '/assets/img/adjectives/beautiful.jpg',
        titulo: 'Beautiful',
        opposite: 'The opposite: Ugly',

      },
      {
        id: 17,
        img: '/assets/img/adjectives/fat.jpg',
        titulo: 'Fat',
        opposite: 'The opposite: Thin',

      },
      {
        id: 18,
        img: '/assets/img/adjectives/old.jpg',
        titulo: 'Old',
        opposite: 'The opposite: Young',

      },
      {
        id: 19,
        img: '/assets/img/adjectives/tall.jpg',
        titulo: 'Tall',
        opposite: 'The opposite: Short',

      }

    ]
  }



  ngOnInit() {
  }

}
