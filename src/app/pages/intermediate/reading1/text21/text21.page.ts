import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


@Component({
  selector: 'app-text21',
  templateUrl: './text21.page.html',
  styleUrls: ['./text21.page.scss'],
})
export class Text21Page implements OnInit {

  constructor(private tts: TextToSpeech) { }

  textToSpeech(text) {
    this.tts.speak({
      text: "We live in a stressful world, and daily life can sometimes make us feel tired, stressed, or depressed. Some people go to the doctor's for help, others try alternative therapies, but the place to find a cure could be somewhere completely different: in the kitchen. Dr Paul Clayton, a food expert from Middlesex University, says 'The brain is affected by what you eat and drink, just like every other part of your body. Certain types of food contain substances which affect how you think and feel'. For example, food which is high in carbohydrates can makes us feel more relaxed. It also makes us feel happy. Research has shown that people on diets often begin to feel a little depressed after two weeks because they are eating fewer carbohydrates. On the other hand, food which is rich in protein makes us feel awake and focosed. Research has shown that schoolchildren who eat a high-protein breakfast often do better at school than children whose breakfast is lower in protein. Also eating the right kind of meal at lunchtime can make a difference if you have an exam in the afternoon or a business meeting where you need to make some quick decisions. In an experiment for a BBC TV programme two chess players, both former Britsh champions, had difference meals before playing each other. Paul had a plate of prosciutto and salad (full of protein from the red meat), and his opponent Terry has pasta with a creamy sauce (full of carbohydrates). In the chess match Terry felt sleepy, and took much longer than Paul to make decisions about what moves to make. The experiment was repeated several times with the same result. Another powerful  mood food could become a secret weapon in the fight against crime. In Bournemouth in the south of England, where late-night violence can be a problem, some nightclub owners have come up with a solution. They give their clients free chocolate at the end of the night. The results have been dramatic, with a 60% reduction in violence incidents. Why does chocolate make people less agressive? First, it causes the brain to release fell-good chemicals called endorphins. It also contains a lot of sugar, which gives you energy, and can help stop late-night tiredness turning into agression. These two things, together with a delicious taste, make chocolate a powerful mood changer.",
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
