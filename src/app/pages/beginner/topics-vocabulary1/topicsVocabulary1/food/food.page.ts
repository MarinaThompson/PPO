import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
})
export class FoodPage implements OnInit {

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

  breadToSpeech(text) {
    this.tts.speak({
      text: "Bread",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  butterToSpeech(text) {
    this.tts.speak({
      text: "Butter",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  cerealToSpeech(text) {
    this.tts.speak({
      text: "Cereal",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  cheeseToSpeech(text) {
    this.tts.speak({
      text: "Cheese",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  coffeeToSpeech(text) {
    this.tts.speak({
      text: "Coffee",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  eggsToSpeech(text) {
    this.tts.speak({
      text: "Eggs",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  jamToSpeech(text) {
    this.tts.speak({
      text: "Jam",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  juiceToSpeech(text) {
    this.tts.speak({
      text: "(orange) Juice",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  milkToSpeech(text) {
    this.tts.speak({
      text: "Milk",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  sugarToSpeech(text) {
    this.tts.speak({
      text: "Sugar",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  teaToSpeech(text) {
    this.tts.speak({
      text: "Tea",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  toastToSpeech(text) {
    this.tts.speak({
      text: "Toast",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  fishToSpeech(text) {
    this.tts.speak({
      text: "Fish",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  oilToSpeech(text) {
    this.tts.speak({
      text: "(olive) Oil",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  pastaToSpeech(text) {
    this.tts.speak({
      text: "Pasta",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  riceToSpeech(text) {
    this.tts.speak({
      text: "Rice",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  saladToSpeech(text) {
    this.tts.speak({
      text: "Salad",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  meatToSpeech(text) {
    this.tts.speak({
      text: "Meat",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  carrotsToSpeech(text) {
    this.tts.speak({
      text: "Carrots",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  chipsToSpeech(text) {
    this.tts.speak({
      text: "Chips (French fries)",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  lettuceToSpeech(text) {
    this.tts.speak({
      text: "Lettuce",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  mushroomsToSpeech(text) {
    this.tts.speak({
      text: "Mushrooms",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  onionsToSpeech(text) {
    this.tts.speak({
      text: "Onions",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  peasToSpeech(text) {
    this.tts.speak({
      text: "Peas",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  potatoesToSpeech(text) {
    this.tts.speak({
      text: "Potatoes",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  tomatoesToSpeech(text) {
    this.tts.speak({
      text: "Tomatoes",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  applesToSpeech(text) {
    this.tts.speak({
      text: "Apples",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  bananasToSpeech(text) {
    this.tts.speak({
      text: "Bananas",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  orangesToSpeech(text) {
    this.tts.speak({
      text: "Oranges",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  pineappleToSpeech(text) {
    this.tts.speak({
      text: "Pineapple",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  strawberriesToSpeech(text) {
    this.tts.speak({
      text: "Strawberries",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  cakeToSpeech(text) {
    this.tts.speak({
      text: "Cake",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  fruitToSpeech(text) {
    this.tts.speak({
      text: "Fruit salad",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  icecreamToSpeech(text) {
    this.tts.speak({
      text: "Ice cream",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  biscuitsToSpeech(text) {
    this.tts.speak({
      text: "Biscuits",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }


  chocolateToSpeech(text) {
    this.tts.speak({
      text: "Chocolate",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  cripsToSpeech(text) {
    this.tts.speak({
      text: "Crips",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  sandwichesToSpeech(text) {
    this.tts.speak({
      text: "Sandwiches",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  sweetsToSpeech(text) {
    this.tts.speak({
      text: "Sweets",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }




  ngOnInit() {
  }

}
