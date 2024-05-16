import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {Post, PostCreateInput, POSTS} from "../data/post";
import {Category, CategoryCreateInput} from "../data/category";
import {environment} from "../environment/environment";

@Injectable() //va dire au service qu'on a une classe qui peut être utilisé dans d'autres composants
export class PostService{

  private postsUrl = `${environment.apiUrl}v1/posts`;

  constructor(private http: HttpClient) {

  }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  create(post: PostCreateInput): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post);
  }

  update(post: Post): Observable<Post> {
    return this.http.put<Post>(this.postsUrl, post)
      .pipe(
        catchError(this.handleError<Post>('update', post))
      );
  }

  delete(post: Post): Observable<boolean> {
    return this.http.delete<boolean>(`${this.postsUrl}/${post.id}`);
  }

  protected handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`, error); // log to console
// Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // getPosts(): Observable<Post[]>{
  //   return of(POSTS)
  // }
}
