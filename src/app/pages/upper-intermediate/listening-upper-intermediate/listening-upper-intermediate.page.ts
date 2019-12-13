import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { AlertController, NavController, Platform } from '@ionic/angular';


@Component({
  selector: 'app-listening-upper-intermediate',
  templateUrl: './listening-upper-intermediate.page.html',
  styleUrls: ['./listening-upper-intermediate.page.scss'],
})
export class ListeningUpperIntermediatePage implements OnInit {

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
        titulo: 'Try to say: <strong>"Where is the nearest bank?"</strong>',
      },
      {
        id: 2,
        titulo: 'Try to say: <strong>"I would like to open up a current account."</strong>',
      },
      {
        id: 3,
        titulo: 'Try to say: <strong>"I would like to apply for a loan."</strong>',
      },
      {
        id: 4,
        titulo: 'Try to say: <strong>"Do you have some identification?"</strong>',
      },
      {
        id: 5,
        titulo: 'Try to say: <strong>"Where can I change my money?"</strong>',
      },
      {
        id: 6,
        titulo: 'Try to say: <strong>"Where should I sign?"</strong>',
      },
      {
        id: 7,
        titulo: 'Try to say: <strong>"Call a doctor, please!"</strong>',
      },
      {
        id: 8,
        titulo: 'Try to say: <strong>"I am not feeling well."</strong>',
      },
      {
        id: 9,
        titulo: 'Try to say: <strong>"What are the symptoms?"</strong>',
      },
      {
        id: 10,
        titulo: 'Try to say: <strong>"I´m having difficulty breathing."</strong>',
      },
      {
        id: 11,
        titulo: 'Try to say: <strong>"I´ve got a broken arm."</strong>',
      },
      {
        id: 12,
        titulo: 'Try to say: <strong>"My whole body hurts."</strong>',
      },
      {
        id: 13,
        titulo: 'Try to say: <strong>"I have been feeling dizzy and sweating a lot."</strong>',
      },
      {
        id: 14,
        titulo: 'Try to say: <strong>"I will check your blood pressure."</strong>',
      },
      {
        id: 15,
        titulo: 'Try to say: <strong>"You need to try and lose some weight."</strong>',
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