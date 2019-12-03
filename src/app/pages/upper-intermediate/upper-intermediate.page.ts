import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-upper-intermediate',
  templateUrl: './upper-intermediate.page.html',
  styleUrls: ['./upper-intermediate.page.scss'],
})
export class UpperIntermediatePage implements OnInit {

  constructor(private authServise: AuthService) { }

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
