import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { AlertController, NavController, Platform } from '@ionic/angular';


@Component({
  selector: 'app-listening-intermediate',
  templateUrl: './listening-intermediate.page.html',
  styleUrls: ['./listening-intermediate.page.scss'],
})
export class ListeningIntermediatePage implements OnInit {

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

  matches: String[];
  isRecording = false;
  textToSay: string;

  constructor(
    private tts: TextToSpeech,
    private speechRecognition: SpeechRecognition,
    public alertController: AlertController,
    public navCtrl: NavController,
    private plt: Platform,
    private cd: ChangeDetectorRef) {
    this.slides = [
      {
        id: 1,
        titulo: 'Try to say: <strong>"Is it far in case I decide to go on foot?"</strong>',
      },
      {
        id: 2,
        titulo: 'Try to say: <strong>"A table for 2, please!"</strong>',
      },
      {
        id: 3,
        titulo: 'Try to say: <strong>"How do you like your steak?"</strong>',
      },
      {
        id: 4,
        titulo: 'Try to say: <strong>"Rare / Medium / Well done"</strong>',
      },
      {
        id: 5,
        titulo: 'Try to say: <strong>"May I come in?"</strong>',
      },
      {
        id: 6,
        titulo: 'Try to say: <strong>"I want to open the window. Do you mind?"</strong>',
      },
      {
        id: 7,
        titulo: 'Try to say: <strong>"Have a nice trip!"</strong>',
      },
      {
        id: 8,
        titulo: 'Try to say: <strong>"Enjoy your meal!"</strong>',
      },
      {
        id: 9,
        titulo: 'Try to say: <strong>"See you tomorrow."</strong>',
      },
      {
        id: 10,
        titulo: 'Try to say: <strong>"I hope all will go well."</strong>',
      },
      {
        id: 11,
        titulo: 'Try to say: <strong>"Get well soon!"</strong>',
      },
      {
        id: 12,
        titulo: 'Try to say: <strong>"Everybody here is thinking of you."</strong>',
      },
      {
        id: 13,
        titulo: 'Try to say: <strong>"Nice [Pleased] to meet you."</strong>',
      },
      {
        id: 14,
        titulo: 'Try to say: <strong>"Best wishes on your birthday!"</strong>',
      },
      {
        id: 15,
        titulo: 'Try to say: <strong>"Hope all your Christmas dreams come true."</strong>',
      },

    ]

  }

  startListening() {
    let options = {
      language: 'en-US',
      matches: 1
    }
    this.speechRecognition.startListening(options).subscribe(matches => {
      this.matches = matches;
      this.cd.detectChanges();
    });
    this.isRecording = true;
  }

  stopListening() {
    this.speechRecognition.stopListening().then(() => {
      this.isRecording = false;
    });
  }

  getPermission() {
    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {
        if (!hasPermission) {
          this.speechRecognition.requestPermission();
        }
      });
  }

  isIOS() {
    return this.plt.is('ios');
  }

  textToSpeech(text) {
    this.tts.speak({
      text: this.textToSay,
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }




  ngOnInit() { }


}