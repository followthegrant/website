import {Http, RequestOptions} from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import {Url} from "url";
import {forEach} from "@angular/router/src/utils/collection";
import {Disclosure} from "../classes/Disclosure";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  fullResult: any[] = [];
  facets: any[] = [];
  disclosuresRaw: any[] = [];
  disclosures: Disclosure[] = new Array<Disclosure>();

  constructor(private service: SearchService) {

  }

  getResults(input : HTMLInputElement) {
    this.service.getResults(input)
      .subscribe(
        response => {
          this.fullResult = response.json();

          this.facets.push(response.json().facets);
          this.disclosuresRaw = response.json().disclosures;

          console.log(response.json());

          //TODO create all disclosure objects
          for (let disc of this.disclosuresRaw) {
            let Disc : Disclosure = new Disclosure(
              disc.author.name,
              disc.author.institutions,
              disc.author.disclosure,
              disc.type,
              disc.paper.abstract,
              disc.paper.date,
              disc.paper.doi,
              disc.paper.issn,
              disc.paper.journal,
              disc.paper.lang,
              disc.paper.publisher,
              disc.paper.tags,
              disc.paper.title,
              disc.paper.type,
              disc.paper.url
              );
            this.disclosures.push(Disc);
          }
        },
        error => {
          alert('An unexpected error occured');
          console.log(error);
        })
  }

  ngOnInit() {

  }
}
