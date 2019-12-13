import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { AlertController, NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-listening-pre-intermediate',
  templateUrl: './listening-pre-intermediate.page.html',
  styleUrls: ['./listening-pre-intermediate.page.scss'],
})
export class ListeningPreIntermediatePage implements OnInit {

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
        titulo: 'Try to say: <strong>"I’m taking a shower and going to bed."</strong>',
      },
      {
        id: 2,
        titulo: 'Try to say: <strong>"Could you bring me the menu, please?"</strong>',
      },
      {
        id: 3,
        titulo: 'Try to say: <strong>"I would like to order, please."</strong>',
      },
      {
        id: 4,
        titulo: 'Try to say: <strong>"Could you bring me the check, please?"</strong>',
      },
      {
        id: 5,
        titulo: 'Try to say: <strong>"I’m just browsing."</strong>',
      },
      {
        id: 6,
        titulo: 'Try to say: <strong>"Do you accept credit cards?"</strong>',
      },
      {
        id: 7,
        titulo: 'Try to say: <strong>"How much is the ticket?"</strong>',
      },
      {
        id: 8,
        titulo: 'Try to say: <strong>"I’m lost."</strong>',
      },
      {
        id: 9,
        titulo: 'Try to say: <strong>"Can you help me?"</strong>',
      },
      {
        id: 10,
        titulo: 'Try to say: <strong>"What are the opening hours?"</strong>',
      },
      {
        id: 11,
        titulo: 'Try to say: <strong>"What’s up?"</strong>',
      },
      {
        id: 12,
        titulo: 'Try to say: <strong>"Where is the restroom?"</strong>',
      },
      {
        id: 13,
        titulo: 'Try to say: <strong>"Where can I get a taxi?"</strong>',
      },
      {
        id: 14,
        titulo: 'Try to say: <strong>"I’m sorry. Can you speak slowly??"</strong>',
      },
      {
        id: 15,
        titulo: 'Try to say: <strong>"Where is the changing room?"</strong>',
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
