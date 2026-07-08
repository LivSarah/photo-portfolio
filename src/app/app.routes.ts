import { Routes } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PdfViewerComponent } from './components/pdf-viewer/pdf-viewer.component';

export const routes: Routes = [
  { path: '', component: GalleryComponent },
  { path: 'pdf', component: PdfViewerComponent },
  { path: '**', redirectTo: '' }
];
