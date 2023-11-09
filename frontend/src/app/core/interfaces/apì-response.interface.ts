import { VentaModel } from '../models/venta.model';

export interface ApiResponse<T> {
  success: true;
  data: T;
}

export interface AuthResponse {
  token: string;
}

export interface VentasGetResponse {
  items: VentaModel[];
  totalItems: number;
}