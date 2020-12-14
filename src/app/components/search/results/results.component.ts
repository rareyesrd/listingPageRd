import { Component, OnInit, Input } from '@angular/core';
import { BusinessService } from 'src/app/services/business.service';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input() results: any;
  data = <any>[];
  constructor(private business: BusinessService) {
      this.business.getData().subscribe(data=>{
        this.data = data;
    });
  }
    
  ngOnInit(): void {
  }

}
