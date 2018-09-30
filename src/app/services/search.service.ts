import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url = 'http://api.followthegrant.org';

  constructor(private http: Http) {

  }

  getResults(input: HTMLInputElement) {
    let searchString = input.value;

    return this.http.get(this.url + '/?q=' + searchString);
  }
}
