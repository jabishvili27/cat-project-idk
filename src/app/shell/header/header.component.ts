import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  get isLoggedIn(): boolean {
    return this.auth.isLoggedIn;
  }

  constructor(
    private translateService: TranslateService,
    private router: Router,
    private auth: AuthService
  ) {}

  toka() {
    this.translateService.setDefaultLang('ka');
  }
  toen() {
    this.translateService.setDefaultLang('en');
  }
  signin() {
    this.router.navigate(['sign-in']);
  }
  signup() {
    this.router.navigate(['sign-up']);
  }
  signOut() {
    this.auth.signOut().then(() => {
      this.router.navigate(['sign-in']);
    });
  }
  ngOnInit(): void {}
}
