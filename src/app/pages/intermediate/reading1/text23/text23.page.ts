import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


@Component({
  selector: 'app-text23',
  templateUrl: './text23.page.html',
  styleUrls: ['./text23.page.scss'],
})
export class Text23Page implements OnInit {

  constructor(private tts: TextToSpeech) { }


  textToSpeech(text) {
    this.tts.speak({
      text: "Gordon was hungry. He opened the refrigerator. There must be something in here to eat, he thought. There was—a single hot dog. He took it out of its package and put a small frying pan onto the stove’s gas burner. He turned on the heat. Then he poured a little bit of vegetable oil into the pan. He sliced the hot dog in half lengthwise. When the oil got hot, he put the two halves in the pan. About a minute later, he flipped each half over. After another minute, he took the hot dog out of the pan. Gordon put two slices of bread into the toaster. This was tasty and healthy bread. The first ingredient listed was organic sprouted wheat. The first ingredient in ordinary bread is usually unbleached flour. When the toast popped up, he put mustard, mayonnaise, and ketchup on one slice. Then he added two slices of onion. On top of the onions, he placed the hot dog. On top of the hot dog, he put a couple of slices of apple. Then he added some bits of hot green chile, and then put the top piece of toast onto the chile bits.Ahh, what a sandwich, he thought, as he sat down to eat.",
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
