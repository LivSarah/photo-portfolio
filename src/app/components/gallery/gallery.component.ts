import { Component, inject, signal } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { Photo } from '../../models/photo.model';
import { TagFilterComponent } from '../tag-filter/tag-filter.component';
import { PhotoCardComponent } from '../photo-card/photo-card.component';
import { LightboxComponent } from '../lightbox/lightbox.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [TagFilterComponent, PhotoCardComponent, LightboxComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  protected photos      = inject(PhotoService);
  protected selected    = signal<Photo | null>(null);
  protected currentYear = new Date().getFullYear();
}
