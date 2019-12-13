import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


@Component({
  selector: 'app-text12',
  templateUrl: './text12.page.html',
  styleUrls: ['./text12.page.scss'],
})
export class Text12Page implements OnInit {

  slides: any;

  slideText = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: false,
    pagination: {
      el: '.swiper-pagination',
    }
  };


  constructor(private tts: TextToSpeech) { }

  textToSpeech(text) {
    this.tts.speak({
      text: "Ann loves to go bowling. That's her favorite activity every Friday nights. This week, she is going to with her new co-workers. Indeed, Ann has a new job as a teacher and she os trying to make new friends since she is new in town. She is excited to share with them her passion for bowling. All day, during the work, all she can think of is the amazing night she is about to have. When the night finally comes and it's time to go, she puts her favorite bowling shoes on and she joins her new friends at the bowling aisle. Anne feels a lot of pressure though because she wants her co-workers to appreciate her. She is new at this job so she hoping to make good impression. When she gets three strikes in a row, she can't believe it. Everyone is impressed by her skills and so is she. Happily, the bowling night is a success and everyone is enjoying the company of Ann.",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  textToPause() {
    this.tts.speak({
      text: "",
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));

  }



  ngOnInit() {
  }

}
