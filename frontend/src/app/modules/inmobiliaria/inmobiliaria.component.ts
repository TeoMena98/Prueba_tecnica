import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-inmobiliaria',
  templateUrl: './inmobiliaria.component.html',
  styleUrls: ['./inmobiliaria.component.css'],
})
export class InmobiliariaComponent {
  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
  }
}
