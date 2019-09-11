import { Component, OnInit } from '@angular/core';

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

  constructor() {
    this.slides = [
      {
        id: 1,
        img: '/assets/img/food/bread.jpeg',
        titulo: 'Bread',
      },
      {
        id: 2,
        img: '/assets/img/food/butter.jpg',
        titulo: 'Butter',

      },
      {
        id: 3,
        img: '/assets/img/food/cereal.png',
        titulo: 'Cereal',

      },
      {
        id: 4,
        img: '/assets/img/food/cheese.jpg',
        titulo: 'Cheese',

      },
      {
        id: 5,
        img: '/assets/img/food/coffee.jpg',
        titulo: 'Coffee',

      },
      {
        id: 6,
        img: '/assets/img/food/eggs.jpg',
        titulo: 'Eggs',

      },
      {
        id: 7,
        img: '/assets/img/food/jam.png',
        titulo: 'Jam',
      },
      {
        id: 8,
        img: '/assets/img/food/juice.jpg',
        titulo: '(orange) Juice',
      },
      {
        id: 9,
        img: '/assets/img/food/milk.png',
        titulo: 'Milk',
      },
      {
        id: 10,
        img: '/assets/img/food/sugar.jpg',
        titulo: 'Sugar',
      },
      {
        id: 11,
        img: '/assets/img/food/tea.jpg',
        titulo: 'Tea',
      },
      {
        id: 12,
        img: '/assets/img/food/toast.jpg',
        titulo: 'Toast',
      },
      {
        id: 13,
        img: '/assets/img/food/fish.jpg',
        titulo: 'Fish',
      },
      {
        id: 14,
        img: '/assets/img/food/meat.jpg',
        titulo: 'Meat',
      },
      {
        id: 15,
        img: '/assets/img/food/oil.jpg',
        titulo: '(olive) Oil',
      },
      {
        id: 16,
        img: '/assets/img/food/pasta.jpg',
        titulo: 'Pasta',
      },
      {
        id: 17,
        img: '/assets/img/food/rice.jpg',
        titulo: 'Rice',
      },
      {
        id: 18,
        img: '/assets/img/food/salad.jpg',
        titulo: 'Salad',
      },
      {
        id: 19,
        img: '/assets/img/food/carrots.jpg',
        titulo: 'Carrots',
      },
      {
        id: 20,
        img: '/assets/img/food/fries.jpg',
        titulo: 'Chips (French fries)',
      },
      {
        id: 21,
        img: '/assets/img/food/lettuce.png',
        titulo: 'Lettuce',
      },
      {
        id: 22,
        img: '/assets/img/food/mushrooms.jpg',
        titulo: 'Mushrooms',
      },
      {
        id: 23,
        img: '/assets/img/food/onions.jpg',
        titulo: 'Onions',
      },
      {
        id: 24,
        img: '/assets/img/food/peas.jpg',
        titulo: 'Peas',
      },
      {
        id: 25,
        img: '/assets/img/food/potatos.jpg',
        titulo: 'Potatoes',
      },
      {
        id: 26,
        img: '/assets/img/food/tomatoes.jpg',
        titulo: 'Tomatoes',
      },
      {
        id: 27,
        img: '/assets/img/food/apples.jpg',
        titulo: 'Apples',
      },
      {
        id: 28,
        img: '/assets/img/food/bananas.jpg',
        titulo: 'Bananas',
      },
      {
        id: 29,
        img: '/assets/img/food/oranges.png',
        titulo: 'Oranges',
      },
      {
        id: 30,
        img: '/assets/img/food/pineapple.jpg',
        titulo: 'Pineapple',
      },
      {
        id: 31,
        img: '/assets/img/food/strawberries.jpg',
        titulo: 'Strawberries',
      },
      {
        id: 32,
        img: '/assets/img/food/cake.jpg',
        titulo: 'Cake',
      },
      {
        id: 33,
        img: '/assets/img/food/fruitSalad.jpg',
        titulo: 'Fruit salad',
      },
      {
        id: 34,
        img: '/assets/img/food/iceCream.jpg',
        titulo: 'Ice cream',
      },
      {
        id: 35,
        img: '/assets/img/food/biscuits.jpg',
        titulo: 'Biscuits',
      },
      {
        id: 36,
        img: '/assets/img/food/chocolate.jpg',
        titulo: 'Chocolate',
      },
      {
        id: 37,
        img: '/assets/img/food/crisps.jpg',
        titulo: 'Crips',
      },
      {
        id: 38,
        img: '/assets/img/food/sandwiches.jpg',
        titulo: 'Sandwiches',
      },
      {
        id: 39,
        img: '/assets/img/food/sweets.jpg',
        titulo: 'Sweets',
      }
    ]
  }

  ngOnInit() {
  }

}
