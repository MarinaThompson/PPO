import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


@Component({
  selector: 'app-text24',
  templateUrl: './text24.page.html',
  styleUrls: ['./text24.page.scss'],
})
export class Text24Page implements OnInit {

  constructor(private tts: TextToSpeech) { }

  textToSpeech(text) {
    this.tts.speak({
      text: "He saw a dog on the sidewalk. The dog looked lost. He approached the dog. He pats his head. “Nice doggy,” he said to the dog. The dog wagged his tail. The dog had a collar. He looked at the collar. It read the dog’s name. His name was Spike. Spike was a small dog. He looked well-groomed. “Come on, Spike,” he said to the dog. The dog followed him home. He brought the dog upstairs to his room. He opened a jar of dog food. He used to have a dog. He poured the dog food into a bowl. He placed it in front of Spike. Spike started eating. “I’ll take care of you, Spike,” he said to the dog. He knew the dog did not belong to him. He printed posters of Spike. The poster said “Found Dog”. He went around hanging the poster. Nobody came to find Spike.",
      locale: 'en-US',
      rate: 0.80
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
