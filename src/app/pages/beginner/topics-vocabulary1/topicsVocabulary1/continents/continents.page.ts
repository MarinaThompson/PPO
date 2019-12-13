import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-continents',
  templateUrl: './continents.page.html',
  styleUrls: ['./continents.page.scss'],
})
export class ContinentsPage implements OnInit {

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
        img: '/assets/img/continents/northAmerica.png',
        titulo: '<b>North America</b>',
        resumo: 'Is a large continent in the Northern and Western Hemispheres of Earth. It is to the east of the Pacific Ocean, the west of the Atlantic Ocean, the south of the Arctic Ocean, and it is the northern part of the Americas.',

      },
      {
        id: 2,
        img: '/assets/img/continents/southAmerica.png',
        titulo: '<b>South America</b>',
        resumo: 'Is the continent to the south of North America. These two continents are separated by the Panama Canal.',

      },
      {
        id: 3,
        img: '/assets/img/continents/antartica.jpg',
        titulo: '<b>Antarctica</b>',
        resumo: 'Is the Earth´s southernmost continent.It is on the South Pole.It is almost entirely south of the Antarctic Circle. Around Antarctica is the Southern Ocean.',

      },
      {
        id: 4,
        img: '/assets/img/continents/africa.png',
        titulo: '<b>Africa</b>',
        resumo: 'Is the second largest continent in the world. It makes up about a fifth of the world´s land. It is surrounded by large areas of water.',

      },
      {
        id: 5,
        img: '/assets/img/continents/europe.png',
        titulo: '<b>Europe</b>',
        resumo: 'Is the western part of the continent of Eurasia, sometimes regarded as a continent in its own right. It is separated from Asia by the Ural Mountains in Russia and the Bosporus strait in Turkey.',

      },
      {
        id: 6,
        img: '/assets/img/continents/asia.jpg',
        titulo: '<b>Asia</b>',
        resumo: 'Asia is the largest continent on Earth. It is in the northern hemisphere. Asia is connected to Europe in the west. Together, Asia and Europe are called Eurasia.',

      },
      {
        id: 7,
        img: '/assets/img/continents/oceania.jpg',
        titulo: '<b>Oceania</b>',
        resumo: 'Oceania is a name used in geography for the region made up of Australia, New Zealand, New Guinea, and several other island nations in the surrounding area. Some people call this part of the world Australasia instead.',
      }
    ]
  }

  ngOnInit() {
  }

}
