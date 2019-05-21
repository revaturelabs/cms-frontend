import { Component, OnInit, Input } from '@angular/core';
import { resultList } from '../model/result-list.model';




@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  results = resultList;
  constructor() { }
  ngOnInit() {
    
  }
  }


