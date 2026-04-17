# How to add photos to your portfolio

## Step 1 — Upload to Google Drive

1. Open your Google Drive and create a folder called `portfolio` (or any name you like).
2. Upload your photo to that folder.
3. Right-click the photo → **Share** → change to **"Anyone with the link"** → copy the link.

The link looks like:
```
https://drive.google.com/file/d/1aBcDeFgHiJkLmNoPqRsTuV/view?usp=sharing
                                  ^^^^^^^^^^^^^^^^^^^^^^^^
                                  this is your File ID
```

Copy the long string between `/d/` and `/view` — that is your **Drive File ID**.

---

## Step 2 — Add the entry to photos.json

Open `src/assets/photos.json` and add a new object to the array:

```json
{
  "driveId": "1aBcDeFgHiJkLmNoPqRsTuV",
  "title":   "Your photo title",
  "description": "Optional short description",
  "tags":    ["landscape", "norway"],
  "year":    2025
}
```

**Tag tips:** keep tags lowercase, short, and consistent across photos
(e.g. always use `"landscape"` not sometimes `"Landscape"` or `"landscapes"`).

---

## Step 3 — Push to GitHub

```bash
git add src/assets/photos.json
git commit -m "add: <photo title>"
git push
```

GitHub Actions will automatically rebuild and redeploy your site within ~2 minutes.

---

## First-time GitHub Pages setup

1. Push this project to a new GitHub repository.
2. In your repo → **Settings** → **Pages** → Source: select **`gh-pages` branch**.
3. Update the `--base-href` value in `.github/workflows/deploy.yml` to match your repo name.
4. Done! Your site will be live at `https://<your-username>.github.io/<repo-name>/`.
