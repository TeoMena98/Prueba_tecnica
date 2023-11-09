import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.authService.isLogged()) {
      this.router.navigate(['/']);
    }

    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required]),
    });
  }

  onSumbit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value.email);
    }
  }
}
