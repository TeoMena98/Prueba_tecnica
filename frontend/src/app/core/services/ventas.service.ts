import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ApiResponse,
  VentasGetResponse,
} from '../interfaces/apì-response.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VentasService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<ApiResponse<VentasGetResponse>>(
      environment.API_URL + '/sales'
    );
  }
}
