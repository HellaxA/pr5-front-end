import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Article} from "../common/article";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  url: string = 'http://localhost:8888/api/articles';

  constructor(private http: HttpClient) { }

  getAllArticles(): Observable<Article[]>{
    return this.http.get<Article[]>(this.url);
  }

  addArticle(article: string) : Observable<any> {
    return this.http.post(this.url, new Article(article))
  }
}
