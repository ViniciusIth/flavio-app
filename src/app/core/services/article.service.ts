import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  findArticles({ tags, author, page }: { tags: string[]; author: string; page: number; }) {

  }
}
