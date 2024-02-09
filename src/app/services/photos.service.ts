import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ImageDetails, photos } from '../interfaces/image-details';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor() { }

  getPhotos():Observable<Array<ImageDetails>>{
    return of(photos)
    
  }
}
