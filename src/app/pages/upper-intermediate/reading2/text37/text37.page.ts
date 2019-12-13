import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-text37',
  templateUrl: './text37.page.html',
  styleUrls: ['./text37.page.scss'],
})
export class Text37Page implements OnInit {

  constructor(private tts: TextToSpeech) { }

  textToSpeech(text) {
    this.tts.speak({
      text: "They are both 16 years old and they go to the same high school. Tonight, there's a school dance at their school. It's the last one of this school year. Both of them are really excited. Charllote is hoping to meet Ben and to tell him that she likes him. Tracy doesn't care about the boys. She just wants to dance all night comes, they are really thrilled. Charllote is wearing a blue dress and Tracy is wearing a yeallow one. When they get there, Charllote is upset. Ben is not here. In fact, he is not coming anymore. He has other plans. Charllote decides to dance all night with Tracy instead and to talk with other classmates. She meets new people. It turned out to be a fun night. The music is really good. Hopefully, she is going to have another chance to tell Ben about her feelings.",
      locale: 'en-US',
      rate: 0.90
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
