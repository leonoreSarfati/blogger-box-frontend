import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Post, POSTS} from "../data/post";
import {Category} from "../data/category";
import {environment} from "../environment/environment";

@Injectable() //va dire au service qu'on a une classe qui peut être utilisé dans d'autres composants
export class PostService{

  private postsUrl = `${environment.apiUrl}v1/posts`;

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  getPosts(): Observable<Post[]>{
    return of(POSTS)
  }
}
