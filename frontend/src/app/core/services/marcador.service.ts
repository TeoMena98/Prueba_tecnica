import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../interfaces/apì-response.interface';
import { MarcadorModel } from '../models/marcador.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MarcadorService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<ApiResponse<MarcadorModel[]>>(
      environment.API_URL + '/shopping'
    );
  }

  add(desc: string, lat: number, lng: number) {
    return this.http.post(environment.API_URL + '/shopping', {
      description: desc,
      lat: lat,
      long: lng,
    });
  }

  update(id: string, desc: string, lat: number, lng: number) {
    return this.http.put(environment.API_URL + '/shopping/' + id, {
      description: desc,
      lat: lat,
      long: lng,
    });
  }

  remove(id: string) {
    return this.http.delete(environment.API_URL + '/shopping/' + id);
  }
}
