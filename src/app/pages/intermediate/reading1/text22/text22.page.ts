import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


@Component({
  selector: 'app-text22',
  templateUrl: './text22.page.html',
  styleUrls: ['./text22.page.scss'],
})
export class Text22Page implements OnInit {

  constructor(private tts: TextToSpeech) { }

  textToSpeech(text) {
    this.tts.speak({
      text: "It looked like rain. The sky was gray. It was almost noon, but the sun was hidden by a gray blanket. It was cool. There were no birds flying anywhere. A couple of birds sat on the telephone wire. Bob was standing outside talking to Bill. They both had their hands in their pockets. They knew that it was probably going to rain shortly. A sudden breeze blew some leaves off a tree onto the sidewalk. A young woman wearing a dark blue coat and jeans walked by. She was walking a small dog. It was pure white, and pretty. It sniffed at a tree trunk. The woman waited patiently. Finally, the dog lifted its leg. Bob said that he liked the rain. It was a nice change from the usual hot Los Angeles weather. And the plants could always use the extra water. Bill said the only thing he didn’t like about rain was that all the motor oil on the streets would get washed into the ocean, and so would all the trash. “But that never stops the surfers,” Bob said. “They don’t seem to care what’s in the water, as long as there are waves to surf on.” tiredness turning into agression. These two things, together with a delicious taste, make chocolate a powerful mood changer.",
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
