// src/app/services/mtg.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MtgService {
  private baseUrl = 'https://api.magicthegathering.io/v1';

  constructor(private http: HttpClient) {}

  searchCards(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/cards?name=${name}`);
  }
}
