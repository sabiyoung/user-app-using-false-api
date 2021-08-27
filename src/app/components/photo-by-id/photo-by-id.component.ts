import { Component, Input, OnInit } from '@angular/core';
import { PhotoService } from './../../services/photo.service';

@Component({
  selector: 'app-photo-by-id',
  templateUrl: './photo-by-id.component.html',
  styleUrls: ['./photo-by-id.component.scss']
})
export class PhotoByIdComponent implements OnInit {
  @Input() photoId!:number
  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
  }
  get photos() {
    return this.photoService.photos.filter((photo) => photo.id === this.photoId)
  }
}
