import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-pre-intermediate',
  templateUrl: './pre-intermediate.page.html',
  styleUrls: ['./pre-intermediate.page.scss'],
})
export class PreIntermediatePage implements OnInit {

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
