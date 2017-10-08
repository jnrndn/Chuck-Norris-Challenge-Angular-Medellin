import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ChuckNorrisService {

  constructor(private http: Http) { }

  getChuckNorrisJokes() {
    return this.http.get('https://api.chucknorris.io/jokes/random');
  }

}
