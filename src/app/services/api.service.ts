import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Combo} from '../interfaces/combo.interface';
import {Portion} from '../interfaces/portion.interface';
import {Invoice} from '../interfaces/invoice.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getAllCombos(): Observable<any> {
    return this.http.get<Combo[]>(`${this.baseUrl}/getCombos`);
  }

  getAllPortions(): Observable<any> {
    return this.http.get<Portion[]>(`${this.baseUrl}/getPortions`);
  }

  registerSale(invoice: Invoice): Observable<any> {
    return this.http.post<Invoice>(`${this.baseUrl}/registerSale`, invoice);
  }
}
