import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api-service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  pageData: any;
  constructor(private service: ApiService) { 
  }

  ngOnInit() {
    this.service.featured_ques().subscribe(data => {
      console.log(data.items);
      this.pageData = data.items;
    })
  }

}
