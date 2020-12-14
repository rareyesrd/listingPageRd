import { Component, OnInit, Input } from '@angular/core';
import { BusinessService } from 'src/app/services/business.service';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  page = 4;
  @Input() results: any;
  data = <any>[];
  categories = <any>[];
  hours = new Date().getHours();
  isDayTime = this.hours > 6 && this.hours < 20;
  constructor(private business: BusinessService) {
      this.business.getData().subscribe(data=>{
        this.data = data;

        this.data.forEach(
          (el: { categories: any[] }) => {
            el.categories.forEach((el) => {
              this.categories.push({ name: el.name });
            });
          }
        );
    });
  }
    
  ngOnInit(): void {
    
  }
  
}
