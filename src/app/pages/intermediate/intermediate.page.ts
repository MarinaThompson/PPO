import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-intermediate',
  templateUrl: './intermediate.page.html',
  styleUrls: ['./intermediate.page.scss'],
})
export class IntermediatePage implements OnInit {

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
