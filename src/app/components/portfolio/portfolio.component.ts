import { Component, OnInit } from '@angular/core';
import { ImageDetails } from '../../interfaces/image-details';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  isLightContainerVisible: boolean = false;
  selectedPhoto:ImageDetails | undefined;
  isInsideImage: boolean = false;


  photos: Array<ImageDetails> = [];

  constructor(private photoservice: PhotosService) {  }

  ngOnInit(): void {
    this.photoservice.getPhotos().subscribe((photos) => {
      this.photos = photos
    })
  }

  showImage(photo: ImageDetails | undefined) {
    this.selectedPhoto = photo;
    this.isLightContainerVisible = true;
  }

  hideImage() {
    this.isLightContainerVisible = false;
  }

  setInsideImage(value: boolean) {
    this.isInsideImage = value;
  }
}
