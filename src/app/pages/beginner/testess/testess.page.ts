import { Component, OnInit } from '@angular/core';
import { Testes } from 'src/app/interfaces/testes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testess',
  templateUrl: './testess.page.html',
  styleUrls: ['./testess.page.scss'],
})
export class TestessPage implements OnInit {

  private testes: Testes = {}

  constructor(private router: Router) { }

  ngOnInit() {
  }


}

