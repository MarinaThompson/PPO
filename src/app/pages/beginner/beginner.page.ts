import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-beginner',
  templateUrl: './beginner.page.html',
  styleUrls: ['./beginner.page.scss'],
})
export class BeginnerPage implements OnInit {

  constructor(
    private authServise: AuthService
  ) {

  }

  ngOnInit() {
  }

  async logout() {
    try {
      await this.authServise.logout();
    } catch (error) {
      console.error(error);
    }

  }

}


