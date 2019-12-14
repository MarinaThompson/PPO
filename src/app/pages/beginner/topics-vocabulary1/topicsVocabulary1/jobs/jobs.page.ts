import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.page.html',
  styleUrls: ['./jobs.page.scss'],
})
export class JobsPage implements OnInit {

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

  constructor(private tts: TextToSpeech) { }

  administratorToSpeech(text) {
    this.tts.speak({
      text: "An administrator",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  architectToSpeech(text) {
    this.tts.speak({
      text: "An architect",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  builderToSpeech(text) {
    this.tts.speak({
      text: "A builder",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  chefToSpeech(text) {
    this.tts.speak({
      text: "A chef / a cook",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  dentistToSpeech(text) {
    this.tts.speak({
      text: "A dentist",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  doctorToSpeech(text) {
    this.tts.speak({
      text: "A doctor",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  engineerToSpeech(text) {
    this.tts.speak({
      text: "An engineer",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  factoryToSpeech(text) {
    this.tts.speak({
      text: "A factory work",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  flightToSpeech(text) {
    this.tts.speak({
      text: "A flight attendant",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  footballerToSpeech(text) {
    this.tts.speak({
      text: "A footballer",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  hairdresserToSpeech(text) {
    this.tts.speak({
      text: "A hairdresser",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  journalistToSpeech(text) {
    this.tts.speak({
      text: "A journalist",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  lawyerToSpeech(text) {
    this.tts.speak({
      text: "A lawyer",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  bankToSpeech(text) {
    this.tts.speak({
      text: "A (bank) manager",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  modelToSpeech(text) {
    this.tts.speak({
      text: "A model",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  musicianToSpeech(text) {
    this.tts.speak({
      text: "A musician",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  nurseToSpeech(text) {
    this.tts.speak({
      text: "A nurse",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  pilotToSpeech(text) {
    this.tts.speak({
      text: "A pilot",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  policemanToSpeech(text) {
    this.tts.speak({
      text: "A policeman / a policewoman",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  receptionistToSpeech(text) {
    this.tts.speak({
      text: "A receptionist",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  shopToSpeech(text) {
    this.tts.speak({
      text: "A shop assistant",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  soldierToSpeech(text) {
    this.tts.speak({
      text: "A soldier",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  teacherToSpeech(text) {
    this.tts.speak({
      text: "A teacher",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  vetToSpeech(text) {
    this.tts.speak({
      text: "A vet",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  waiterToSpeech(text) {
    this.tts.speak({
      text: "A waiter / a waitress",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  ngOnInit() {
  }

}
