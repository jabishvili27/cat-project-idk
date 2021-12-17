import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AuthService } from 'src/app/service/auth.service';
import { LoadingService } from 'src/app/service/loading.service';
export interface SignUpForm {
  email: string;
  password: string;
}
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private router: Router,
    private loadingService: LoadingService
  ) {}

  signUp(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.loadingService.start();
    from(this.auth.signUp(form.value))
      .pipe(finalize(() => this.loadingService.stop()))
      .subscribe(() => {
        this.router.navigate(['content']);
      });
  }

  ngOnInit() {}
}
