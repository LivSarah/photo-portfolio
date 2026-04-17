import { Component, input, output } from '@angular/core';
import { Photo, thumbnailUrl } from '../../models/photo.model';

@Component({
  selector: 'app-photo-card',
  standalone: true,
  templateUrl: './photo-card.component.html',
  styleUrl: './photo-card.component.scss'
})
export class PhotoCardComponent {
  photo  = input.required<Photo>();
  open   = output<Photo>();

  protected thumbnail(id: string): string {
    return thumbnailUrl(id, 600);
  }
}
