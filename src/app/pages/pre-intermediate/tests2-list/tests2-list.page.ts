import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tests2-list',
  templateUrl: './tests2-list.page.html',
  styleUrls: ['./tests2-list.page.scss'],
})
export class Tests2ListPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
