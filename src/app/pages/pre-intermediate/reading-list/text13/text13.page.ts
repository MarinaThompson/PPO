import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


@Component({
  selector: 'app-text13',
  templateUrl: './text13.page.html',
  styleUrls: ['./text13.page.scss'],
})
export class Text13Page implements OnInit {

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
      text: "Lucas works for a very famous manufacturing company in the United States. Because of his job, he has to go to a warehouse. He doesn't know yet that what he is about to see there is going to change his life forever. When he gets there, everything is dark. It looks like no one is there which is extremaly odd. He tries to call someone, but the place is empty. He doesn't understand what is happening. Suddently, he hears some heavy noise which seems very similar to a rocking chair. 'Is someone in here?', he screams. No one replies. Terrified, Lucas gets out of the warehouse and leaves. When he gets a call from his boss later, Lucas is embarrassed to tell him what happened, but he has to. His boss starts laughing and tells him a story. It seems like the building of the warehouse is indeed haunted. That said, Lucas' boss asked him to go back to finish the job he was supposed to do. Horrified, Lucas goes back but this time, with a co-worker. Everything goes well this time.",
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
