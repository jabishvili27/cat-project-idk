import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AuthService } from 'src/app/service/auth.service';
import { LoadingService } from 'src/app/service/loading.service';
export interface SignInForm {
  email: string;
  password: string;
}
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  formGroup!: FormGroup;
  constructor(
    private auth: AuthService,
    private router: Router,
    private loadingService: LoadingService
  ) {}

  signIn({ email, password }: SignInForm) {
    if (!email || !password) {
      return;
    }
    this.loadingService.start();
    from(this.auth.signIn({ email, password }))
      .pipe(finalize(() => this.loadingService.stop()))
      .subscribe(() => {
        this.router.navigate(['content']);
      });
  }
  ngOnInit() {}
}