import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SearchService} from "../services/search.service";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        let name = params.get('name');

        // let result = SearchService.getResult(name);
      })
  }

}
