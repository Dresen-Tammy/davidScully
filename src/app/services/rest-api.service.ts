import { Injectable } from '@angular/core';
import { WindowService } from './window.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  private api_url: any;
  constructor( private win: WindowService, private http: HttpClient ) {
    this.api_url = ( this.win.nativeWindow.api_setting ) ?
      this.win.nativeWindow.api_settings.root + 'wp/v2' :
     'http://daviddresen.local/wp-json/wp/v2';
   }

   getPosts() {
     return this.http.get( this.api_url + 'posts' );
   }

   getPost( postId ) {
     return this.http.get( this.api_url + 'posts/' + postId );
   }

   getCategories() {
     return this.http.get( this.api_url + 'categories' );
   }

   getCategory(catId) {
    return this.http.get( this.api_url + 'categories/' + catId );
  }
}
