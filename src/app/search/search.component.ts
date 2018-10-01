import {Component, OnInit} from '@angular/core';
import { SearchService } from '../services/search.service';
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

  constructor(private service: SearchService) { }

  getResults(input : HTMLInputElement) {
    this.disclosures = new Array<Disclosure>();
    this.service.getResults(input)
      .subscribe(
        response => {
          this.fullResult = response.json();

          //this.facets.push(response.json().facets);
          this.disclosuresRaw = response.json().disclosures;

          console.log(response.json());

          //create all disclosure objects
          for (let disc of this.disclosuresRaw) {
            let Disc : Disclosure = new Disclosure(
              disc.author.name,
              disc.author.institutions,
              disc.disclosure,
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

  onNavigate(url: string){
    window.open(url, "_blank");
  }

  ngOnInit() {

  }
}

export interface DisclosureEventArgs {
  disc :Disclosure;
}
