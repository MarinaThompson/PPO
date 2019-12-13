import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { AlertController, NavController, Platform } from '@ionic/angular';



@Component({
  selector: 'app-listening-beginner',
  templateUrl: './listening-beginner.page.html',
  styleUrls: ['./listening-beginner.page.scss'],
})
export class ListeningBeginnerPage implements OnInit {

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
        titulo: 'Try to say: <strong>"Good morning!"</strong>',
      },
      {
        id: 2,
        titulo: 'Try to say: <strong>"Good afternoon!"</strong>',
      },
      {
        id: 3,
        titulo: 'Try to say: <strong>"Good evening!"</strong>',
      },
      {
        id: 4,
        titulo: 'Try to say: <strong>"How are you?"</strong>',
      },
      {
        id: 5,
        titulo: 'Try to say: <strong>"I´m fine"</strong>',
      },
      {
        id: 6,
        titulo: 'Try to say: <strong>"My name is Marina."</strong>',
      },
      {
        id: 7,
        titulo: 'Try to say: <strong>"My favorite food is Pizza."</strong>',
      },
      {
        id: 8,
        titulo: 'Try to say: <strong>"I’m 18 years old."</strong>',
      },
      {
        id: 9,
        titulo: 'Try to say: <strong>"What time is it?"</strong>',
      },
      {
        id: 10,
        titulo: 'Try to say: <strong>"What day is it today?"</strong>',
      },
      {
        id: 11,
        titulo: 'Try to say: <strong>"I’m hungry."</strong>',
      },
      {
        id: 12,
        titulo: 'Try to say: <strong>"It’s too hot today!"</strong>',
      },
      {
        id: 13,
        titulo: 'Try to say: <strong>"How was your day?"</strong>',
      },
      {
        id: 14,
        titulo: 'Try to say: <strong>"What would you like for dinner?"</strong>',
      },
      {
        id: 15,
        titulo: 'Try to say: <strong>"I´m too tired."</strong>',
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