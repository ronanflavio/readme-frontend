import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loading: boolean = false;
  public form = this._formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required]],
  });

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    if (this._authService.token) {
      this._router.navigate(['/']);
    }
  }

  public login(): void {
    if (!this.loading) {
      this.loading = true;
      this._authService.login(this.form.value)
        .pipe(finalize(() => this.loading = false))
        .subscribe(
          () => {
            this._router.navigate(['/']);
          }
        );
    }
  }

}
