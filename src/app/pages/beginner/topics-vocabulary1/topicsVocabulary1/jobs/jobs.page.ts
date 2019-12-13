import { Component, OnInit } from '@angular/core';


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

  constructor() {

    this.slides = [
      {
        id: 1,
        img: '/assets/img/job/administrator.jpg',
        titulo: 'An administrator',
        example: 'Is a person whose job involves helping to organize and supervise the way that an organization or institution functions.',
        audio: 'textToSpeech(text)',

      },
      {
        id: 2,
        img: '/assets/img/job/architect.jpg',
        titulo: 'An architect',
        example: 'Is a person who designs buildings.',

      },
      {
        id: 3,
        img: '/assets/img/job/builder.jpg',
        titulo: 'A builder',
        example: 'Is a person whose job is to build or repair houses and other buildings.',

      },
      {
        id: 4,
        img: '/assets/img/job/chef.jpg',
        titulo: 'A chef / a cook',
        example: 'A cook in charge of a kitchen, as of a restaurant; head cook',

      },
      {
        id: 5,
        img: '/assets/img/job/dentist.jpg',
        titulo: 'A dentist',
        example: 'Is a person who is qualified to examine and treat people´s teeth.',

      },
      {
        id: 6,
        img: '/assets/img/job/doctor.png',
        titulo: 'A doctor',
        example: 'Is someone who is qualified in medicine and treats people who are ill.',

      },
      {
        id: 7,
        img: '/assets/img/job/engineer.jpg',
        titulo: 'An engineer',
        example: 'Is a person who uses scientific knowledge to design, construct, and maintain engines and machines or structures such as roads, railways, and bridges.',
      },
      {
        id: 8,
        img: '/assets/img/job/factory.jpg',
        titulo: 'A factory work',
        example: 'Is a person who works in a factory',
      },
      {
        id: 9,
        img: '/assets/img/job/flight.jpg',
        titulo: 'A flight attendant',
        example: 'On an aeroplane, the flight attendants are the people whose job is to look after the passengers and serve their meals.',
      },
      {
        id: 10,
        img: '/assets/img/job/footballer.jpg',
        titulo: 'A footballer',
        example: 'Is a person who plays football, especially as a profession.',
      },
      {
        id: 11,
        img: '/assets/img/job/hairdresser.jpg',
        titulo: 'A hairdresser',
        example: 'Is a person who cuts, colours, and arranges people´s hair.',
      },
      {
        id: 12,
        img: '/assets/img/job/journalist.jpg',
        titulo: 'A journalist',
        example: 'Is a person whose job is to collect news and write about it for newspapers, magazines, television, or radio.',
      },
      {
        id: 13,
        img: '/assets/img/job/lawyer.jpg',
        titulo: 'A lawyer',
        example: 'Is a person who is qualified to advise people about the law and represent them in court.',
      },
      {
        id: 14,
        img: '/assets/img/job/manager.jpg',
        titulo: 'A (bank) manager',
        example: 'Is someone who is in charge of a bank, or a particular branch of a bank, and who is involved in making decisions about whether or not to lend money to businesses and individuals.',
      },
      {
        id: 15,
        img: '/assets/img/job/model.jpg',
        titulo: 'A model',
        example: 'Is a person with a role either to promote, display or advertise commercial products (notably fashion clothing in fashion shows), or to serve as a visual aid for people who are creating works of art or to pose for photography.',
      },
      {
        id: 16,
        img: '/assets/img/job/musician.jpg',
        titulo: 'A musician',
        example: 'Is a person who plays a musical instrument as their job or hobby.',
      },
      {
        id: 17,
        img: '/assets/img/job/nurse.jpg',
        titulo: 'A nurse',
        example: 'Is a person whose job is to care for people who are ill.',
      },
      {
        id: 18,
        img: '/assets/img/job/pilot.jpg',
        titulo: 'A pilot',
        example: 'Is a person who is trained to fly an aircraft.',
      },
      {
        id: 19,
        img: '/assets/img/job/policemen.jpg',
        titulo: 'A policeman / a policewoman',
        example: 'Is a man who is a member of the police force.',
      },
      {
        id: 20,
        img: '/assets/img/job/receptionist.jpg',
        titulo: 'A receptionist',
        example: 'In a hotel, the receptionist is the person whose job is to book rooms for people and answer their questions.',
      },
      {
        id: 21,
        img: '/assets/img/job/shop.jpg',
        titulo: 'A shop assistant',
        example: 'Is a person who works in a shop selling things to customers.',
      },
      {
        id: 22,
        img: '/assets/img/job/soldier.jpg',
        titulo: 'A soldier',
        example: 'Is a person who works in an army, especially a person who is not an officer.',
      },
      {
        id: 23,
        img: '/assets/img/job/teacher.jpg',
        titulo: 'A teacher',
        example: 'Is a person who teaches, usually as a job at a school or similar institution.',
      },
      {
        id: 24,
        img: '/assets/img/job/vet.jpg',
        titulo: 'A vet',
        example: 'Is someone who is qualified to treat sick or injured animals.',
      },
      {
        id: 25,
        img: '/assets/img/job/waitress.jpg',
        titulo: 'A waiter / a waitress',
        example: 'Is a man who works in a restaurant, serving people with food and drink.',
      }
    ]
  }

  ngOnInit() {
  }

}
