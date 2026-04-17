export interface Photo {
  /** Google Drive file ID — found in the sharing URL */
  driveId: string;
  /** Display title shown in the lightbox */
  title: string;
  /** Short optional description */
  description?: string;
  /** Tags used for filtering, e.g. ["landscape", "norway", "fog"] */
  tags: string[];
  /** Optional: year the photo was taken */
  year?: number;
}

/** Thumbnail URL from Drive (no API key required for public files) */
export function thumbnailUrl(driveId: string, size = 600): string {
  return `https://drive.google.com/thumbnail?id=${driveId}&sz=w${size}`;
}

/** Full-resolution URL from Drive */
export function fullUrl(driveId: string): string {
  return `https://drive.google.com/uc?export=view&id=${driveId}`;
}
