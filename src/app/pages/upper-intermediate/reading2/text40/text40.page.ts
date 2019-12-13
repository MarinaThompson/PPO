import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-text40',
  templateUrl: './text40.page.html',
  styleUrls: ['./text40.page.scss'],
})
export class Text40Page implements OnInit {

  constructor(private tts: TextToSpeech) { }

  textToSpeech(text) {
    this.tts.speak({
      text: "David and Leah have been together for 6 years. They have a 3 years old daughter named Monica. On their last trip to Dominican Republic, David had a surprise for Leah. He asked her to marry him. Leah couldn't believe it. She was incredibly happy. Of course, she said yes. The rest of their trip was amazing. When they went back home, Leah called all of her family to tell them the good news. When she called her brother, she had a sad surprise. Her brother had bad news to tell her. He was getting a divorce. No need to say that when Leah told him she was going to get married, he wasn't enthusiastic. Actually, he told her that marriage is the end of the everything. Leah didn't want to believe him. She understood that the situation was different for him and his ex-wife, but she knew David and her were going to be happy. Indeed, they lived happily ever after. Marriage wasn't the end of them.",
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
