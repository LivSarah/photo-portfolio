import { Component, input, output, effect, HostListener } from '@angular/core';
import { Photo, fullUrl } from '../../models/photo.model';

@Component({
  selector: 'app-lightbox',
  standalone: true,
  templateUrl: './lightbox.component.html',
  styleUrl: './lightbox.component.scss'
})
export class LightboxComponent {
  photo  = input<Photo | null>(null);
  close  = output<void>();

  protected fullUrl(id: string): string {
    return fullUrl(id);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.photo()) this.close.emit();
  }

  constructor() {
    effect(() => {
      document.body.style.overflow = this.photo() ? 'hidden' : '';
    });
  }
}
