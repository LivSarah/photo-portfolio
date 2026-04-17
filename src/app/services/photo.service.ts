import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../models/photo.model';

@Injectable({ providedIn: 'root' })
export class PhotoService {
  private http = inject(HttpClient);

  // ── State (signals) ────────────────────────────────────────────────────────
  private _photos   = signal<Photo[]>([]);
  private _loading  = signal(true);
  private _error    = signal<string | null>(null);
  private _selected = signal<Set<string>>(new Set());

  // ── Public reads ───────────────────────────────────────────────────────────
  readonly loading  = this._loading.asReadonly();
  readonly error    = this._error.asReadonly();

  /** Unique sorted tag list across all photos */
  readonly allTags = computed(() =>
    [...new Set(this._photos().flatMap(p => p.tags))].sort()
  );

  /** Active filter tags */
  readonly selectedTags = this._selected.asReadonly();

  /** Photos filtered by the active tag selection */
  readonly filteredPhotos = computed(() => {
    const sel = this._selected();
    if (sel.size === 0) return this._photos();
    return this._photos().filter(p => p.tags.some(t => sel.has(t)));
  });

  // ── Init ───────────────────────────────────────────────────────────────────
  constructor() {
    this.http.get<Photo[]>('assets/photos.json').subscribe({
      next:  photos => { this._photos.set(photos); this._loading.set(false); },
      error: err    => { this._error.set('Could not load photos.'); this._loading.set(false); console.error(err); }
    });
  }

  // ── Tag filter actions ─────────────────────────────────────────────────────
  toggleTag(tag: string): void {
    this._selected.update(set => {
      const next = new Set(set);
      next.has(tag) ? next.delete(tag) : next.add(tag);
      return next;
    });
  }

  clearFilters(): void {
    this._selected.set(new Set());
  }
}
