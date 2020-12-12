import { Component } from '@angular/core';
import { BusinessService } from '../services/business.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'listing Page Dr';
  data = <any>[];
  constructor(private bussiness: BusinessService) {
    this.bussiness.getData().subscribe(data=>{
      this.data = data;
      console.warn(this.data)
    });
   }
}
