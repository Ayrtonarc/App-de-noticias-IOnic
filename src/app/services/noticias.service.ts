import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private http: HttpClient ) { }

  getTopHeadlines() {
    return this.http.get(`http://newsapi.org/v2/top-headlines?country=mx&apiKey=cdc72a0e91f14267835c4d2ac5490222`);
  }
}
