import { Component, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments = <any>[];

  constructor(private commentsService: CommentsService) { 
    this.commentsService.getComments().subscribe((comments: any)=>{
      this.comments = comments;
    })
  }

  ngOnInit(): void {
  }

}
