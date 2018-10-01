import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Disclosure} from "../classes/Disclosure";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url = 'http://api.followthegrant.org';
  private _currentDisclosure: Disclosure;

  constructor(private http: Http) { }

  get currentDisclosure () {
    return this._currentDisclosure;
  }

  set currentDisclosure (value : Disclosure) {
    this._currentDisclosure = value;
  }

  getResults(input: HTMLInputElement) {
    let searchString = input.value;
    return this.http.get(this.url + '/?q=' + searchString);
  }
}
