import { Injectable } from '@angular/core';
import { Photo } from '../model/photo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private _photos: Photo []=[];
  constructor(private http: HttpClient) {
this.getPhoto()
   }

   get photos(){
     return this._photos;
   }
   getPhoto() {
     this.http.get<Photo[]>('https://jsonplaceholder.typicode.com/photos')
     .subscribe(data => this._photos = data)
   }
}
