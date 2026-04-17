import { Component, inject } from '@angular/core';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-tag-filter',
  standalone: true,
  templateUrl: './tag-filter.component.html',
  styleUrl: './tag-filter.component.scss'
})
export class TagFilterComponent {
  protected photos = inject(PhotoService);
}
