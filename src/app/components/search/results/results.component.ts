import { Component, OnInit, Input } from '@angular/core';
import { BusinessService } from 'src/app/services/business.service';
import { CommentsService } from 'src/app/services/comments.service';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  p: number = 1;
  @Input() results: any;
  data = <any>[];
  comments = <any>[];
  categories = <any>[];
  topRating = <any>[];
  hours = new Date().getHours();
  isDayTime = this.hours > 6 && this.hours < 20;
  constructor(private business: BusinessService, private commentsService: CommentsService) {
      this.business.getData().subscribe(data=>{
        this.data = data;
        this.data.forEach(
          (el: { score: Number,categories: any[] }) => {
            this.topRating.push(el.score);
            el.categories.forEach((el) => {
              this.categories.push({ name: el.name });
            });
          }
        );
    });

    this.commentsService.getComments().subscribe((comments: any)=>{
      this.comments = comments;
      console.log(this.comments)
    })
  }
    
  ngOnInit(): void {
    let score = 1;
    for(let i = 0; i < this.topRating.length; i++){
      if(this.topRating[i] > score){
        score = this.topRating[i];
        console.log(score)
      }
    }
  }
  
}
