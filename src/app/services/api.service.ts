import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  REST_API_SERVER = 'http://localhost:3000/productList/';
  constructor(private http: HttpClient) {}

  postProduct(data: any) {
    const url = `${this.REST_API_SERVER}`;
    return this.http.post<any>(url, data);
  }

  getProduct() {
    const url = `${this.REST_API_SERVER}`;
    return this.http.get<any>(url);
  }

  updateProduct(data: any, id: number) {
    const url = `${this.REST_API_SERVER}${id}`;
    return this.http.put<any>(url, data);
  }

  deleteProduct(id: number) {
    const url = `${this.REST_API_SERVER}${id}`;
    return this.http.delete<any>(url);
  }
}
