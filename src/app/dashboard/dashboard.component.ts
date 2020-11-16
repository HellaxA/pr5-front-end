import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ArticleService} from "../services/article.service";
import {Article} from "../common/article";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  articleFormGroup: FormGroup;
  articles: Article[] = [];

  constructor(private formBuilder: FormBuilder,
              private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleFormGroup = this.formBuilder.group({
      article: ['']
    });
    this.articleService.getAllArticles().subscribe(
      data => this.articles = data
    );
  }

  get article() {return this.articleFormGroup.get('article').value;}

  onSubmit() {
    this.articleService.addArticle(this.article).subscribe();
    this.articles.push(new Article(this.article));
  }
}
