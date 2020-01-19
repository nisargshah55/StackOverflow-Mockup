import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: "root"
})

export class ApiService {

    constructor(private http: HttpClient) {
    }

    //Featured questions
    featured_ques(): Observable<any> {
        return this.http.get('https://api.stackexchange.com/questions/featured?order=desc&sort=activity&site=stackoverflow')
        .pipe(
            map(ques => {
                return ques;
            })
        )
    }

    //User By Id
    userById(): Observable<any> {
        return this.http.get('https://api.stackexchange.com/users/601299?order=desc&sort=reputation&site=stackoverflow')
        .pipe(
            map(ques => {
                return ques;
            })
        )
    }

    //Tags on Users
    tagsOnUsers(): Observable<any> {
        return this.http.get('https://api.stackexchange.com/users/601299/tags?order=desc&sort=popular&site=stackoverflow')
        .pipe(
            map(ques => {
                return ques;
            })
        )
    }

    //Questions on users
    questionsOnUser(): Observable<any> {
        return this.http.get('https://api.stackexchange.com/users/601299/questions?order=desc&sort=activity&site=stackoverflow')
        .pipe(
            map(ques => {
                return ques;
            })
        )
    }
} 