import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api-service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private service: ApiService) { }

  ngOnInit() {
    this.service.userById().subscribe(data => {
      console.log(data);
    })

    this.service.tagsOnUsers().subscribe(data => {
      console.log(data);
    })

    this.service.questionsOnUser().subscribe(data => {
      console.log(data);
    })
  }

}
