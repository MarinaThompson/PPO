import { Component, OnInit } from '@angular/core';

import * as SoundboardMapping from '../../../models/soundboard.mapping';

import { Media, MediaObject } from '@ionic-native/media/ngx';



@Component({
  selector: 'app-text1',
  templateUrl: './text1.page.html',
  styleUrls: ['./text1.page.scss'],
})
export class Text1Page implements OnInit {

  private soundboardData: SoundboardMapping.SoundBoardMap[];
  private file: MediaObject;


  slides: any;

  slideText = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: false,
    pagination: {
      el: '.swiper-pagination',
    }
  };

  constructor(private media: Media) {
    this.soundboardData = SoundboardMapping.SoundboardMock;

  }



  public playSound(ressource: string) {
    if (this.file) {
      this.file.stop();
      this.file.release();
    }

    this.file = this.media.create('./assets/' + ressource);
    this.file.play();

  }



  ngOnInit() {
  }

}
