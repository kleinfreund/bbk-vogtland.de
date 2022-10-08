# bbk-vogtland.de

## Image processing

**Convert .tiff images to .jpg**:

```sh
convert *.tiff -set filename: "%t" %[filename:].jpg
```

**Resize images**:

```sh
mogrify -auto-orient -resize 1000x1500 *.jpg
```

**Compress images**:

```sh
mogrify -strip -interlace Plane -quality 75% *.jpg
```
