# Homepage cover photos

Add up to 20 JPG photos to this folder using these exact filenames:

`cover-01.jpg`, `cover-02.jpg`, ... `cover-20.jpg`

Number files consecutively without gaps. For example, if you have four photos, use `cover-01.jpg` through `cover-04.jpg`.

On every page load, the homepage detects the available files and randomly selects two different photos: one large and one small. You only need to add or replace image files; no HTML or JavaScript changes are required.

Recommended image format:

- JPG
- Portrait orientation, ideally 3:4 or 4:5
- At least 1200 px tall
- Keep the subject near the center because the cards use `object-fit: cover`

If fewer than two cover photos are available, `assets/portrait1.jpg` is used for the large card and `assets/portrait2.jpg` for the small card.
