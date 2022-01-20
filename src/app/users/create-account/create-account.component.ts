import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { SnackService } from 'src/app/core/services/snack.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  public step: number = 1;
  public loading: boolean = false;
  public formStepOne = this._formBuilder.group({
    name: [null, [Validators.required, Validators.maxLength(50)]],
    email: [null, [Validators.required, Validators.email]],
  });
  public formStepTwo = this._formBuilder.group({
    password: [null, [Validators.required, Validators.minLength(6)]],
    username: [null, [Validators.required, Validators.maxLength(20)]],
    terms_of_service: [false, [Validators.requiredTrue]],
  });

  constructor(
    private _formBuilder: FormBuilder,
    private _userService: UserService,
    private _snackService: SnackService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
  }

  public finishStepOne(): void {
    if (this.formStepOne.valid) {
      this.step = 2;
    }
  }

  public finishStepTwo(): void {
    if (this.formStepTwo.valid) {
      this.loading = true;
      const data = Object.assign({}, this.formStepOne.value, this.formStepTwo.value);
      this._userService.createAccount(data)
        .pipe(finalize(() => this.loading = false))
        .subscribe(
          () => {
            this._snackService.success('Sua conta foi cadastrada. Faça o login para continuar :)');
            this._router.navigate(['/']);
          }
        );
    }
  }

  public backStep(): void {
    if (this.step > 1) {
      this.step--;
    }
  }
}
